const Event = require("../models/eventSchema");

const createEvent = async (req, res) => {
  const {
    title,
    headline,
    date,
    address,
    desc,
    cover_image,
    about_image,
    speakers,
  } = req.body;
  try {
    if (
      !title ||
      !headline ||
      !date ||
      !address ||
      !desc ||
      !cover_image ||
      !about_image ||
      !speakers
    ) {
      return res.status(400).json({
        message: "Please fill all fields",
        success: false,
      });
    }
    const event = await Event.create({
      title,
      headline,
      date,
      address,
      desc,
      cover_image,
      about_image,
      speakers,
    });
    return res.status(200).json({
      message: "Event created successfully",
      success: true,
      event,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

module.exports = {
  createEvent,
};
