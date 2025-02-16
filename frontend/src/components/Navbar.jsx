/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import SRC_LOGO from "/src_logo.png";
import SHOOLINI_LOGO from "/shoolini-logo.png";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "./AuthContext";

const Navbar = () => {
  const { isUserLoggedIn, data, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

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

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  const [isOpens, setIsOpens] = useState(false);

  const options = [
    {
      option: "Board of Regents",
      link: "board-of-regents",
    },
    {
      option: "Founder Members",
      link: "founder-members",
    },
    {
      option: "R&D Board",
      link: "rd-board",
    },
    {
      option: "Financial Board",
      link: "financial-board",
    },
    {
      option: "Advising Founder Members",
      link: "advising-founder-members",
    },
  ];
  return (
    <>
      <nav className="bg-darkRed shadow-md sticky top-0 px-14 flex items-center justify-between py-4 max-sm:px-5 max-md:px-8 z-10">
        <div>
          {/* { LOGO } */}
          <Link to={"/"} className="flex gap-6 max-sm:gap-2 max-md:gap-4">
            <img
              src={SRC_LOGO}
              alt=""
              className="w-20 max-sm:w-16 md:w-18 lg:w-24 border-gray-100 border-r pr-3 max-sm:pr-0 max-md:pr-2"
              draggable="false"
            />
            <img
              src={SHOOLINI_LOGO}
              alt=""
              className="w-20 max-sm:w-16 md:w-18 lg:w-24"
              draggable="false"
            />
          </Link>
        </div>
        <div className="text-white">
          {/* { HAMBURGER_MENU_ICON } */}
          <p>
            <MdMenu
              className="cursor-pointer text-2xl lg:hidden"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            />
          </p>
          <ul className="flex md:gap-8 sm:gap-4 max-lg:hidden items-center">
            <li className="text-[14px] max-md:text-sm lg:text-[15px] hover:text-gray-300 duration-500">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-[14px] max-md:text-sm lg:text-[15px] hover:text-gray-300 duration-500">
              <Link to={"/events"}>Events</Link>
            </li>
            <li className="text-[14px] max-md:text-sm lg:text-[15px] hover:text-gray-300 duration-500">
              <Link to={"/mentors"}>Mentors</Link>
            </li>
            <li className="text-[14px] max-md:text-sm lg:text-[15px] hover:text-gray-300 duration-500">
              <button
                onClick={() => setIsOpens(!isOpens)}
                style={{
                  width: "100%",
                  padding: "10px",
                  // backgroundColor: "#3498db",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Leadership
              </button>
              {isOpens && (
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    width: "17%",
                    // backgroundColor: "darkRed",
                    border: "1px solid #ccc",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                  }}
                  className="bg-darkRed"
                >
                  {options.map((option, index) => (
                    <Link key={index} to={option.link}>
                      <li
                        onClick={() => {
                          setIsOpens(false);
                        }}
                        style={{
                          padding: "10px",
                          cursor: "pointer",
                          borderBottom: "1px solid #eee",
                        }}
                        className="hover:bg-gray-600"
                      >
                        {option.option}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>

            <li className="text-[14px] max-md:text-sm lg:text-[15px] hover:text-gray-300 duration-500">
              <Link to={"/pricing"}>Pricing</Link>
            </li>
            <li className="text-[14px] max-md:text-sm lg:text-[15px] hover:text-gray-300 duration-500">
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li className="text-[14px] max-md:text-sm lg:text-[15px] hover:text-gray-300 duration-500">
              <Link to={"/admin/dashboard"}>
                {isUserLoggedIn ? (
                  <div className="bg-black rounded-full">
                    <img
                      src={`https://api.dicebear.com/9.x/initials/svg?seed=${name}`}
                      alt="Dashboard"
                      className="h-10 rounded-lg cursor-pointer"
                    />
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* MOBILE MENU */}
      <div
        className={`flex flex-col bg-darkRed h-screen w-screen text-2xl fixed top-0 p-3 gap-2 z-10 margin-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <p className="flex items-center justify-end relative top-2">
          <RxCross2
            className="cursor-pointer text-4xl text-red bg-gray-800 rounded-full p-2 mb-2"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          />
        </p>
        <ul className="flex flex-col gap-3 px-10 justify-center max-sm:w-screen sm:w-[50vw] mx-auto">
          <Link to={"/"}>
            <li
              className="text-center border cursor-pointer bg-white border-black hover:bg-gray-600 duration-700 hover:text-white text-sm py-2"
              onClick={handleNavItemClick}
            >
              Home
            </li>
          </Link>
          <Link to={"/events"}>
            <li
              className="text-center border cursor-pointer bg-white border-black hover:bg-gray-600 duration-700 hover:text-white text-sm py-2"
              onClick={handleNavItemClick}
            >
              Events
            </li>
          </Link>
          <Link to={"/mentors"}>
            <li
              className="text-center border cursor-pointer bg-white border-black hover:bg-gray-600 duration-700 hover:text-white text-sm py-2"
              onClick={handleNavItemClick}
            >
              Mentors
            </li>
          </Link>
          <Link to={"/board-of-regents"}>
            <li
              className="text-center border cursor-pointer bg-white border-black hover:bg-gray-600 duration-700 hover:text-white text-sm py-2"
              onClick={handleNavItemClick}
            >
              Board of Regents
            </li>
          </Link>
          <Link to={"/founder-members"}>
            <li
              className="text-center border cursor-pointer bg-white border-black hover:bg-gray-600 duration-700 hover:text-white text-sm py-2"
              onClick={handleNavItemClick}
            >
              Founder Members
            </li>
          </Link>
          <Link to={"/rd-board"}>
            <li
              className="text-center border cursor-pointer bg-white border-black hover:bg-gray-600 duration-700 hover:text-white text-sm py-2"
              onClick={handleNavItemClick}
            >
              R&D Board
            </li>
          </Link>
          <Link to={"/financial-board"}>
            <li
              className="text-center border cursor-pointer bg-white border-black hover:bg-gray-600 duration-700 hover:text-white text-sm py-2"
              onClick={handleNavItemClick}
            >
              Financial Board
            </li>
          </Link>
          <Link to={"/advising-founder-members"}>
            <li
              className="text-center border cursor-pointer bg-white border-black hover:bg-gray-600 duration-700 hover:text-white text-sm py-2"
              onClick={handleNavItemClick}
            >
              Advising Founder Members
            </li>
          </Link>
          <Link to={"/pricing"}>
            <li
              className="text-center border cursor-pointer bg-white border-black hover:bg-gray-600 duration-700 hover:text-white text-sm py-2"
              onClick={handleNavItemClick}
            >
              Pricing
            </li>
          </Link>
          <Link to={"/contact"}>
            <li
              className="text-center border cursor-pointer bg-white border-black hover:bg-gray-600 duration-700 hover:text-white text-sm py-2"
              onClick={handleNavItemClick}
            >
              Contact
            </li>
          </Link>
          {isUserLoggedIn && (
            <Link to={"/admin/dashboard"}>
              <li
                className="text-center border cursor-pointer bg-red border-black hover:bg-gray-600 duration-700 text-white text-sm py-2"
                onClick={handleNavItemClick}
              >
                Dashboard
              </li>
            </Link>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
