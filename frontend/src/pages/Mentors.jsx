/* eslint-disable react/prop-types */
import { useEffect } from "react";
import MentorCard from "../components/MentorCard";
import data from "../utils/data.js";
import { Users, Sparkles, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Mentors({ section }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, [section]);

  // Check if data exists for the section
  const mentors = data[section] || [];
  const hasNoMentors = mentors.length === 0;

  // Get section-specific content
  const getSectionConfig = (sectionName) => {
    const configs = {
      "Mentors": {
        description: "Connect with experienced professionals and academic experts who guide our research community",
        emoji: "🎓"
      },
      "Board of Regents": {
        description: "Strategic leadership guiding our institutional vision and governance",
        emoji: "🏛️"
      },
      "Founder Members": {
        description: "Visionaries who established the foundation of excellence",
        emoji: "⭐"
      },
      "R&D Board": {
        description: "Leading our research and development initiatives",
        emoji: "🔬"
      },
      "Financial Board": {
        description: "Ensuring fiscal responsibility and sustainable growth",
        emoji: "💼"
      },
      "Advising Founder Members": {
        description: "Experienced advisors shaping our strategic direction",
        emoji: "🎯"
      }
    };
    return configs[sectionName] || {
      description: "Meet the dedicated professionals driving innovation and excellence in research",
      emoji: "👥"
    };
  };

  const sectionConfig = getSectionConfig(section);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Page Header with Enhanced Design */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="text-center">

          {/* Title with Gradient */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 mb-6 leading-tight">
            {section || "Our Team"}
          </h1>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-emerald-500"></div>
            <Sparkles className="h-5 w-5 text-emerald-500" />
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {sectionConfig.description}
          </p>
        </div>
      </div>

      {/* No Mentors Fallback - Enhanced */}
      {hasNoMentors ? (
        <div className="relative max-w-2xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-slate-100 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-slate-500/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative">
              <div className="inline-block p-6 bg-slate-100 rounded-full mb-6">
                <Users className="h-16 w-16 text-slate-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                No Members Found
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We&apos;re currently updating this section. Check back soon to meet our amazing team!
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Back to Home
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Members Count Badge - Enhanced */}
          <div className="relative max-w-7xl mx-auto px-6 mb-12">
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-emerald-100">
                <div className="flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-full">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    Total Members
                  </span>
                  <span className="text-2xl font-bold text-slate-900">
                    {mentors.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Members Grid - Enhanced */}
          <div className="relative max-w-7xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {mentors.map((member, index) => (
                <div
                  key={member.name + index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <MentorCard {...member} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="relative max-w-7xl mx-auto px-6 pb-20">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-12 text-center shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
                We&apos;re always looking for talented individuals to join our mission of driving innovation and excellence
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-emerald-600 font-semibold px-8 py-4 rounded-lg transition shadow-lg"
              >
                Get in Touch
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
