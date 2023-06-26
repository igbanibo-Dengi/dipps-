import React, { useState } from "react";
import "./nav.css";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="z-1 shadow-lg">
      <div className="bg-white fixed w-full z-10 shadow-2xl">
        <nav className="flex flex-row relative justify-between items-center max-w-[1200px] px-2 xsm:w-[80%] mx-auto py-2">
          <span className="nav-logo text-[22px] md:text-[36px] lg:text-[48px] uppercase text-bold">
            Dipps Beautifyers
          </span>
          <ul className="hidden lg:flex flex-row justify-around items-center w-[40%]">
            <Link
              to="/home"
              className="text-gray-800 hover:underline hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:underline hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-800 hover:underline hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:underline hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              Contact
            </Link>
          </ul>
          {/* Hamburger Icon */}
          <GrMenu size={25} className="lg:hidden" onClick={toggleMobileMenu} />
        </nav>
        <nav
          className={`lg:hidden z-0 mx-auto absolute bg-white w-[60%] right-[20%] mobile-menu overflow-hidden ${
            isMobileMenuOpen ? "open" : " "
          }`}
        >
          <ul className="flex flex-col justify-around shadow-md px-4 border-black border-t-2 h-[200px]">
            <Link
              to="/home"
              className="text-gray-800 hover:underline hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:underline hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-800 hover:underline hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:underline hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
