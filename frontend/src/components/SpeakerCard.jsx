import React from "react";

const SpeakerCard = () => {
  return (
    <div className="bg-gray-400 p-6 flex flex-col justify-center shadow-[6px_6px_0_0_rgb(0,0,0)] rounded-tl-xl">
      <img
        src="https://websitedemos.net/event-02/wp-content/uploads/sites/863/2021/05/event-speaker-2-1.jpg"
        alt=""
        className="w-24 h-24 rounded-full mb-4 mx-auto"
      />
      <h3 className="text-lg font-bold mb-2">Jane Roberts</h3>
      <p className="text-gray-600">Sr. creative designer</p>
    </div>
  );
};

export default SpeakerCard;
