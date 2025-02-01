/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

const Events = () => {
  const [event, setEvent] = useState([]);
  const pastEvents = [];
  const ongoingEvents = [];
  const upcomingEvents = [];

  event.forEach((event) => {
    if (event?.visibility === "past") {
      pastEvents.push(event);
    } else if (event?.visibility === "upcoming") {
      upcomingEvents.push(event);
    } else {
      ongoingEvents.push(event);
    }
  });
  console.log(pastEvents, ongoingEvents, upcomingEvents);

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
    <div
      className="pb-10 min-h-[91vh] bg-black"
    >
      {ongoingEvents.length > 0 && (
        <div className="mx-auto pt-14 px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl">
          <h1 className="text-4xl font-bold text-center mb-6 max-sm:text-2xl tracking-tighter text-white">
            Ongoing events 🎃
          </h1>
          <div className="flex flex-1 flex-col gap-6 place-self-center">
            {ongoingEvents.map((e) => (
              <Link to={`/event/${e._id}`} key={e._id}>
                <EventCard event={e} />
              </Link>
            ))}
          </div>
        </div>
      )}

      {upcomingEvents.length > 0 && (
        <div className="mx-auto pt-14 px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl">
          <h1 className="text-4xl font-bold text-center mb-6 max-sm:text-2xl tracking-tighter text-white">
            Upcoming events ✅
          </h1>
          <div className="flex flex-1 flex-col gap-6 place-self-center">
            {upcomingEvents.map((e) => (
              <Link to={`/event/${e._id}`} key={e._id}>
                <EventCard event={e} />
              </Link>
            ))}
          </div>
        </div>
      )}

      {pastEvents.length > 0 && (
        <div className="mx-auto pt-14 px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl">
          <h1 className="text-4xl font-bold text-center mb-6 max-sm:text-2xl tracking-tighter text-white">
            Past events ❌
          </h1>
          <div className="flex flex-1 flex-col gap-6 place-self-center">
            {pastEvents.map((e) => (
              <Link to={`/event/${e._id}`} key={e._id}>
                <EventCard event={e}/>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
