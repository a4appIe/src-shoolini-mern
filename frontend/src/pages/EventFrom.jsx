/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EventForm = () => {
  const { token } = localStorage.getItem("admin")
    ? JSON.parse(localStorage.getItem("admin"))
    : { token: null };
  const navigate = useNavigate();
  const [speakers, setSpeakers] = useState([
    { name: "", designation: "", image: null },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    agenda: "",
    category: "",
    venue: "",
    time: "",
    date: "",
    hostName: "",
    hostDesignation: "",
    hostImage: null,
    coverImage: null,
    aboutImage: null,
  });

  const handleEventForm = async (e) => {
    e.preventDefault();
    const formDatax = new FormData();

    // Append form data fields
    formDatax.append("title", formData.title);
    formDatax.append("desc", formData.desc);
    formDatax.append("agenda", formData.agenda);
    formDatax.append("category", formData.category);
    formDatax.append("venue", formData.venue);
    formDatax.append("time", formData.time);
    formDatax.append("date", formData.date);
    formDatax.append("host_name", formData.hostName);
    formDatax.append("host_designation", formData.hostDesignation);
    formDatax.append("visibility", formData.visibility);

    // Append images
    if (formData.hostImage) formDatax.append("host_image", formData.hostImage);
    if (formData.coverImage)
      formDatax.append("cover_image", formData.coverImage);
    if (formData.aboutImage)
      formDatax.append("about_image", formData.aboutImage);

    // Append speakers' file data
    speakers.forEach((speaker) => {
      if (speaker.image) {
        formDatax.append("speakers", speaker.image); // All speaker images under the same field
      }
    });

    // Append speakers' metadata as JSON
    formDatax.append(
      "speakersData",
      JSON.stringify(
        speakers.map((speaker) => ({
          name: speaker.name,
          designation: speaker.designation,
        }))
      )
    );

    // SENDING REQUEST ---------------
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/event/create`,
        formDatax,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.message);
      return navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleSpeakerChange = (index, field, value) => {
    const updatedSpeakers = [...speakers];
    updatedSpeakers[index][field] = value;
    setSpeakers(updatedSpeakers);
  };

  const addSpeaker = () => {
    setSpeakers([...speakers, { name: "", designation: "", image: null }]);
  };

  const removeSpeaker = (index) => {
    const updatedSpeakers = speakers.filter((_, i) => i !== index);
    setSpeakers(updatedSpeakers);
  };

  const handleFormDataChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (!token) {
      toast.error("Please login to continue");
      navigate("/admin");
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-5 py-10">
      <div className="w-full max-w-4xl bg-white p-8 rounded-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-darkRed">
          Create Event
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleEventForm}
        >
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter event title"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              onChange={handleFormDataChange}
            />
          </div>

          {/* Description */}
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="desc" className="block text-gray-700 font-medium">
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              rows="3"
              placeholder="Enter event description"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              onChange={handleFormDataChange}
            ></textarea>
          </div>

          {/* Agenda */}
          <div>
            <label htmlFor="agenda" className="block text-gray-700 font-medium">
              Agenda
            </label>
            <input
              type="text"
              id="agenda"
              name="agenda"
              placeholder="Enter event agenda"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              onChange={handleFormDataChange}
            ></input>
          </div>

          {/* Venue */}
          <div>
            <label htmlFor="venue" className="block text-gray-700 font-medium">
              Venue
            </label>
            <input
              id="venue"
              name="venue"
              type="text"
              placeholder="Enter venue"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              onChange={handleFormDataChange}
            />
          </div>

          {/* Time */}
          <div>
            <label htmlFor="time" className="block text-gray-700 font-medium">
              Time
            </label>
            <input
              id="time"
              name="time"
              type="time"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              onChange={handleFormDataChange}
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              onChange={handleFormDataChange}
            />
          </div>

          {/* Cover Image */}
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="coverImage"
              className="block text-gray-700 font-medium"
            >
              Cover Image
            </label>
            <input
              id="coverImage"
              name="coverImage"
              type="file"
              accept="image/*"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              onChange={handleFormDataChange}
            />
          </div>

          {/* Dynamic Speakers */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Speakers
            </label>
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 p-4 mb-4 rounded-md border"
              >
                <div className="w-full sm:w-[30%]">
                  <input
                    type="text"
                    placeholder="Speaker Name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    value={speaker.name}
                    onChange={(e) =>
                      handleSpeakerChange(index, "name", e.target.value)
                    }
                  />
                </div>
                <div className="w-full sm:w-[30%]">
                  <input
                    type="text"
                    placeholder="Designation"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    value={speaker.designation}
                    onChange={(e) =>
                      handleSpeakerChange(index, "designation", e.target.value)
                    }
                  />
                </div>
                <div className="w-full sm:w-[30%]">
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    onChange={(e) =>
                      handleSpeakerChange(index, "image", e.target.files[0])
                    }
                  />
                </div>
                <button
                  type="button"
                  className="w-full sm:w-auto text-red font-bold bg-transparent hover:bg-red-100 p-2 rounded-md hover:underline"
                  onClick={() => removeSpeaker(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="mt-2 text-blue-500 font-bold"
              onClick={addSpeaker}
            >
              + Add Speaker
            </button>
          </div>

          {/* Visibility */}
          <div>
            <label
              htmlFor="visibility"
              className="block text-gray-700 font-medium"
            >
              Visibility
            </label>
            <select
              id="visibility"
              name="visibility"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              onChange={handleFormDataChange}
            >
              <option value="">Select visibility</option>
              <option value="ongoing">Ongoing</option>
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-darkRed text-white rounded-md font-bold focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
