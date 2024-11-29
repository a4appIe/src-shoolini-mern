const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  title: String,
  headline: String,
  date: String,
  address: String,
  desc: String,
  cover_image: String,
  about_image: String,
  speakers: Array,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event; 
