import React from "react";
import { Outlet, Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
      <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <img
          src={event.cover_image.imageUrl}
          alt={event.title}
          className="w-full h-52 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
          <p className="text-gray-500 mb-4">
            {new Date(event.date).toDateString()}
          </p>
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold ${
              event.status === "ongoing"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            } rounded-full`}
          >
            {event.visibility}
          </span>
        </div>
      </div>
  );
};

export default EventCard;
