const express = require('express');
const router = express.Router({ mergeParams: true }); // Merge params to access :id from parent route means we can send the review to the correct listing using the listing id from the parent route for new review and for deleting the review we can use the listing id to find the correct listing and then delete the review from that listing using the review id from the params.
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js")
const {validatereview, isLoggedIn,isreviewauthor} = require("../middleware.js");

const listingcontroller = require("../controllers/reviews.js");



// POST ROUTE FOR REVIEWS

router.post("/" ,isLoggedIn, validatereview, wrapAsync(listingcontroller.createReview));

// DELETE ROUTE FOR REVIEWS

router.delete("/:reviewId" ,isLoggedIn,isreviewauthor, wrapAsync(listingcontroller.deleteReview));


module.exports = router;