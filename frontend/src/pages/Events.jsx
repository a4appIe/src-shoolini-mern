/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";
import {
  Calendar,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import dummyEvents from "../utils/dummyEvents";

const Events = () => {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllOngoing, setShowAllOngoing] = useState(false);
  const [showAllUpcoming, setShowAllUpcoming] = useState(false);
  const [showAllPast, setShowAllPast] = useState(false);

  const INITIAL_DISPLAY_COUNT = 3;

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      let res = await axios.get(`http://localhost:5000/api/v1/event`);
      setEvent(res.data.events);
    } catch (error) {
      console.error("Error fetching events: ", error);
      // Use dummy data if API fails
      setEvent(dummyEvents);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">Loading events...</p>
        </div>
      </div>
    );
  }

  // No Events Fallback
  if (event.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <Calendar className="h-20 w-20 text-slate-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              No Events Available
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We don't have any events scheduled at the moment. Check back soon
              for exciting research workshops, seminars, and networking
              opportunities!
            </p>
            <Link
              to="/"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Get displayed events based on state
  const displayedOngoingEvents = showAllOngoing
    ? ongoingEvents
    : ongoingEvents.slice(0, INITIAL_DISPLAY_COUNT);

  const displayedUpcomingEvents = showAllUpcoming
    ? upcomingEvents
    : upcomingEvents.slice(0, INITIAL_DISPLAY_COUNT);

  const displayedPastEvents = showAllPast
    ? pastEvents
    : pastEvents.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Events & Workshops
          </h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join us for engaging workshops, seminars, and networking sessions
            designed to foster innovation and research excellence
          </p>
        </div>
      </div>

      {/* Ongoing Events Section */}
      {ongoingEvents.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="h-8 w-8 text-emerald-500" />
            <h2 className="text-3xl font-bold text-slate-900">
              Ongoing Events
            </h2>
            <span className="ml-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full">
              {ongoingEvents.length}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedOngoingEvents.map((e) => (
              <Link to={`/event/${e.slug}`} key={e._id}>
                <EventCard event={e} status="ongoing" />
              </Link>
            ))}
          </div>

          {ongoingEvents.length > INITIAL_DISPLAY_COUNT && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllOngoing(!showAllOngoing)}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-lg border border-slate-300 transition"
              >
                {showAllOngoing ? (
                  <>
                    <ChevronUp className="h-5 w-5" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-5 w-5" />
                    Load More ({ongoingEvents.length -
                      INITIAL_DISPLAY_COUNT}{" "}
                    more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="h-8 w-8 text-emerald-500" />
            <h2 className="text-3xl font-bold text-slate-900">
              Upcoming Events
            </h2>
            <span className="ml-2 bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
              {upcomingEvents.length}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedUpcomingEvents.map((e) => (
              <Link to={`/event/${e.slug}`} key={e._id}>
                <EventCard event={e} status="ongoing" />
              </Link>
            ))}
          </div>

          {upcomingEvents.length > INITIAL_DISPLAY_COUNT && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllUpcoming(!showAllUpcoming)}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-lg border border-slate-300 transition"
              >
                {showAllUpcoming ? (
                  <>
                    <ChevronUp className="h-5 w-5" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-5 w-5" />
                    Load More ({upcomingEvents.length -
                      INITIAL_DISPLAY_COUNT}{" "}
                    more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-8 w-8 text-slate-400" />
            <h2 className="text-3xl font-bold text-slate-900">Past Events</h2>
            <span className="ml-2 bg-slate-100 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full">
              {pastEvents.length}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPastEvents.map((e) => (
              <Link to={`/event/${e.slug}`} key={e._id}>
                <EventCard event={e} status="ongoing" />
              </Link>
            ))}
          </div>

          {pastEvents.length > INITIAL_DISPLAY_COUNT && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllPast(!showAllPast)}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-lg border border-slate-300 transition"
              >
                {showAllPast ? (
                  <>
                    <ChevronUp className="h-5 w-5" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-5 w-5" />
                    Load More ({pastEvents.length - INITIAL_DISPLAY_COUNT} more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Events;
