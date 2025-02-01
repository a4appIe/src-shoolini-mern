/* eslint-disable react/prop-types */
import { Check } from "lucide-react"

export function PricingCard({ title, price, description, features, isPopular = false }) {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${isPopular ? "border-2 border-darkRed" : "outline outline-darkRed"}`}>
      {isPopular && <div className="bg-darkRed text-white text-center py-2 text-sm font-semibold">Most Popular</div>}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-4xl font-bold mb-6">{price}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="text-green-500 mr-2 h-5 w-5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button
          className={`w-full py-2 px-4 rounded-lg font-semibold ${
            isPopular ? "bg-darkRed text-white hover:bg-red" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          } transition duration-300`}
        >
          Choose Plan
        </button>
      </div>
    </div>
  )
}