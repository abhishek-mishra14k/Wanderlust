const Listing = require("../models/listing.js");
const GEOAPIFY_API_KEY = process.env.GEOAPIFY_API_KEY;


module.exports.index = async (req, res) => {
    const { category } = req.query;
    let allListings;
    if (category) {
        allListings = await Listing.find({ category });
    } else {
        allListings = await Listing.find({});
    }
    res.render("listings/index.ejs", { allListings });
};


module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs")
}


module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({path: "reviews", populate: {path: "author"}})
    .populate("owner"); // populate is used to get the details of the reviews instead of just the id of the reviews
    if(!listing){
        req.flash("error", "This listing does not exist");
        return res.redirect("/listings");
    }
    res.render("listings/Show.ejs", { listing });
}


module.exports.createListing = async (req, res, next) => {
    const address = `${req.body.listing.location}, ${req.body.listing.country}`;
    const response = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${GEOAPIFY_API_KEY}`
    );
    const data = await response.json();
    if (!data.features || data.features.length === 0) {
        req.flash("error", "Location not found");
        return res.redirect("/listings/new");
    }

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = data.features[0].geometry;
    await newListing.save();
    req.flash("success", "Successfully made a new listing");
    res.redirect("/listings");
};

module.exports.renderEditForm = async(req,res) =>{
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "This listing does not exist");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_200,h_250,c_fill");
    res.render('listings/edit.ejs' , {listing, originalImageUrl})
}

module.exports.updateListing = async(req,res) =>{
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id , {...req.body.listing});

    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url, filename};
    await listing.save();
}
    req.flash("success", "Successfully updated the listing");
    res.redirect(`/listings/${id}`)
}

module.exports.deleteListing = async (req,res) =>{
    let {id} = req.params;
    let deletedlistings = await Listing.findByIdAndDelete(id);
    req.flash("success", "Successfully deleted a listing");
    res.redirect("/listings");
}

module.exports.searchListings = async (req, res) => {
    const { q } = req.query;

    const allListings = await Listing.find({
        $or: [
            { title: { $regex: q, $options: "i" } },
            { location: { $regex: q, $options: "i" } },
            { country: { $regex: q, $options: "i" } }
        ]
    });

    if (allListings.length === 0) {
        req.flash("error", "No listings found");
        return res.redirect("/listings");
    }

    res.render("listings/index.ejs", { allListings });
};