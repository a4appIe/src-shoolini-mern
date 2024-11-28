import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import SRC_LOGO from "/src_logo.png";
import SHOOLINI_LOGO from "/shoolini-logo.png";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-darkRed shadow-md sticky top-0 px-14 flex items-center justify-between py-4 max-sm:px-5 max-md:px-8">
        <div>
          {/* { LOGO } */}
          <Link to={"/"} className="flex gap-6 max-sm:gap-2 max-md:gap-4">
            <img
              src={SRC_LOGO}
              alt=""
              className="w-24 max-sm:w-16 md:w-18 border-gray-100 border-r pr-3 max-sm:pr-0 max-md:pr-2"
              draggable="false"
            />
            <img
              src={SHOOLINI_LOGO}
              alt=""
              className="w-24 max-sm:w-16 md:w-18"
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
          <ul className="flex gap-8 max-sm:hidden">
            <li className="text-[14px] max-md:text-sm lg:text-[15px] hover:text-gray-300 duration-500">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-[14px] max-md:text-sm lg:text-[15px] hover:text-gray-300 duration-500">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="text-[14px] max-md:text-sm lg:text-[15px] hover:text-gray-300 duration-500">
              <Link to={"/services"}>Services</Link>
            </li>
            <li className="text-[14px] max-md:text-sm lg:text-[15px] hover:text-gray-300 duration-500">
              <Link to={"/contact"}>Contact</Link>
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
