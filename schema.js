const joi = require("joi");

module.exports.listingSchema = joi.object({
    listing: joi.object({
        title: joi.string().required(),
        price: joi.number().required().min(0),
        description: joi.string().required(),
        country: joi.string().required(),
        location: joi.string().required(),

        category: joi.string().required(),   // <-- Add this

        image: joi.object({
            url: joi.string().allow("", null)
        })
    }).required()
});

module.exports.reviewSchema = joi.object({
    Review: joi.object().required({
        rating: joi.number().required().min(1).max(5),
        comment: joi.string().required()
    })
});