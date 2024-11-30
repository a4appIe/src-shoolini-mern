const mongoose = require("mongoose");

const speakerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  image: {
    imageUrl: { type: String },
    imageId: { type: String },
  },
});

const hostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  image: {
    imageUrl: { type: String },
    imageId: { type: String },
  },
});

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  agenda: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  time: { type: String, required: true },
  desc: { type: String, required: true },
  category: { type: String, required: true },
  visibility: { type: String, required: true },
  host: hostSchema,
  cover_image: {
    imageUrl: { type: String },
    imageId: { type: String },
  },
  about_image: {
    imageUrl: { type: String },
    imageId: { type: String },
  },
  speakers: [speakerSchema],
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
