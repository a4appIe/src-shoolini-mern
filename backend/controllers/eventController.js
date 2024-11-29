const Event = require("../models/eventSchema");
const cloudinary = require("../config/cloudinaryConfig");
const { uploadImage } = require("../utils/uploadImage");

const createEvent = async (req, res) => {
  try {
    const {
      title,
      agenda,
      desc,
      category,
      venue,
      time,
      date,
      host_name,
      host_designation,
      speakersData,
    } = req.body;

    const { cover_image, about_image, host_image, speakers } = req.files;
    // Parse speakers metadata
    const speakersMetadata = JSON.parse(speakersData);

    if (
      !title ||
      !agenda ||
      !desc ||
      !category ||
      !venue ||
      !time ||
      !date ||
      !host_name ||
      !host_designation ||
      !speakersData
    ) {
      return res
        .status(400)
        .json({ message: "Please fill all the fields", success: false });
    }

    // IMAGE UPLOAD -----------------
    const aboutImage = await uploadImage(
      `data:image/jpeg;base64,${req.files.about_image[0].buffer.toString(
        "base64"
      )}`,
      "about_images"
    );
    const coverImage = await uploadImage(
      `data:image/jpeg;base64,${req.files.cover_image[0].buffer.toString(
        "base64"
      )}`,
      "cover_images"
    );
    const hostImage = await uploadImage(
      `data:image/jpeg;base64,${req.files.host_image[0].buffer.toString(
        "base64"
      )}`,
      "host_images"
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
    console.log({
      aboutImage: {
        imageUrl: aboutImage?.secure_url,
        imageId: aboutImage?.public_id,
      },
      coverImage: {
        imageUrl: coverImage?.secure_url,
        imageId: coverImage?.public_id,
      },
      hostImage: {
        imageUrl: hostImage?.secure_url,
        imageId: hostImage?.public_id,
      },
      speakersArray,
    });

    const event = Event.create({
      title,
      agenda,
      desc,
      category,
      venue,
      time,
      date,
      host: {
        name: host_name,
        designation: host_designation,
        image: {
          imageUrl: hostImage?.secure_url,
          imageId: hostImage?.public_id,
        },
      },
      about_image: {
        imageUrl: aboutImage?.secure_url,
        imageId: aboutImage?.public_id,
      },
      cover_image: {
        imageUrl: coverImage?.secure_url,
        imageId: coverImage?.public_id,
      },
      speakers: speakersArray,
    });

    res.status(200).json({
      message: "Image uploaded successfully",
      success: true,
      event,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

module.exports = { createEvent };
