const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Wanderlust_DEV', // The folder in your Cloudinary account where the images will be stored
        allowed_formats: ['jpeg', 'png', 'jpg'] // Allowed image formats
    }
});

module.exports = {
    cloudinary,
    storage
};