import { useEffect } from "react";
import { Linkedin } from "lucide-react";
import HERO_BG from "/bg-img.jpg";

const Founders = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  // Founders Data
  const founders = [
    {
      name: "Anitya Gupta",
      title: "Founder",
      image: "/anitya-gupta.jpeg",
      linkedin: "https://linkedin.com/in/pkkhosla",
    },
    {
      name: "Prof. Atul Khosla",
      title: "Co-Founder",
      image: "https://shooliniuniversity.com/media/1610951970-atul_khosla.jpg",
      linkedin: "https://linkedin.com/in/pkkhosla",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section
        className="relative py-24 px-6"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.92)), url("${HERO_BG}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Meet Our Founders
          </h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-200 leading-relaxed">
            Visionary leaders dedicated to empowering student researchers and
            fostering a culture of innovation, collaboration, and academic
            excellence.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={founder.id}
              className={`mb-16 last:mb-0 border-emerald-400 border-4 rounded-3xl overflow-hidden${
                index % 2 === 0 ? "" : "lg:flex-row-reverse border-emerald-400 border-4 rounded-3xl overflow-hidden"
              }`}
            >
              <div className="bg-white shadow-2xl overflow-hidden">
                <div className="flex flex-col sm:flex-row gap-0">
                  {/* Image Section */}
                  <div
                    className={`relative flex-1 ${
                      index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="aspect-video lg:aspect-video lg:h-full">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:bg-gradient-to-r"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`p-8 flex-1 md:p-12 flex flex-col justify-center ${
                      index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Name & Title */}
                    <div className="mb-6">
                      <h2 className="text-4xl font-bold text-slate-900 mb-2">
                        {founder.name}
                      </h2>
                      <p className="text-xl text-emerald-600 font-semibold">
                        {founder.title}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0077B5] hover:bg-[#006399] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <Linkedin className="h-5 w-5" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-500 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Shared Vision
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Together, we are committed to creating an ecosystem where every
            student has the opportunity to explore, innovate, and contribute to
            meaningful research. Through mentorship, resources, and community
            building, we aim to transform academic curiosity into impactful
            discoveries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              🎯 Innovation First
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              🤝 Collaborative Growth
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              🌟 Student Empowerment
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              📚 Academic Excellence
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Want to Connect?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Have questions, ideas, or want to collaborate? We&apos;d love to
            hear from you!
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Founders;
