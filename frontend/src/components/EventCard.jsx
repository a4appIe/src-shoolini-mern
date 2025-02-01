/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export default function EventCard({ event }) {
  const { isUserLoggedIn } = useContext(AuthContext);
  function handleDelete() {}
  return (
    <article className="max-w-4xl bg-white rounded-lg shadow-md overflow-hidden mb-5 outline outline-darkRed">
      <div className="flex flex-col md:flex-row max-md:flex-col-reverse">
        <div className="p-6 flex-1">
          <div className="space-y-4">
            {/* Title and Subtitle */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                {event.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                {event.agenda}
              </p>
            </div>
            {isUserLoggedIn ? (
              <button
                className="text-red bg-gray-300 text-3xl p-1 rounded-md outline"
                onClick={() => {
                  handleDelete();
                }}
              >
                <MdDelete />
              </button>
            ) : (
              <span
                className={`inline-block px-3 py-1 text-sm font-semibold ${
                  event.visibility == "ongoing"
                    ? "bg-green text-white"
                    : "bg-red text-white"
                } rounded-full`}
              >
                {event.visibility}
              </span>
            )}
          </div>
        </div>

        {/* Code Editor Preview */}
        <div className="md:w-1/3 h-48 md:h-auto">
          <img
            src={event.cover_image.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}
