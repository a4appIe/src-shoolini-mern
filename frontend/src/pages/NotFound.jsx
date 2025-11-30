/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center px-6 py-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[200px] md:text-[280px] font-extrabold leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 drop-shadow-2xl">
              404
            </span>
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Oops! The page you're looking for seems to have wandered off. It might have been moved, deleted, or never existed.
          </p>
        </div>

        {/* Illustration or Icon */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-slate-100 rounded-full">
            <Search className="h-16 w-16 text-slate-400" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
            Go Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4 font-medium">
            You might be interested in:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/events"
              className="text-emerald-600 hover:text-emerald-700 font-medium transition"
            >
              Events
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              to="/mentors"
              className="text-emerald-600 hover:text-emerald-700 font-medium transition"
            >
              Mentors
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              to="/pricing"
              className="text-emerald-600 hover:text-emerald-700 font-medium transition"
            >
              Pricing
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              to="/contact"
              className="text-emerald-600 hover:text-emerald-700 font-medium transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
