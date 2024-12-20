import { useEffect } from "react";
import { FaFolderOpen, FaFileAlt, FaUpload, FaBook } from "react-icons/fa";
import HERO_BG from "/bg-img.jpg";
import HomeLink from "../components/HomeLink";
import PricingCard from "../components/PricingCard";

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
            At India&apos;s No.1{" "}
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

      {/* ABOUT SECTION */}
      <section className="bg-white text-gray-800 py-12 px-6 sm:px-10 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={HERO_BG} // Replace with actual image path
            alt="SRC Building"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-red-600 mb-4 text-red">
            SHOOLINI RESEARCH
          </h2>
          <p className="text-lg font-medium mb-4">
            RESEARCH IS IN OUR DNA
          </p>
          <p className="text-gray-700 leading-relaxed">
            Shoolini is at the forefront of research internationally and attracts outstanding
            academics, research staff, and students from across the world. Shoolini researchers
            engage in cutting-edge research across disciplines and make groundbreaking contributions
            in science, engineering, business, and liberal arts. Our researchers are tackling key
            global challenges—from finding cures to diseases to ecological problems, agriculture, and
            myriad other issues.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our world-class resources include state-of-the-art research facilities, extensive grant
            and funding opportunities, and robust support networks dedicated to turning research into
            actionable innovations. We are committed to supporting our inspiring community of
            researchers to break new grounds and expand the frontiers of knowledge to help improve the
            human condition and the state of our planet.
          </p>
        </div>
      </div>
    </section>

    {/* RESEARCH IMPACT SECTION */}

    <section className="bg-gray-800 text-white py-12 px-6 sm:px-10 lg:px-24">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left Section: Title */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-bold text-red-500 mb-4 text-red">
            Research Impact
          </h2>
          <p className="text-xl sm:text-2xl font-semibold">
            at par with the world&apos;s best universities
          </p>
        </div>

        {/* Right Section: Table */}
        <div className="lg:w-1/2 overflow-x-auto">
          <table className="table-auto w-full text-sm sm:text-base text-left border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-2 border border-gray-600">Institution</th>
                <th className="p-2 border border-gray-600">FWCI Citation Score</th>
                <th className="p-2 border border-gray-600">
                  Publications in Top 1%
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-600">Shoolini University</td>
                <td className="p-2 border border-gray-600">2.27</td>
                <td className="p-2 border border-gray-600">9.3</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-600">University of Oxford</td>
                <td className="p-2 border border-gray-600">2.12</td>
                <td className="p-2 border border-gray-600">3.8</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-600">University of Cambridge</td>
                <td className="p-2 border border-gray-600">2.07</td>
                <td className="p-2 border border-gray-600">4.2</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-600">MIT</td>
                <td className="p-2 border border-gray-600">2.36</td>
                <td className="p-2 border border-gray-600">6.0</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-600">Princeton University</td>
                <td className="p-2 border border-gray-600">2.9</td>
                <td className="p-2 border border-gray-600">4.9</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-600">Yale University</td>
                <td className="p-2 border border-gray-600">2.04</td>
                <td className="p-2 border border-gray-600">4.1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Note and Button */}
      <div className="mt-8 text-sm text-gray-300">
        <p className="mb-4">
          <span className="font-bold">*FWCI (Field Weighted Citation Score)</span> is an
          indication of the contribution of a university to the sum of human knowledge – and signals
          research that has stood out and is shared across the global community of researchers.
        </p>
        <p className="mb-4">
          The table indicates the FWCI and research parameters of select universities, tracked by us
          for comparison, for the period 2017–2019. It is possible there are institutions across the
          globe as well as in the country with higher scores on similar indexes.
        </p>
      </div>

      <div className="mt-4 text-center">
        <button className="bg-red hover:bg-pink-800 font-semibold py-2 px-6 rounded-lg">
          Join
        </button>
      </div>
    </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center mt-5 max-md:w-[90%] w-[80%] mx-auto">
        <PricingCard />
        <PricingCard />
      </div>

      
    </>
  );
};

export default Home;
