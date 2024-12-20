/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Check } from 'lucide-react'
import HERO_BG from "/bg-img.jpg";

const Pricing = () => {
      const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };
      useEffect(() => {
        scrollToTop();
      }, []);
    const plans = [
        {
          name: 'Basic Plan 🙃',
          price: '$9.99',
          features: [
            '1 User',
            '10 Projects',
            '5GB Storage',
            'Basic Support',
          ]
        },
        {
          name: 'Pro Plan 😉',
          price: '$19.99',
          features: [
            'Unlimited Users',
            'Unlimited Projects',
            '100GB Storage',
            '24/7 Priority Support',
            'Advanced Analytics',
          ]
        },
      ]

  return (
    <div className="min-h-[91vh] bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
            style={{
              backgroundImage: `url("${HERO_BG}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed"
            }}
            >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-red border py-3 shadow-[4px_4px_0px_black]">
            Plans and Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that&apos;s right for you
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 bg-gray-100`}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{plan.name}</h2>
                <p className="mt-4 text-5xl font-extrabold text-red">{plan.price}</p>
                <p className="mt-1 text-xl text-gray-500">per month</p>
                <button
                  className="mt-8 w-full bg-darkRed py-4 text-white rounded">
                  Get Started
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
                  What&apos;s included
                </h3>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green" aria-hidden="true" />
                      <span className="text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;