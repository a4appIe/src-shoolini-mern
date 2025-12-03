/* eslint-disable react/prop-types */
export default function MentorCard({ name, title, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-slate-100 hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
      {/* Member Image with Overlay Effect */}
      <div className="aspect-[4/3] relative overflow-hidden bg-white">
        <img
          src={image || "/dummy.jpg"}
          alt={name}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 bg-white group-hover:scale-110 transition-all duration-500"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Member Details */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
          {name}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
          {title}
        </p>
      </div>
    </div>
  );
}
