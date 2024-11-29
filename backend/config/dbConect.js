const mongoose = require('mongoose');
require("dotenv").config();

const dbConnect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("DB connected successfully");
    } catch (error) {
      console.log("Error in connecting DB");
    }
  };
  
  module.exports = dbConnect;