import React, { useState } from "react";
import logo from "../assets/CompanyLogo/istitch-logo.png";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { FaBars, FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const MainHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className=" bg-[#102044] w-full px-4 xl:px-24">
      <div className="py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to='/'>
        <div className="bg-white h-[57px] w-[105px] flex justify-center items-center">
          <img src={logo} alt="logo" />
        </div>
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex gap-10 items-center text-white text-lg ">
          <div className="relative">
            <span
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="cursor-pointer flex items-center gap-2 text-[16px]"
            >
              OUR SERVICES <FaCaretDown />
            </span>

            {isServicesOpen && (
              <ul className="absolute top-8 left-0  rounded shadow-lg p-4 space-y-2  w-[145%] bg-[#102044] text-white">
                <li><a href="#" className="text-[14px]">Embroidery Digitizing</a></li>
                <li><a href="#"className="text-[16px]">Vector Art Digitilizing</a></li>
                <li><a href="#" className="text-[16px]">Logo Digitinzing</a></li>
                <li><a href="#" className="text-[16px]">Applique Digitizing</a></li>
                <li><a href="#" className="text-[16px]">Jacket Back Digitizing</a></li>
                <li><a href="#" className="text-[16px]">Hat & Cap Diigitizing</a></li>
              </ul>
            )}
          </div>
          <a href="/pricing" className="text-[16px]">PRICING</a>
          <a href="#" className="text-[16px]">PORTFOLIO</a>
          <a href="#" className="text-[16px]">BLOGS</a>
       
        </nav>

        {/* Get started */}

        <button className="bg-[#D0A038] text-white px-3  w-[155px] h-[37px] text-[20px] font-semibold rounded-full text-center hover:bg-[#102044] hover:text-white hover:border-solid hover:border-2 hoverL:border-indigo-600 hidden lg:block">
          Get Started
        </button>

        {/* Mobile Icons */}
        <div className="flex gap-2 lg:hidden">
          <div className="bg-[#D0A038] w-[45px] h-[45px] rounded-full flex justify-center items-center p-2">
            <BiSolidMessageAltDetail className="w-[35px] h-[35px]" color="white" />
          </div>

          {/* Hamburger Menu */}
          <div className="bg-[#D0A038] w-[45px] h-[45px] rounded-full flex justify-center items-center p-2">
            <FaBars
              className="text-2xl cursor-pointer"
              color="white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`z-10 fixed inset-0 mt-[56px] bg-white text-black transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100 visible h-[50vh] top-20"
              : "-translate-y-full opacity-0 invisible h-0"
          }`}
        >
          <div className="overflow-y-auto h-full p-4">
            <ul className="flex flex-col space-y-6 text-xl">
              <li
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="cursor-pointer flex justify-between items-center hover:bg-[#F4F4F4] "
              >
                OUR SERVICES <FaCaretDown />
              </li>
              {isServicesOpen && (
                <ul className="ml-4 text-lg space-y-2">
                  <li><a href="#">Embroidery Digitizing</a></li>
                  <li><a href="#">Vector Art Digitilizing</a></li>
                  <li><a href="#">Logo Digitinzing</a></li>
                  <li><a href="#">Applique Digitizing</a></li>
                  <li><a href="#">Jacket Back Digitizing</a></li>
                  <li><a href="#">Hat & Cap Diigitizing</a></li>
                </ul>
              )}
              <li><a href="/pricing">PRICING</a></li>
              <li><a href="#">PORTFOLIO</a></li>
              <li><a href="#">BLOGS</a></li>
           
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
