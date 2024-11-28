import React from "react";
import { FaLink } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import "./MentorCard.css";
import { Link } from "react-router-dom";

const MentorCard = ({ isMD, name, desc, img, short }) => {
  return (
    <div className="book h-[450px] w-full max-w-80 outline my-5 max-sm:h-[400px]">
      <div className="w-full h-full flex justify-end rounded-r-md">
        <div className="w-[90%]  h-full rounded-lg p-5">
          <p className="text-gray-600">{desc}</p>
          <h3 className="text-2xl font-semibold mt-5 flex items-center gap-1 text-gray-700">
            <FaLink className="text-gray-600" /> Connect
          </h3>
          <div className="flex gap-5 mt-5">
            <Link>
              <FaLinkedin className="text-3xl" />
            </Link>
            <Link>
              <MdAttachEmail className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>

      <div className="cover flex flex-col h-full items-start overflow-hidden outline p-3 bg-purewhite">
        <div className="h-[70%] w-full flex overflow-hidden">
          <img
            src={img}
            alt=""
            className="h-full w-full object-cover object-top rounded-md grayscale"
          />
        </div>
        <h2 className="text-2xl mt-2 text-gray-600 font-medium max-sm:text-xl">
          {name}
        </h2>
        <p className="text-md mt-2">{short}</p>
      </div>
    </div>
  );
};

export default MentorCard;
