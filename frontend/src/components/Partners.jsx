/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Partners = () => {
  const brandsData = [
    {
      imageSrc: "/claremont-removebg-preview.png",
      altText: "Claremont Graduate University",
      link: "#",
    },
    {
      imageSrc: "/illinois-removebg-preview.png",
      altText: "Illinois Institute of Technology",
      link: "#",
    },
    {
      imageSrc: "/caltech-removebg-preview.png",
      altText: "CalTech",
      link: "#",
    },
    {
      imageSrc: "defence-removebg-preview.png",
      altText: "Defence Research Development Organization",
      link: "#",
    },
    {
      imageSrc: "quantum-removebg-preview.png",
      altText: "In Quantum Shift Labs",
      link: "#",
    },
    {
      imageSrc: "dipr-removebg-preview.png",
      altText: "DIPR",
      link: "#",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Partners
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-4"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Collaborating with leading institutions and organizations worldwide
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brandsData.map((brand, i) => (
            <SingleImage key={i} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SingleImage = ({ brand }) => {
  const { link, imageSrc, altText } = brand;
  return (
    <a
      href={link}
      className="group flex items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-emerald-500"
    >
      <img
        src={imageSrc}
        alt={altText}
        className="h-20 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </a>
  );
};

export default Partners;
