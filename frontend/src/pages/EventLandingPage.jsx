import React from "react";
import SpeakerCard from "../components/SpeakerCard";
import HERO_BG from "/bg-img.jpg";

const EventLandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${HERO_BG}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="backdrop-blur-sm">
        <div className="w-[90%] lg:w-[80%] mx-auto pt-20">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row md:justify-between mb-10">
            <div className="flex flex-col md:w-[70%]">
              <h2 className="text-4xl md:text-5xl font-medium mb-4">
                Design & Experience
              </h2>
              <p className="text-lg md:text-xl font-medium text-gray-700">
                The Challenges of Web Innovation
              </p>
            </div>
            <div className="flex flex-col md:w-[30%] mt-5 md:mt-0 text-right">
              <p className="text-lg md:text-xl font-semibold mb-5">
                04 April 2023
              </p>
              <p className="text-sm md:text-md text-gray-600">
                500 Terry Francois Street
                <br />
                San Francisco, CA 94158
              </p>
            </div>
          </div>

          {/* Event Image */}
          <div className="w-full overflow-hidden mb-20 outline outline-white shadow-[-8px_-8px_0_0_rgb(0,0,0)] rounded-br-3xl">
            <img
              src="https://websitedemos.net/event-02/wp-content/uploads/sites/863/2021/05/event-img.jpg"
              alt="Event"
              className="w-full h-auto object-cover object-center"
            />
          </div>

          {/* About the Event */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16 outline outline-white p-6 bg-slate-500/[.3] shadow-[-8px_-8px_0_0_rgb(0,0,0)] rounded-br-3xl">
            <div className="lg:w-[60%]">
              <h3 className="text-2xl md:text-4xl font-medium">
                About the Event
              </h3>
              <p className="text-md md:text-lg mt-3 text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                corporis aut aliquid. Nulla iure quisquam ducimus, et eligendi
                unde nobis molestias, sint deserunt aperiam excepturi eum velit
                cum voluptates culpa.
              </p>
            </div>
            <div className="lg:w-[40%] h-72 md:h-96 overflow-hidden outline outline-white rounded-br-xl border border-10">
              <img
                src="https://websitedemos.net/event-02/wp-content/uploads/sites/863/2021/05/event-speaker-2-1.jpg"
                alt="Event Speaker"
                className="h-full w-full object-cover object-center rounded-br-xl"
              />
            </div>
          </div>

          {/* Speakers Section */}
          <div className="text-center pb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Meet the Speakers 🎤
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
              <SpeakerCard />
              <SpeakerCard />
              <SpeakerCard />
              <SpeakerCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLandingPage;
