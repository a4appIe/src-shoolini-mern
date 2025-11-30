/* eslint-disable react/prop-types */
import { Mail, Linkedin } from "lucide-react";

export default function MentorCard({ name, title, image, email, linkedin }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-slate-100 hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
      {/* Member Image with Overlay Effect */}
      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <img
          src={image || "/dummy.jpg"}
          alt={name}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Contact Icons Overlay (Visible on Hover) */}
        {(email || linkedin) && (
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-emerald-500 text-slate-700 hover:text-white transition-all shadow-lg hover:scale-110"
                title={`Email ${name}`}
                aria-label={`Email ${name}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-emerald-500 text-slate-700 hover:text-white transition-all shadow-lg hover:scale-110"
                title={`${name}'s LinkedIn Profile`}
                aria-label={`${name}'s LinkedIn Profile`}
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
      
      {/* Member Details */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
          {name}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
          {title}
        </p>

        {/* Bottom Contact Bar (Always Visible) */}
        <div className="mt-4 pt-4 border-t border-slate-200">
          {(email || linkedin) ? (
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Contact
              </span>
              <div className="flex items-center gap-2">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-600 transition-all hover:scale-110"
                    title={`Email ${name}`}
                    aria-label={`Email ${name}`}
                  >
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-600 transition-all hover:scale-110"
                    title={`${name}'s LinkedIn Profile`}
                    aria-label={`${name}'s LinkedIn Profile`}
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-400 italic text-center">
              Contact information not available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
