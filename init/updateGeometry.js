require("dotenv").config();

const mongoose = require("mongoose");
const Listing = require("../models/listing");

const GEOAPIFY_API_KEY = process.env.GEOAPIFY_API_KEY;

const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

async function updateGeometry() {
    await mongoose.connect(mongo_url);
    console.log("Connected to MongoDB");

    const listings = await Listing.find({});

    for (let listing of listings) {
        // Skip listings that already have geometry
        if (listing.geometry && listing.geometry.coordinates?.length) {
            continue;
        }

        const address = `${listing.location}, ${listing.country}`;

        try {
            const response = await fetch(
                `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${GEOAPIFY_API_KEY}`
            );

            const data = await response.json();

            if (data.features && data.features.length > 0) {
                listing.geometry = data.features[0].geometry;
                await listing.save();
                console.log(`Updated: ${listing.title}`);
            } else {
                console.log(`No location found: ${listing.title}`);
            }
        } catch (err) {
            console.log(`Error updating ${listing.title}:`, err.message);
        }
    }

    console.log("All listings updated.");
    mongoose.connection.close();
}

updateGeometry();