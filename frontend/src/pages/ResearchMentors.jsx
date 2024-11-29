import React, { useEffect } from "react";
import MentorCard from "../components/MentorCard";
import HERO_BG from "/bg-img.jpg";
import DR_PANKAJ_VAIDYA from "/pankajvaidya.jpg";

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

      <div className="p-10 flex flex-col items-start justify-center w-full max-sm:p-3">
        <h1 className="text-4xl font-bold mb-5 text-darkRed border-b-2 border-darkRed">
          R & D Team :-
        </h1>
        <div className="gap-5 flex flex-wrap items-center justify-center w-full">
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
        </div>
      </div>

      {/* SECTION */}

      <div className="p-10 flex flex-col items-start justify-center w-full max-sm:p-3">
        <h1 className="text-4xl font-bold mb-5 text-darkRed border-b-2 border-darkRed">
          Financial Board :-
        </h1>
        <div className="gap-5 flex flex-wrap items-center justify-center w-full">
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
        </div>
      </div>

      {/* SECTION */}

      <div className="p-10 flex flex-col items-start justify-center w-full max-sm:p-3">
        <h1 className="text-4xl font-bold mb-5 text-darkRed border-b-2 border-darkRed">
          Innovation & Marketing Board :-
        </h1>
        <div className="gap-5 flex flex-wrap items-center justify-center w-full">
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
        </div>
      </div>

      {/* SECTION */}

      <div className="p-10 flex flex-col items-start justify-center w-full max-sm:p-3">
        <h1 className="text-4xl font-bold mb-5 text-darkRed border-b-2 border-darkRed">
          Technical Operation Board :-
        </h1>
        <div className="gap-5 flex flex-wrap items-center justify-center w-full">
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
        </div>
      </div>

      {/* SECTION */}

      <div className="p-10 flex flex-col items-start justify-center w-full max-sm:p-3">
        <h1 className="text-4xl font-bold mb-5 text-darkRed border-b-2 border-darkRed">
          Events and Outreach Board :-
        </h1>
        <div className="gap-5 flex flex-wrap items-center justify-center w-full">
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
          <MentorCard
            isMD={true}
            name={"Dr. Pankaj Vaidya"}
            short={
              "Professor, M.E, PhD (Drug Discovery utilising Machine Learning)"
            }
            desc={
              "Dr Pankaj Vaidya is a highly esteemed academician and prominent researcher specializing in Artificial Intelligence (AI) and Machine Learning (ML). Currently holding the position of Professor at Shoolini University"
            }
            img={DR_PANKAJ_VAIDYA}
          />
        </div>
      </div>
    </div>
  );
};

export default ResearchMentors;
