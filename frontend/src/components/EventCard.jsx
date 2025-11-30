/* eslint-disable react/prop-types */
import { Calendar, MapPin, Clock } from "lucide-react";

export default function EventCard({ event, status = "upcoming" }) {
  const statusStyles = {
    ongoing: "bg-emerald-100 text-emerald-700 border-emerald-300",
    upcoming: "bg-blue-100 text-blue-700 border-blue-300",
    past: "bg-slate-100 text-slate-600 border-slate-300",
  };

  const statusLabels = {
    ongoing: "Live Now",
    upcoming: "Upcoming",
    past: "Completed",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl hover:border-emerald-500 transition-all duration-300 group h-full flex flex-col">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.cover_image.imageUrl || "/dummy.jpg"}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${statusStyles[status]}`}>
          {statusLabels[status]}
        </div>
      </div>

      {/* Event Details */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-emerald-600 transition line-clamp-2">
          {event.title || "Event Title"}
        </h3>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-1">
          {event.description || "Join us for an exciting event focused on innovation and research."}
        </p>

        {/* Event Meta Information */}
        <div className="space-y-2 mt-auto">
          {event.date && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Calendar className="h-4 w-4 text-emerald-500" />
              <span>{new Date(event.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          )}

          {event.time && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock className="h-4 w-4 text-emerald-500" />
              <span>{event.time}</span>
            </div>
          )}

          {event.location && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4 text-emerald-500" />
              <span className="line-clamp-1">{event.location}</span>
            </div>
          )}
        </div>

        {/* View Details Button */}
        <div className="mt-4 pt-4 border-t border-slate-200">
          <span className="text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 inline-flex items-center">
            View Details
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
