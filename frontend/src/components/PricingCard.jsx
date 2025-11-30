/* eslint-disable react/prop-types */
import { Check, ArrowRight } from "lucide-react";

export function PricingCard({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  isPopular = false, 
  icon: Icon,
  buttonText = "Choose Plan" 
}) {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col ${
        isPopular
          ? "border-2 border-emerald-500 shadow-2xl scale-105"
          : "border-2 border-slate-200 hover:border-emerald-300 hover:shadow-xl"
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col">
        {/* Icon and Title */}
        <div className="mb-6">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
            isPopular 
              ? "bg-gradient-to-br from-emerald-500 to-emerald-600" 
              : "bg-slate-100"
          }`}>
            {Icon && (
              <Icon className={`h-7 w-7 ${isPopular ? "text-white" : "text-slate-700"}`} />
            )}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-extrabold text-slate-900">{price}</span>
            <span className="text-slate-500 font-medium">{period}</span>
          </div>
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-8 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                <Check className="h-3.5 w-3.5 text-emerald-600" strokeWidth={3} />
              </div>
              <span className="text-slate-700 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
            isPopular
              ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl"
              : "bg-slate-100 text-slate-800 hover:bg-slate-200"
          }`}
        >
          {buttonText}
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
