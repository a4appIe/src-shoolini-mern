const cloudinary = require("cloudinary").v2;

const uploadImage = async (imagePath, folder) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: `events/${folder}`,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteImage = async (imageId) => {
  try {
    await cloudinary.uploader.destroy(imageId);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { uploadImage, deleteImage };
