/* eslint-disable react/prop-types */

export default function SpeakerCard({ speaker }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-slate-100 hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300 group">
      {/* Speaker Image */}
      <div className="aspect-[3/4] relative overflow-hidden bg-slate-100">
        <img
          src={speaker?.image?.imageUrl || "/dummy.jpg"}
          alt={speaker?.name}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
        />
      </div>

      {/* Speaker Details */}
      <div className="p-6 text-center">
        <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-emerald-600 transition">
          {speaker?.name}
        </h3>
        <p className="text-sm text-slate-600">
          {speaker?.designation}
        </p>
      </div>
    </div>
  );
}
