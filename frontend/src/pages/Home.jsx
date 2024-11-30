import React, { useEffect } from "react";
import { FaFolderOpen, FaFileAlt, FaUpload, FaBook } from "react-icons/fa";
import HERO_BG from "/bg-img.jpg";
import HomeLink from "../components/HomeLink";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <div
        className="min-h-[88vh] flex flex-col items-center justify-center gap-10 p-5 pt-20"
        style={{
          backgroundImage: `url("${HERO_BG}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Headline Section */}
        <div className="text-center">
          <h4 className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 font-light">
            Ground-breaking research driven by world-class academic excellence
          </h4>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            At India's No.1{" "}
            <span
              className="text-red-600 text-red"
              style={{
                textShadow: "2px 3px 0px rgb(0, 0, 0)",
              }}
            >
              Research University
            </span>
          </h3>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 mt-10 border border-black bg-slate-500/[.3] p-2  shadow-[4px_6px_0px_0px_rgba(0,_0,_0)]">
          <div className="flex flex-col items-center text-center w-24 sm:w-28 lg:w-36">
            <FaFolderOpen className="text-4xl lg:text-5xl text-gray-800" />
            <p className="font-semibold text-lg lg:text-2xl mt-2 text-gray-700">
              2
            </p>
            <p className="text-sm lg:text-md text-gray-700">Total Patents</p>
          </div>
          <div className="flex flex-col items-center text-center w-28 sm:w-32 lg:w-40">
            <FaFileAlt className="text-4xl lg:text-5xl text-gray-800" />
            <p className="font-semibold text-lg lg:text-2xl mt-2 text-gray-700">
              2
            </p>
            <p className="text-sm lg:text-md text-gray-700">Published Papers</p>
          </div>
          <div className="flex flex-col items-center text-center w-28 sm:w-32 lg:w-40">
            <FaUpload className="text-4xl lg:text-5xl text-gray-800" />
            <p className="font-semibold text-lg lg:text-2xl mt-2 text-gray-700">
              6
            </p>
            <p className="text-sm lg:text-md text-gray-700">Research Uploads</p>
          </div>
          <div className="flex flex-col items-center text-center w-28 sm:w-32 lg:w-40">
            <FaBook className="text-4xl lg:text-5xl text-gray-800" />
            <p className="font-semibold text-lg lg:text-2xl mt-2 text-gray-700">
              5
            </p>
            <p className="text-sm lg:text-md text-gray-700">Books Published</p>
          </div>
        </div>
      </div>
      {/* INSTANT_LINKS */}
      <div className="flex flex-wrap">
        <HomeLink
          link={"/events"}
          text={"Events"}
          color={"white"}
          bgclr={"green"}
        />
        <HomeLink
          link={"/gallery"}
          text={"GALLERY"}
          color={"white"}
          bgclr={"darkRed"}
        />
        <HomeLink
          link={"/mentors"}
          text={"MENTORS"}
          color={"white"}
          bgclr={"orange"}
        />
      </div>
    </>
  );
};

export default Home;
