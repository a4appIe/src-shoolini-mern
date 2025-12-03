/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import SpeakerCard from "../components/SpeakerCard";
import HERO_BG from "/bg-img.jpg";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../components/AuthContext";
import { MapPin, Calendar, Clock, Edit3, X, ArrowRight, Users, Image as ImageIcon } from "lucide-react";
import dummyEvents from "../utils/dummyEvents";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const EventLandingPage = () => {
  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState(dummyEvents);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isUserLoggedIn } = useContext(AuthContext);
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
  }, [slug]);

  // Find event by slug
  useEffect(() => {
    const foundEvent = dummyEvents.find((e) => e.slug === slug);
    console.log("EVENT: ", foundEvent);
    
    if (foundEvent) {
      setEvent(foundEvent);
      setVisibility(foundEvent.visibility);
    } else {
      // Redirect to 404 if event not found
      navigate('/404', { replace: true });
    }
  }, [slug, navigate]);

  // Filter events for suggestions
  const upcomingEvents = events.filter(
    (e) => e.visibility === "upcoming" && e.slug !== slug
  );

  const ongoingEvents = events.filter(
    (e) => e.visibility === "ongoing" && e.slug !== slug
  );

  const updateVisibility = () => {
    // Update visibility in local state (since using dummy data)
    const updatedEvents = events.map((e) =>
      e.slug === slug ? { ...e, visibility } : e
    );
    setEvents(updatedEvents);
    setEvent({ ...event, visibility });
    toast.success("Visibility updated successfully!");
  };

  // Show loading state while event is being found
  if (!event) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">Loading event...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Edit Visibility Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-75 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Update Visibility</h3>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-600 focus:outline-none transition"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mb-6">
              <label
                htmlFor="category"
                className="block text-slate-700 font-semibold mb-3"
              >
                Event Status
              </label>
              <select
                id="category"
                name="category"
                className="w-full p-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                onChange={(e) => setVisibility(e.target.value)}
                value={visibility}
              >
                <option value="">Select visibility</option>
                <option value="ongoing">Ongoing</option>
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  updateVisibility();
                  closeModal();
                }}
                className="flex-1 px-6 py-3 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="relative py-24 px-6"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(30, 41, 59, 0.92), rgba(51, 65, 85, 0.88)), url("${HERO_BG}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Edit Button for Admin */}
          {isUserLoggedIn && (
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold mb-8 transition shadow-lg"
            >
              <Edit3 className="h-4 w-4" />
              Edit Visibility
            </button>
          )}

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {event.title}
          </h1>

          {/* Event Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="h-5 w-5 text-emerald-400" />
              <span className="font-medium">{event.venue}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="h-5 w-5 text-emerald-400" />
              <span className="font-medium">{new Date(event.date).toDateString()}</span>
            </div>
            {event.time && (
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-emerald-400" />
                <span className="font-medium">{event.time}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">About This Event</h2>

          {/* Event Cover Image */}
          {event.cover_image?.imageUrl && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-xl h-[600px] border-4 border-emerald-400">
              <img
                src={event.cover_image.imageUrl}
                alt="Event Cover"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line mb-8">
            {event.desc}
          </p>
        </div>
      </section>

      {/* Event Gallery Section - Image Slider */}
      {Array.isArray(event.images) && event.images.length > 0 && (
        <section className="py-10 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Event Gallery
              </h2>
              <div className="flex items-center justify-center gap-2">
                <ImageIcon className="h-5 w-5 text-emerald-600" />
                <span className="text-slate-600 font-semibold">
                  {event.images.length} Photo{event.images.length > 1 ? 's' : ''}
                </span>
              </div>
            </div>

            {/* Swiper Slider */}
            <div className="event-gallery-slider">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="rounded-2xl"
              >
                {event.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={image}
                        alt={`${event.title} - Gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Other Upcoming Events
            </h2>

            <div className="space-y-4">
              {upcomingEvents.slice(0, 3).map((e) => (
                <Link
                  to={`/event/${e.slug}`}
                  key={e.slug}
                  className="block group"
                >
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 p-6 rounded-2xl flex items-center justify-between transition-all duration-300 shadow-lg hover:shadow-xl">
                    {/* Date Badge */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4 text-center min-w-[80px]">
                      <p className="text-3xl font-bold text-white">
                        {new Date(e.date).getDate()}
                      </p>
                      <p className="uppercase text-sm font-semibold text-white/90">
                        {new Date(e.date).toLocaleString("default", {
                          month: "short",
                        })}
                      </p>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 px-6">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:underline">
                        {e.title}
                      </h3>
                    </div>

                    {/* Arrow Icon */}
                    <div className="hidden md:flex items-center justify-center w-12 h-12 bg-white/20 rounded-full group-hover:bg-white/30 transition">
                      <ArrowRight className="h-6 w-6 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Events Link */}
            {upcomingEvents.length > 3 && (
              <div className="text-center mt-8">
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition"
                >
                  View All Events
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default EventLandingPage;
