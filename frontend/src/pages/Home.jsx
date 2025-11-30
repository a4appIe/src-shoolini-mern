import { useEffect } from "react";
import { FaFolderOpen, FaFileAlt, FaUpload, FaBook, FaArrowRight } from "react-icons/fa";
import { HiLightBulb, HiBeaker, HiRocketLaunch } from "react-icons/hi2";
import HERO_BG from "/bg-img.jpg";
import HomeLink from "../components/HomeLink";
import Partners from "../components/Partners";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(30, 41, 59, 0.92), rgba(51, 65, 85, 0.88)), url("${HERO_BG}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="bg-emerald-500/20 text-emerald-400 px-6 py-2 rounded-full text-sm font-semibold border border-emerald-400/40 backdrop-blur-sm">
              Student Research Council
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Innovation Starts Here
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering students through cutting-edge research, innovation, and entrepreneurship at India's leading research university
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link
              to="/pricing"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition flex items-center gap-2"
            >
              Get Started <FaArrowRight />
            </Link>
            <Link
              to="/events"
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition border border-slate-600"
            >
              Explore Events
            </Link>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <StatCard icon={FaFolderOpen} count="2" label="Patents" />
            <StatCard icon={FaFileAlt} count="2" label="Published Papers" />
            <StatCard icon={FaUpload} count="6" label="Research Uploads" />
            <StatCard icon={FaBook} count="5" label="Books Published" />
          </div>
        </div>
      </div>

      {/* PILLARS SECTION */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Driving excellence across research, innovation, and entrepreneurship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PillarCard
              icon={<HiBeaker className="text-5xl" />}
              title="Research Excellence"
              description="Conducting groundbreaking research across multiple disciplines with world-class facilities and mentorship."
            />
            <PillarCard
              icon={<HiLightBulb className="text-5xl" />}
              title="Innovation Hub"
              description="Transforming ideas into reality through our state-of-the-art innovation labs and collaborative spaces."
            />
            <PillarCard
              icon={<HiRocketLaunch className="text-5xl" />}
              title="Startup Incubation"
              description="Supporting student entrepreneurs with funding, mentorship, and resources to launch successful ventures."
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src={HERO_BG}
                alt="Research Facility"
                className="rounded-xl w-full h-[500px] object-cover shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                  About Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">
                  Research is in Our DNA
                </h2>
              </div>

              <div className="w-20 h-1 bg-emerald-500"></div>

              <p className="text-lg text-slate-700 leading-relaxed">
                Shoolini University stands at the forefront of international research, attracting outstanding academics, research staff, and students from around the globe. Our researchers engage in cutting-edge work across multiple disciplines, making groundbreaking contributions in science, engineering, business, and liberal arts.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                With state-of-the-art research facilities, extensive funding opportunities, and robust support networks, we're dedicated to turning research into actionable innovations that improve the human condition and our planet.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-lg hover:text-emerald-700 transition"
              >
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH IMPACT */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Research Impact
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300">
              At par with the world's best universities
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-700 border-b-2 border-emerald-500">
                    <th className="px-6 py-4 text-left text-lg font-semibold">Institution</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">FWCI Score</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Top 1% Publications</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow institution="Shoolini University" fwci="2.27" topPercent="9.3" highlight />
                  <TableRow institution="University of Oxford" fwci="2.12" topPercent="3.8" />
                  <TableRow institution="University of Cambridge" fwci="2.07" topPercent="4.2" />
                  <TableRow institution="MIT" fwci="2.36" topPercent="6.0" />
                  <TableRow institution="Princeton University" fwci="2.9" topPercent="4.9" />
                  <TableRow institution="Yale University" fwci="2.04" topPercent="4.1" />
                </tbody>
              </table>
            </div>
          </div>

          {/* Footnote */}
          <div className="mt-8 text-sm text-slate-400 max-w-5xl mx-auto">
            <p className="mb-3">
              <span className="text-emerald-400 font-semibold">*FWCI (Field Weighted Citation Score)</span> indicates a university's contribution to human knowledge and signals research that has stood out globally.
            </p>
            <p>Data tracked for the period 2017–2019 for select institutions.</p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              to="/pricing"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition"
            >
              Join Our Research Community
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK LINKS SECTION */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          <QuickLinkCard
            to="/events"
            title="Upcoming Events"
            description="Join workshops, seminars, and research symposiums"
          />
          <QuickLinkCard
            to="/mentors"
            title="Expert Mentors"
            description="Connect with industry leaders and academic experts"
          />
          <QuickLinkCard
            to="/pricing"
            title="Membership Plans"
            description="Explore benefits and join our research community"
          />
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <Partners />
    </>
  );
};

// Stat Card Component
const StatCard = ({ icon: Icon, count, label }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-emerald-500 hover:bg-slate-800/70 transition">
    <Icon className="text-4xl text-emerald-400 mb-3 mx-auto" />
    <p className="text-3xl font-bold text-white mb-1">{count}</p>
    <p className="text-sm text-slate-300 uppercase tracking-wide">{label}</p>
  </div>
);

// Pillar Card Component
const PillarCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-8 hover:shadow-xl transition border border-slate-200 group">
    <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

// Table Row Component
const TableRow = ({ institution, fwci, topPercent, highlight = false }) => (
  <tr className={`border-b border-slate-700 hover:bg-slate-700/50 transition ${highlight ? 'bg-emerald-500/10' : ''}`}>
    <td className={`px-6 py-4 font-medium ${highlight ? 'text-emerald-400' : 'text-white'}`}>
      {institution}
    </td>
    <td className="px-6 py-4 text-slate-300">{fwci}</td>
    <td className="px-6 py-4 text-slate-300">{topPercent}</td>
  </tr>
);

// Quick Link Card Component
const QuickLinkCard = ({ to, title, description }) => (
  <Link to={to}>
    <div className="bg-white p-8 rounded-xl hover:shadow-lg transition h-full border border-slate-200 group">
      <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-emerald-600 transition">
        {title}
      </h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <span className="inline-flex items-center gap-2 font-semibold text-emerald-600">
        Learn More <FaArrowRight />
      </span>
    </div>
  </Link>
);

export default Home;
