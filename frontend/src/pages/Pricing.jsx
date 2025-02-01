import { PricingCard } from "../components/PricingCard"

const pricingPlans = [
  {
    title: "Basic",
    price: "₹ 1,000/sem",
    description: "Perfect for individuals",
    features: ["1 user", "10 projects", "5GB storage", "Basic support"],
  },
  {
    title: "Pro",
    price: "₹ 2,000/sem",
    description: "Great for small teams",
    features: ["5 users", "Unlimited projects", "50GB storage", "Priority support", "Advanced analytics"],
    isPopular: true,
  },
  {
    title: "Enterprise",
    price: "₹ 3,000/sem",
    description: "For large organizations",
    features: [
      "Unlimited users",
      "Unlimited projects",
      "1TB storage",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced security",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">Choose Your Plan</h1>
        <p className="text-xl text-gray-400 mb-12 text-center">Select the perfect plan for your needs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  )
}

