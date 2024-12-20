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
              className="cursor-pointer text-2xl sm:hidden"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            />
          </p>
          <ul className="flex md:gap-8 sm:gap-4 max-sm:hidden items-center">
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
              <Link to={"/leadership"}>Leadership</Link>
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
                      alt="ftfhgf"
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

        {/* MOBILE MENU */}
      </nav>
      <div
        className={`flex flex-col bg-yellow-200 h-screen w-screen text-2xl fixed top-0 p-3 gap-8 z-10 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <p className="flex items-center justify-end">
          <RxCross2
            className="border cursor-pointer"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          />
        </p>
        <ul className="flex flex-col gap-3 px-10 justify-center">
          <Link to={"/"}>
            <li
              className="text-center border cursor-pointer bg-white border-black hover:bg-blue-200 duration-700 shadow-[6px_6px_0px_0px_rgba(0,_0,_0)]"
              onClick={handleNavItemClick}
            >
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li
              className="text-center border bg-white border-black hover:bg-blue-200 duration-700 shadow-[6px_6px_0px_0px_rgba(0,_0,_0)]"
              onClick={handleNavItemClick}
            >
              About
            </li>
          </Link>
          <Link to={"/services"}>
            <li
              className="text-center border bg-white border-black hover:bg-blue-200 duration-700 shadow-[6px_6px_0px_0px_rgba(0,_0,_0)]"
              onClick={handleNavItemClick}
            >
              Services
            </li>
          </Link>
          <Link to={"/contact"}>
            <li
              className="text-center border bg-white border-black hover:bg-blue-200 duration-700 shadow-[6px_6px_0px_0px_rgba(0,_0,_0)]"
              onClick={handleNavItemClick}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
