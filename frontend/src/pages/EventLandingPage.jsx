/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import SpeakerCard from "../components/SpeakerCard";
import HERO_BG from "/bg-img.jpg";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../components/AuthContext";
import EventCard from "../components/EventCard";
import { MoveUpRight } from "lucide-react";
import { SquarePen } from "lucide-react";

const EventLandingPage = () => {
  const [adminData, setAdminData] = useState(null);
  const [event, setEvent] = useState({});
  const [events, setEvents] = useState([]);
  const eventId = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isUserLoggedIn, data, logout } = useContext(AuthContext);

  // const admin = adminData?._id == id ? true : false;

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

  // ! FETCHING EVENTS //

  const pastEvents = [];
  const ongoingEvents = [];
  const upcomingEvents = [];

  events.forEach((event) => {
    if (event?.visibility === "past") {
      pastEvents.push(event);
    } else if (event?.visibility === "upcoming") {
      upcomingEvents.push(event);
    } else {
      ongoingEvents.push(event);
    }
  });

  console.log(upcomingEvents);

  const fetchEvents = async () => {
    try {
      let res = await axios.get(`http://localhost:5000/api/v1/event`);
      setEvents(res.data.events);
    } catch (error) {
      console.error("Error updating visibility: ", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchAdminData = async () => {
    try {
      let res = await axios.get("http://localhost:5000/api/v1/admin");
      res.data ? setAdminData(res?.data?.admin[0]) : null;
      console.log(adminData);
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

  console.log(event);

  const updateVisibility = async () => {
    try {
      let res = await axios.patch(
        `http://localhost:5000/api/v1/event/update/${eventId.id}`,
        { visibility },
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
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
      {/* <div className="backdrop-blur-sm">
        {isUserLoggedIn && (
          <p
            className="text-white px-7 py-3 w-fit mx-auto rounded-full bg-darkRed text-lg cursor-pointer relative top-10 font-md max-sm:text-xl"
            onClick={openModal}
          >
            Edit visibility?
          </p>
        )}
        <div className="w-[90%] lg:w-[80%] mx-auto pt-20"> */}
      {/* Hero Section */}
      {/* <div className="flex flex-col md:flex-row md:justify-between mb-10">
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
          </div> */}

      {/* Event Image */}
      {/* <div className="w-full overflow-hidden mb-20 outline outline-white shadow-[-8px_-8px_0_0_rgb(0,0,0)] rounded-br-3xl">
            <img
              src={event?.cover_image?.imageUrl}
              alt="Event"
              className="w-full h-auto object-cover object-center"
            />
          </div> */}

      {/* About the Event */}
      {/* <div className="flex flex-col lg:flex-row gap-8 mb-16 outline outline-white p-6 bg-slate-500/[.3] shadow-[-8px_-8px_0_0_rgb(0,0,0)] rounded-br-3xl">
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
          </div> */}

      {/* Speakers Section */}
      {/* <div className="text-center pb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Meet the Speakers 🎤
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
              {event?.speakers?.map((speaker) => (
                <SpeakerCard
                  key={speaker.name}
                  name={speaker?.name}
                  designation={speaker?.designation}
                  image={speaker?.image?.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <section className="bg-darkRed text-white py-20 px-6 flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {event?.title}
          </h2>
          {isUserLoggedIn && (
            <p
              className="text-white px-7 py-3 w-fit mx-auto rounded-full bg-blue-500 text-lg cursor-pointer font-md max-sm:text-xl flex flex-row gap-2 items-center justify-center"
              onClick={openModal}
            >
              <SquarePen /> <span>Edit visibility</span>
            </p>
          )}
          <div className="flex flex-col md:flex-row items-center justify-center mt-4 space-y-4 md:space-y-0 md:space-x-12 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <span className="text-lg">📍</span>
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">📅</span>
              <span>{new Date(event?.date).toDateString()}, {event?.time}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black text-white px-6 md:px-16 lg:px-32 py-12">
        {/* About Section */}
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About</h1>
          {/* Image */}
          <div className="my-8">
            <img
              src={event?.cover_image?.imageUrl}
              alt="About Image"
              className="rounded-lg w-full"
            />
          </div>
          <p className="text-gray-400 leading-7 mb-6">{event?.desc}</p>
        </section>

        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Our Speakers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {event.speakers &&
                event.speakers.map((speaker) => (
                  <SpeakerCard key={speaker._id} speaker={speaker} />
                ))}
            </div>
          </div>
        </section>

        {/* Other Events Section */}
        <section className="max-w-5xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">Upcoming events</h2>

          {/* Event Cards */}
          <div className="space-y-6">
            {/* Event Card 1 */}

            {upcomingEvents &&
              upcomingEvents.map(
                (e) =>
                  e._id !== eventId.id && (
                    <a href={`/event/${e._id}`} key={e._id}>
                      <div className="bg-red p-6 rounded-lg flex items-center justify-between mb-5">
                        <div>
                          <p className="text-3xl font-bold">
                            {new Date(e.date).getDate()}
                          </p>
                          <p className="uppercase text-sm font-medium">
                            {new Date(e.date).toLocaleString("default", {
                              month: "long",
                            })}
                          </p>
                        </div>
                        <div className="flex-1 px-4">
                          <h3 className="text-lg font-semibold max-md:texk-md">
                            {e.title}
                          </h3>
                          <p className="text-sm text-gray-300 max-md:texk-xs">
                            {e.agenda}
                          </p>
                        </div>
                        <div className="h-8 w-8 bg-pink rounded-full texk-black max-md:hidden">
                          <MoveUpRight />
                        </div>
                      </div>
                    </a>
                  )
              )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventLandingPage;
