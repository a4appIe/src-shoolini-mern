import React from "react";
import { Link } from "react-router-dom";
import HERO_BG from "/bg-img.jpg";

const NotFound = () => {
  return (
    <div
      className="min-h-[90.8vh] bg-gradient-to-b from-red-500 to-red-200 flex flex-col justify-center items-center text-center p-5"
      style={{
        backgroundImage: `url("${HERO_BG}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1
        className="text-9xl font-bold text-red drop-shadow-lg mb-5"
        style={{
          textShadow: "4px 4px 0px rgb(0, 0, 0)",
        }}
      >
        404
      </h1>
      <h2 className="text-3xl md:text-4xl text-darkRed font-semibold mb-3">
        Page Not Found
      </h2>
      <p className="text-lg md:text-xl text-darkRed/80 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-white font-medium bg-red-600 rounded-md hover:bg-red-700 transition duration-300 shadow-lg bg-green"
      >
        <p>Go Back Home</p>
      </Link>
    </div>
  );
};

export default NotFound;
