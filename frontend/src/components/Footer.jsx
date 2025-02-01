/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1F2A38] py-6 border-t border-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Copyright */}
          <div className="text-sm text-gray-400 mb-4 md:mb-0 text-center">
            © {new Date().getFullYear()} <span className="text-red">Student Research Council.</span> All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-300 duration-150">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-300 duration-150">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-300 duration-150">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-300 duration-150">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
