import { useEffect } from "react";
import MentorCard from "../components/MentorCard.jsx";
import HERO_BG from "/bg-img.jpg";
import mentors from "../utils/data.js";
import DUMMY from "/dummy.jpg";
import { Users, Award, Briefcase, TrendingUp, DollarSign } from "lucide-react";

const Leadership = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  // Leadership sections configuration
  const leadershipSections = [
    {
      title: "Board of Regents",
      key: "Board of Regents",
      icon: Award,
      description: "Strategic leadership guiding our institutional vision and governance"
    },
    {
      title: "Founder Members",
      key: "Founder Members",
      icon: Users,
      description: "Visionaries who established the foundation of excellence"
    },
    {
      title: "Advising Founder Members",
      key: "Advising Founder Members",
      icon: Briefcase,
      description: "Experienced advisors shaping our strategic direction"
    },
    {
      title: "R&D Board",
      key: "R&D Board",
      icon: TrendingUp,
      description: "Leading our research and development initiatives"
    },
    {
      title: "Financial Board",
      key: "Financial Board",
      icon: DollarSign,
      description: "Ensuring fiscal responsibility and sustainable growth"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div
        className="relative py-20 px-6"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(30, 41, 59, 0.92), rgba(51, 65, 85, 0.88)), url("${HERO_BG}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Leadership
          </h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Meet the exceptional leaders driving innovation, excellence, and growth at our institution
          </p>
        </div>
      </div>

      {/* Leadership Sections */}
      {leadershipSections.map((section, index) => {
        const members = mentors[section.key] || [];
        const Icon = section.icon;

        // Skip empty sections
        if (members.length === 0) return null;

        return (
          <section
            key={section.key}
            className={`py-16 px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-8 w-8 text-emerald-600" />
                  <h2 className="text-4xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                  <span className="ml-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full">
                    {members.length}
                  </span>
                </div>
                <p className="text-lg text-slate-600 ml-11">
                  {section.description}
                </p>
                <div className="w-20 h-1 bg-emerald-500 ml-11 mt-4"></div>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {members.map((mentor) => (
                  <MentorCard
                    key={mentor.name}
                    name={mentor.name}
                    title={mentor.title}
                    image={mentor.image || DUMMY}
                    email={mentor.email}
                    linkedin={mentor.linkedin}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Empty State */}
      {leadershipSections.every(section => !mentors[section.key] || mentors[section.key].length === 0) && (
        <div className="max-w-2xl mx-auto px-6 py-20">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <Users className="h-20 w-20 text-slate-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Leadership Information Coming Soon
            </h2>
            <p className="text-lg text-slate-600">
              We're currently updating our leadership profiles. Check back soon to meet our exceptional team!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leadership;
