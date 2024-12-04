import React from "react";

const PricingCard = () => {
  return (
    <div className="rounded-2xl shadow-lg p-3 bg-darkRed text-gray-600 max-w-lg min-w-min sm:w-11/12 lg:w-full xl:w-10/12 mx-auto">
      <div className="relative flex flex-col items-center p-6 pt-12 bg-blue-100 rounded-xl h-auto">
        {/* Pricing Badge */}
        <span className="absolute top-0 right-0 flex items-center bg-darkRed rounded-l-full py-2 px-3 text-xl font-semibold text-amber-100 mt-[-12px]">
          $49 <small className="text-xs ml-1 text-white">/ month</small>
        </span>

        {/* Plan Name */}
        <p className="text-xl font-semibold text-darkRed bg-indigo-200 px-3 py-2 rounded-lg">
          Professional
        </p>

        {/* Description */}
        <p className="text-center mt-4 text-gray-700">
          This plan is for those who have a team already and are running a large
          business.
        </p>

        {/* Features List */}
        <ul className="flex flex-col space-y-4 mt-6">
          <li className="flex items-center space-x-3">
            <span className="flex items-center justify-center w-6 h-6 bg-teal-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="14"
                height="14"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>
              <strong className="font-semibold text-gray-800">20</strong> team
              members
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="flex items-center justify-center w-6 h-6 bg-teal-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="14"
                height="14"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>
              Plan{" "}
              <strong className="font-semibold text-gray-800">
                team meetings
              </strong>
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="flex items-center justify-center w-6 h-6 bg-teal-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="14"
                height="14"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>File sharing</span>
          </li>
        </ul>

        {/* Action Button */}
        <div className="w-full flex justify-center mt-8">
          <a
            className="w-full py-3 text-center text-white bg-darkRed rounded-lg font-medium text-lg hover:bg-indigo-700 focus:outline-none"
            href="#"
          >
            Choose plan
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
