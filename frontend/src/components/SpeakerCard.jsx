/* eslint-disable react/prop-types */

const SpeakerCard = ({name, designation, image}) => {
  return (
    <div className="bg-gray-400 p-6 flex flex-col justify-center shadow-[6px_6px_0_0_rgb(0,0,0)] rounded-tl-xl">
      <img
        src={image}
        alt=""
        className="w-24 h-24 rounded-full mb-4 mx-auto object-cover object-center"
      />
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-600"> {designation} </p>
    </div>
  );
};

export default SpeakerCard;
