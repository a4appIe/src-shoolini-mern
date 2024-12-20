import { useEffect } from "react";
import MentorCard from "../components/MentorCard";
import HERO_BG from "/bg-img.jpg";
// import DR_PANKAJ_VAIDYA from "/pankaj_vaidya.jpg";
import mentors from "../utils/data.js";
import DUMMY from "/dummy.jpg"

const ResearchMentors = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
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
          Board of Regents :-
        </h1>

        <div className="gap-5 flex flex-wrap items-center justify-center w-full">
          {mentors["Board of Regents"].map((mentor) => (
            <MentorCard
              key={mentor.name}
              name={mentor.name}
              short={mentor.title}
              desc={
                "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
              }
              img={mentor.image ? mentor.image : DUMMY}
            />
          ))}
        </div>
      </div>

      {/* SECTION */}

      <div className="p-10 pt-14 flex flex-col items-start justify-center w-full max-sm:p-3">
        <h1 className="text-4xl font-bold mb-5 text-darkRed border-b-2 border-darkRed">
          Founder Members :-
        </h1>

        <div className="gap-5 flex flex-wrap items-center justify-center w-full">
          {mentors["Founder Members"].map((mentor) => (
            <MentorCard
              key={mentor.name}
              name={mentor.name}
              short={mentor.title}
              desc={
                "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
              }
              img={mentor.image ? mentor.image : DUMMY}
            />
          ))}
        </div>
      </div>

      {/* SECTION */}

      <div className="p-10 pt-14 flex flex-col items-start justify-center w-full max-sm:p-3">
        <h1 className="text-4xl font-bold mb-5 text-darkRed border-b-2 border-darkRed">
          Advising Founder Members :-
        </h1>

        <div className="gap-5 flex flex-wrap items-center justify-center w-full">
          {mentors["Advising Founder Members"].map((mentor) => (
            <MentorCard
              key={mentor.name}
              name={mentor.name}
              short={mentor.title}
              desc={
                "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
              }
              img={mentor.image ? mentor.image : DUMMY}
            />
          ))}
        </div>
      </div>

      {/* SECTION */}

      <div className="p-10 pt-14 flex flex-col items-start justify-center w-full max-sm:p-3">
        <h1 className="text-4xl font-bold mb-5 text-darkRed border-b-2 border-darkRed">
          R & D Team :-
        </h1>

        <div className="gap-5 flex flex-wrap items-center justify-center w-full">
          {mentors["R&D Board"].map((mentor) => (
            <MentorCard
              key={mentor.name}
              name={mentor.name}
              short={mentor.title}
              desc={
                "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
              }
              img={mentor.image ? mentor.image : DUMMY}
            />
          ))}
        </div>
      </div>

      {/* SECTION */}

      <div className="p-10 pt-14 flex flex-col items-start justify-center w-full max-sm:p-3">
        <h1 className="text-4xl font-bold mb-5 text-darkRed border-b-2 border-darkRed">
          Financial Board :-
        </h1>

        <div className="gap-5 flex flex-wrap items-center justify-center w-full">
          {mentors["Financial Board"].map((mentor) => (
            <MentorCard
              key={mentor.name}
              name={mentor.name}
              short={mentor.title}
              desc={
                "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
              }
              img={mentor.image ? mentor.image : DUMMY}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchMentors;
