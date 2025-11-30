/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import SRC_LOGO from "/src_logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <img src={SRC_LOGO} alt="SRC Logo" className="h-16 w-auto mb-4" />
            <h3 className="text-white font-bold text-lg">Student Research Council</h3>
            <p className="text-sm leading-relaxed">
              Empowering students through cutting-edge research, innovation, and entrepreneurship at India's leading research university.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-emerald-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm hover:text-emerald-400 transition">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/mentors" className="text-sm hover:text-emerald-400 transition">
                  Mentors
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm hover:text-emerald-400 transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-emerald-400 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Leadership</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/board-of-regents" className="text-sm hover:text-emerald-400 transition">
                  Board of Regents
                </Link>
              </li>
              <li>
                <Link to="/founder-members" className="text-sm hover:text-emerald-400 transition">
                  Founder Members
                </Link>
              </li>
              <li>
                <Link to="/rd-board" className="text-sm hover:text-emerald-400 transition">
                  R&D Board
                </Link>
              </li>
              <li>
                <Link to="/financial-board" className="text-sm hover:text-emerald-400 transition">
                  Financial Board
                </Link>
              </li>
              <li>
                <Link to="/advising-founder-members" className="text-sm hover:text-emerald-400 transition">
                  Advising Founder Members
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Shoolini University<br />
                  Solan, Himachal Pradesh<br />
                  India - 173229
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a href="tel:+911792308000" className="text-sm hover:text-emerald-400 transition">
                  +91 1792 308000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:src@shooliniuniversity.com" className="text-sm hover:text-emerald-400 transition">
                  src@shooliniuniversity.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-emerald-400 font-semibold">Student Research Council</span>. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-emerald-400 transition">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-emerald-400 transition">
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-emerald-400 transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
