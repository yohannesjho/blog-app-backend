const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./claudinaryConfig');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'blog-images', // Specify the folder in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'], // Restrict formats
  },
});

const upload = multer({ storage });

module.exports = upload;
