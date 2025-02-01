/* eslint-disable react/prop-types */
export default function SpeakerCard({ speaker }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
      <img
        src={speaker.image?.imageUrl || "/dummy.jpg"}
        alt={speaker.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{speaker.name}</h3>
        <p className="text-gray-600">{speaker.designation}</p>
      </div>
    </div>
  );
}
