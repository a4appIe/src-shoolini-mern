/* eslint-disable react/prop-types */

export default function MentorCard({ name, title, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden outline">
      <div className="aspect-[4/3] relative">
        <img
          src={image || "/dummy.jpg"}
          alt={name}
          className="w-full h-full object-cover filter grayscale"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-1">{name}</h3>
        <p className="text-base text-gray-600">{title}</p>
      </div>
    </div>
  )
}
