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
      imageSrc:
        "/illinois-removebg-preview.png",
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
    <section className="bg-gray-300 py-20 lg:py-[120px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <h1 className="text-4xl text-center font-bold text-red">Partners</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SingleImage = ({ brand }) => {
  const { link, imageSrc, altText } = brand;
  return (
    <>
      <a
        href={link}
        className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
      >
        <img
          src={imageSrc}
          alt={altText}
          className="h-full w-full aspect-[3/2] object-contain"
        />
      </a>
    </>
  );
};

export default Partners;
