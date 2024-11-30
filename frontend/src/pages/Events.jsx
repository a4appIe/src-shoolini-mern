import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import HERO_BG from "/bg-img.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Web Development Workshop",
    date: "2024-12-15T10:00:00Z",
    status: "Ongoing",
    image: "https://via.placeholder.com/400x200",
  },
];

const Events = () => {
  const [event, setEvent] = useState([]);

  console.log(event);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  const fetchEvents = async () => {
    try {
      let res = await axios.get(`http://localhost:5000/api/v1/event`);
      setEvent(res.data.events);
    } catch (error) {
      console.error("Error updating visibility: ", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="pb-10"
      style={{
        backgroundImage: `url("${HERO_BG}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="mx-auto p-14 px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl">
        <h1 className="text-4xl font-bold text-center mb-6 max-sm:text-2xl tracking-tighter">
          Ongoing events 🎃
        </h1>
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-self-center">
          {event.map((e) => (
            <Link to={`/event/${e._id}`}><EventCard key={e._id} event={e} /></Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-14 px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl">
        <h1 className="text-4xl font-bold text-center mb-6 max-sm:text-2xl tracking-tighter">
          Upcoming events ✅
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-self-center">
          {event.map((e) => (
            <Link><EventCard key={e._id} event={e} /></Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-14 px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl">
        <h1 className="text-4xl font-bold text-center mb-6 max-sm:text-2xl tracking-tighter">
          Past events ❌
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-self-center">
          {event.map((e) => (
            <Link><EventCard key={e._id} event={e} /></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
