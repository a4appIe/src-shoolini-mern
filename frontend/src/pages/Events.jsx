import React, { useEffect } from "react";
import EventCard from "../components/EventCard";

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
  return (
    <>
      <div className="mx-auto mt-14 px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl">
        <h1 className="text-4xl font-bold text-center mb-6 max-sm:text-2xl tracking-tighter">
          Ongoing events 🎃
        </h1>
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-self-center">
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
        </div>
      </div>
      <div className="mx-auto mt-14 px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl">
        <h1 className="text-4xl font-bold text-center mb-6 max-sm:text-2xl tracking-tighter">
          Upcoming events ✅
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-self-center">
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
        </div>
      </div>
      <div className="mx-auto mt-14 px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl">
        <h1 className="text-4xl font-bold text-center mb-6 max-sm:text-2xl tracking-tighter">
          Past events ❌
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-self-center">
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
          <EventCard key={events[0].id} event={events[0]} />
        </div>
      </div>
    </>
  );
};

export default Events;
