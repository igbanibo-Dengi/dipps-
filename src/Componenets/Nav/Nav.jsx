import React, { useState } from "react";
import "./nav.css";
import { GrMenu } from "react-icons/gr";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="z-1 shadow-lg">
      <div className="bg-white fixed w-full z-10 shadow-2xl">
        <nav className="flex flex-row relative justify-between items-center max-w-[1200px] w-[80%] mx-auto py-2">
          <span className="nav-logo text-[22px] md:text-[36px] lg:text-[48px] uppercase text-bold">
            Dipps Makeover
          </span>
          <ul className="hidden lg:flex flex-row justify-around items-center w-[40%]">
            <a
              href="/"
              className="text-gray-800 hover:underline hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              Home
            </a>
            <a
              href="/"
              className="text-gray-800 hover:underline hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              About
            </a>
            <a
              href="/"
              className="text-gray-800 hover:underline hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              Portfolio
            </a>
            <a
              href="/"
              className="text-gray-800 hover:underline hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              Contact
            </a>
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
            <a
              href="/"
              className="text-gray-800 hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              Home
            </a>
            <a
              href="/"
              className="text-gray-800 hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              About
            </a>
            <a
              href="/"
              className="text-gray-800 hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              Portfolio
            </a>
            <a
              href="/"
              className="text-gray-800 hover:text-gray-500 text-[17px] uppercase cursor-pointer"
            >
              Contact
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
