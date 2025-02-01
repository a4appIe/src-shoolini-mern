const Event = require("../models/eventSchema");
const cloudinary = require("../config/cloudinaryConfig");
const { uploadImage } = require("../utils/uploadImage");

const createEvent = async (req, res) => {
  try {
    const {
      title,
      agenda,
      desc,
      venue,
      time,
      visibility,
      date,
      speakersData,
    } = req.body;

    const { cover_image, host_image, speakers } = req.files;
    // Parse speakers metadata
    const speakersMetadata = JSON.parse(speakersData);

    if (
      !title ||
      !agenda ||
      !desc ||
      !visibility ||
      !venue ||
      !time ||
      !date ||
      !speakersData
    ) {
      return res
        .status(400)
        .json({ message: "Please fill all the fields", success: false });
    }

    // IMAGE UPLOAD -----------------
    const coverImage = await uploadImage(
      `data:image/jpeg;base64,${cover_image[0].buffer.toString("base64")}`,
      "cover_images"
    );

    let speakersArray = [];
    if (speakers) {
      for (let i = 0; i < speakers.length; i++) {
        const speakerImage = await uploadImage(
          `data:image/jpeg;base64,${speakers[i].buffer.toString("base64")}`,
          "speaker_images"
        );
        speakersArray.push({
          name: speakersMetadata[i]?.name,
          designation: speakersMetadata[i]?.designation,
          image: {
            imageUrl: speakerImage?.secure_url,
            imageId: speakerImage?.public_id,
          },
        });
      }
    }

    const event = Event.create({
      title,
      agenda,
      desc,
      venue,
      time,
      date,
      visibility,
      cover_image: {
        imageUrl: coverImage?.secure_url,
        imageId: coverImage?.public_id,
      },
      speakers: speakersArray,
    });

    res.status(200).json({
      message: "Event created successfully",
      success: true,
      event,
    });

  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", success: false });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find({});

    if (!events) {
      return res.status(404).json({
        message: "No events found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Events fetched successfully",
      success: true,
      events,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", success: false });
  }
};

const getSingleEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({
        message: "Event not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Event fetched successfully",
      success: true,
      event,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", success: false });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { visibility } = req.body;
    const { id } = req.params;

    if (!visibility) {
      return res
        .status(400)
        .json({ message: "Please fill the required field", success: false });
    }

    const event = await Event.findByIdAndUpdate(
      id,
      { visibility },
      { new: true }
    );

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Event updated successfully",
      success: true,
      event,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", success: false });
  }
};

module.exports = { createEvent, updateEvent, getEvents, getSingleEvent };
