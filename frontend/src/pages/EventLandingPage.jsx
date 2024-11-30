import React, { useEffect, useState } from "react";
import SpeakerCard from "../components/SpeakerCard";
import HERO_BG from "/bg-img.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EventLandingPage = () => {
  const [adminData, setAdminData] = useState(null);
  const [event, setEvent] = useState({});
  const eventId = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id, token } = localStorage.getItem("admin")
    ? JSON.parse(localStorage.getItem("admin"))
    : null;
  const admin = adminData?._id == id ? true : false;

  const [visibility, setVisibility] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  const fetchAdminData = async () => {
    try {
      let res = await axios.get("http://localhost:5000/api/v1/admin");
      res.data ? setAdminData(res?.data?.admin[0]) : null;
    } catch (error) {
      // console.error("Error fetching data: ", error);
    }
  };

  const fetchEventData = async () => {
    try {
      let res = await axios.get(
        `http://localhost:5000/api/v1/event/${eventId.id}`
      );
      setEvent(res.data.event);
      setVisibility(res.data.event.visibility);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const updateVisibility = async () => {
    try {
      let res = await axios.patch(
        `http://localhost:5000/api/v1/event/update/${eventId.id}`,
        { visibility },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.message);
    } catch (error) {
      // console.error("Error updating visibility: ", error);
      // toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchEventData();
    fetchAdminData();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("${HERO_BG}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Modal ------------------------------------ */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 p-3">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="text-xl font-semibold">Update visibility?</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-4">
              <label
                htmlFor="category"
                className="block text-gray-700 font-medium"
              >
                Visibility
              </label>
              <select
                id="category"
                name="category"
                className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                onChange={(e) => setVisibility(e.target.value)}
                value={visibility}
              >
                <option value="">Select visibility</option>
                <option value="ongoing">ongoing</option>
                <option value="upcoming">upcoming</option>
                <option value="past">past</option>
              </select>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow hover:bg-gray-400"
              >
                Cancel
              </button>
              <div onClick={updateVisibility}>
                <button
                  onClick={() => {
                    closeModal();
                  }}
                  className="ml-3 px-4 py-2 bg-darkRed text-white rounded-md shadow"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* // ------------------------------------------------------------- */}
      <div className="backdrop-blur-sm">
        {admin && (
          <p
            className="text-white px-7 py-3 w-fit mx-auto rounded-full bg-darkRed text-lg cursor-pointer relative top-10 font-md max-sm:text-xl"
            onClick={openModal}
          >
            Edit visibility?
          </p>
        )}
        <div className="w-[90%] lg:w-[80%] mx-auto pt-20">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row md:justify-between mb-10">
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-medium mb-4">
                {event?.title}
              </h2>
              <p className="text-lg md:text-xl font-medium text-gray-700">
                {event?.agenda}
              </p>
            </div>
            <div className="flex flex-col mt-5 md:mt-0 text-right">
              <p className="text-lg md:text-xl font-semibold mb-5">
                {new Date(event?.date).toDateString()}
              </p>
              <p className="text-sm md:text-md text-gray-600">{event?.venue}</p>
            </div>
          </div>

          {/* Event Image */}
          <div className="w-full overflow-hidden mb-20 outline outline-white shadow-[-8px_-8px_0_0_rgb(0,0,0)] rounded-br-3xl">
            <img
              src={event?.cover_image?.imageUrl}
              alt="Event"
              className="w-full h-auto object-cover object-center"
            />
          </div>

          {/* About the Event */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16 outline outline-white p-6 bg-slate-500/[.3] shadow-[-8px_-8px_0_0_rgb(0,0,0)] rounded-br-3xl">
            <div className="lg:w-[60%]">
              <h3 className="text-2xl md:text-4xl font-medium">
                About the Event
              </h3>
              <p className="text-md md:text-lg mt-3 text-gray-700">
                {event.desc}
              </p>
            </div>
            <div className="lg:w-[40%] h-72 md:h-96 overflow-hidden outline outline-white rounded-br-xl border border-10">
              <img
                src={event?.about_image?.imageUrl}
                alt="Event Speaker"
                className="h-full w-full object-cover object-center rounded-br-xl"
              />
            </div>
          </div>

          {/* Speakers Section */}
          <div className="text-center pb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Meet the Speakers 🎤
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
              {event?.speakers?.map((speaker) => (
                <SpeakerCard
                  name={speaker?.name}
                  designation={speaker?.designation}
                  image={speaker?.image?.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLandingPage;
