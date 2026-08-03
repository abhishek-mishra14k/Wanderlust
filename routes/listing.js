const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js")
const { isLoggedIn ,isOwner,validatelisting } = require("../middleware.js");
const listingcontroller = require("../controllers/listings.js");
const { list } = require('parser');
const multer = require('multer');  
const { storage } = require('../cloudConfig.js');  // this is used to store the uploaded files in the cloudinary
const upload = multer({ storage });  // this is used to store the uploaded files in the cloudinary


// NEW ROUTE

router.get("/new", isLoggedIn, listingcontroller.renderNewForm);


router
.route('/')
.get( wrapAsync(listingcontroller.index))  // INDEX ROUTE
.post( isLoggedIn, upload.single('listing[image]'),  validatelisting,wrapAsync(listingcontroller.createListing));  // CREATE ROUTE

//SEARCH ROUTE
router.get("/search", wrapAsync(listingcontroller.searchListings));

router.route('/:id')
.get( wrapAsync(listingcontroller.showListing)) // SHOW ROUTE
.put( isLoggedIn, isOwner, upload.single('listing[image]'), validatelisting ,wrapAsync(listingcontroller.updateListing)) // UPDATE ROUTE
.delete( isLoggedIn , isOwner , wrapAsync(listingcontroller.deleteListing))  // DELETE ROUTE


// EDIT ROUTE

router.get('/:id/edit' ,isLoggedIn, isOwner, wrapAsync(listingcontroller.renderEditForm));




module.exports = router;
