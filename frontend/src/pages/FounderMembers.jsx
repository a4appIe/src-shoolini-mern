import MentorCard from "../components/MentorCard"
import data from "../utils/data.js"

export default function FounderMembers() {
  return (
    <div className="container min-w-full py-16 px-4 bg-black">
      <h1 className="text-4xl font-bold mb-12 text-center text-white">Founder Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data["Founder Members"].map((member) => (
          <MentorCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  )
}