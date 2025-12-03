import { useEffect } from "react";
import { PricingCard } from "../components/PricingCard";
import { Sparkles, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    title: "Basic",
    price: "₹1,000",
    period: "/semester",
    description: "Perfect for individual researchers starting their journey",
    features: [
      "Access to research resources",
      "1 project submission",
      "Community forum access",
      "Monthly newsletter",
      "Basic mentorship"
    ],
    icon: Sparkles,
    buttonText: "Get Started"
  },
  {
    title: "Pro",
    price: "₹2,000",
    period: "/semester",
    description: "Great for active researchers and small teams",
    features: [
      "Everything in Basic",
      "5 project submissions",
      "Priority event access",
      "1-on-1 mentorship sessions",
      "Advanced analytics",
      "Workshop discounts",
      "Networking events access"
    ],
    isPopular: true,
    icon: Zap,
    buttonText: "Start Pro"
  },
  {
    title: "Enterprise",
    price: "₹3,000",
    period: "/semester",
    description: "For research teams and organizations",
    features: [
      "Everything in Pro",
      "Unlimited project submissions",
      "Dedicated research advisor",
      "24/7 priority support",
      "Custom integrations",
      "Advanced security features",
      "Team collaboration tools",
      "Exclusive research grants access"
    ],
    icon: Crown,
    buttonText: "Contact Sales"
  },
];

export default function PricingPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto py-20 px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200">
              💎 Simple, Transparent Pricing
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 mb-6">
            Choose Your Plan
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-emerald-500"></div>
            <Sparkles className="h-5 w-5 text-emerald-500" />
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Select the perfect membership plan to accelerate your research journey and unlock exclusive benefits
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Research Library Access</p>
                  <p className="text-sm text-slate-600">Full access to our digital research library</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Certificate of Membership</p>
                  <p className="text-sm text-slate-600">Official SRC membership certificate</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email Support</p>
                  <p className="text-sm text-slate-600">Dedicated email support for all queries</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Global Mentor Access</p>
                  <p className="text-sm text-slate-600">Access to connect with mentors</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Patent Support</p>
                  <p className="text-sm text-slate-600">50% funding for global patents</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ or Contact Section */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Have questions about our plans?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition"
          >
            Contact our team
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
