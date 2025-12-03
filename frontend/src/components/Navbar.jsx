/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import SRC_LOGO from "/src_logo.png";
import SHOOLINI_LOGO from "/shoolini-logo.png";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";
import { AuthContext } from "./AuthContext";

const Navbar = () => {
  const { isUserLoggedIn, data, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { token, name } = localStorage.getItem("admin")
    ? JSON.parse(localStorage.getItem("admin"))
    : { token: null };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin) {
      setIsLogin(true);
    }
  }, [name]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavItemClick = () => {
    setIsOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const leadershipOptions = [
    { option: "Board of Regents", link: "board-of-regents" },
    { option: "Founders", link: "founders" },
    { option: "R&D Board", link: "rd-board" },
    { option: "Financial Board", link: "financial-board" },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="bg-slate-900 shadow-lg sticky top-0 z-50 border-b border-emerald-500/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4">
              <img
                src={SRC_LOGO}
                alt="SRC Logo"
                className="h-14 w-auto"
                draggable="false"
              />
              <div className="h-12 w-px bg-slate-600"></div>
              <img
                src={SHOOLINI_LOGO}
                alt="Shoolini Logo"
                className="h-14 w-auto"
                draggable="false"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <NavLink to="/" text="Home" />
              <NavLink to="/events" text="Events" />
              <NavLink to="/mentors" text="Mentors" />

              {/* Leadership Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 text-gray-300 hover:text-emerald-400 font-medium transition"
                >
                  Leadership
                  <IoChevronDown
                    className={`transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                    {leadershipOptions.map((option, index) => (
                      <Link
                        key={index}
                        to={option.link}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-emerald-400 transition font-medium"
                      >
                        {option.option}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink to="/pricing" text="Pricing" />
              <NavLink to="/contact" text="Contact" />

              {/* User Avatar or CTA */}
              {isUserLoggedIn ? (
                <Link to="/admin/dashboard">
                  <img
                    src={`https://api.dicebear.com/9.x/initials/svg?seed=${name}`}
                    alt="Profile"
                    className="h-10 w-10 rounded-full border-2 border-emerald-500 hover:border-emerald-400 transition"
                  />
                </Link>
              ) : (
                <Link
                  to="/pricing"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2.5 rounded-lg transition"
                >
                  Join Now
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-gray-300 hover:text-emerald-400 transition"
            >
              <MdMenu className="text-3xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-slate-900 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <Link to="/" onClick={handleNavItemClick}>
              <img src={SRC_LOGO} alt="SRC Logo" className="h-12" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-emerald-400"
            >
              <RxCross2 className="text-3xl" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-2">
              <MobileNavLink to="/" text="Home" onClick={handleNavItemClick} />
              <MobileNavLink
                to="/events"
                text="Events"
                onClick={handleNavItemClick}
              />
              <MobileNavLink
                to="/mentors"
                text="Mentors"
                onClick={handleNavItemClick}
              />

              {/* Mobile Leadership Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-gray-300 hover:bg-slate-800 hover:text-emerald-400 transition"
                >
                  <span>Leadership</span>
                  <IoChevronDown
                    className={`transition-transform ${
                      isMobileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileDropdownOpen && (
                  <div className="mt-2 space-y-1 pl-4">
                    {leadershipOptions.map((option, index) => (
                      <Link
                        key={index}
                        to={option.link}
                        onClick={handleNavItemClick}
                      >
                        <div className="px-4 py-3 rounded-lg font-medium text-sm text-gray-400 hover:bg-slate-800 hover:text-emerald-400 transition">
                          {option.option}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <MobileNavLink
                to="/pricing"
                text="Pricing"
                onClick={handleNavItemClick}
              />
              <MobileNavLink
                to="/contact"
                text="Contact"
                onClick={handleNavItemClick}
              />

              {isUserLoggedIn && (
                <MobileNavLink
                  to="/admin/dashboard"
                  text="Dashboard"
                  onClick={handleNavItemClick}
                  highlight
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

// Desktop Nav Link
const NavLink = ({ to, text }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-emerald-400 font-medium transition"
  >
    {text}
  </Link>
);

// Mobile Nav Link
const MobileNavLink = ({ to, text, onClick, highlight = false }) => (
  <Link to={to}>
    <div
      onClick={onClick}
      className={`px-4 py-3 rounded-lg font-medium transition ${
        highlight
          ? "bg-emerald-500 text-white hover:bg-emerald-600"
          : "text-gray-300 hover:bg-slate-800 hover:text-emerald-400"
      }`}
    >
      {text}
    </div>
  </Link>
);

export default Navbar;
