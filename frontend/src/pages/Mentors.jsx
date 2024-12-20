/* eslint-disable no-unused-vars */
import React from 'react'
import MentorCard from '../components/MentorCard'
import HERO_BG from "/bg-img.jpg";
// import DR_PANKAJ_VAIDYA from "/pankaj_vaidya.jpg";
import mentors from "../utils/data.js";
import DUMMY from "/dummy.jpg"

const Mentors = () => {
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
      {/* SECTION */}

      <div className="p-10 pt-14 flex flex-col items-start justify-center w-full max-sm:p-3">
        <h1 className="text-4xl font-bold mb-5 text-darkRed border-b-2 border-darkRed">
          Mentors :-
        </h1>

        <div className="gap-5 flex flex-wrap items-center justify-center w-full">
          {mentors["List of Mentors"].map((mentor) => (
            <MentorCard
              key={mentor.name}
              name={mentor.name}
              short={mentor.title ? mentor.title : ""}
              img={mentor.image ? mentor.image : DUMMY}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mentors