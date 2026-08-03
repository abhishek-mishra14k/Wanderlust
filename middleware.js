const Listing = require('./models/listing');
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");
const {reviewSchema} = require("./schema.js");

module.exports.isLoggedIn =(req, res, next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl; // this is used to store the url that the user was trying to access before being redirected to the login page so that after logging in the user can be redirected back to that url
        req.flash("error", "You must be signed in to create a listing");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl; // this is used to make the redirect url available in all the templates
        // delete req.session.redirectUrl; // this is used to delete the redirect url from the session after it has been used
    }
    next();
}


module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not the owner of this listing ");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validatelisting = (req,res,next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errorMessage = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400 , errorMessage);
    }else{
    next();
}};

module.exports.validatereview = (req,res,next) =>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errorMessage = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400 , errorMessage);
    }else{
    next();
}};

module.exports.isreviewauthor = async (req, res, next) => {
    let { id,reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not the author of this review ");
        return res.redirect(`/listings/${id}`);
    }
    next();
}