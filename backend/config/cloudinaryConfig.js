const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const cloudinaryConfig = async () => {
  try {
    await cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log("Cloudinary config successful")
  } catch (error) {
    console.log("Error: ", error)
  }
};

module.exports = cloudinaryConfig;