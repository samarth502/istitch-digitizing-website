import React, { useState } from "react";
import logo from "../assets/CompanyLogo/istitch-logo.png";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { FaBars, FaCaretDown } from "react-icons/fa6";

export const MainHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (

      <header className="px-4 bg-[#102044]  ">
        <div className="flex flex-row justify-between items-center  py-2 ">
          <div className="bg-white h-[57px] w-[105px] flex justify-center items-center">
            <img src={logo} alt="logo" className="" />
          </div>
          <div className="flex flex-row gap-2">
            <div className="bg-[#D0A038]  w-[45px] h-[45px] rounded-full flex justify-center items-center p-2">
              <BiSolidMessageAltDetail
                className="w-[35px] h-[35px] "
                color="white"
              />
            </div>

            <div className="bg-[#D0A038]  w-[45px] h-[45px] rounded-full flex justify-center items-center p-2">
              <div className="md:hidden">
                {isMobileMenuOpen ? (
                  <FaBars
                    className="text-2xl cursor-pointer"
                    color="white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ) : (
                  <FaBars
                    className="text-2xl cursor-pointer"
                    color="white"
                    onClick={() => setIsMobileMenuOpen(true)}
                  />
                )}

                <div
                  className={`z-10 fixed inset-0 mt-[56px] bg-white text-black transition-all duration-300 ease-in-out transform ${
                    isMobileMenuOpen
                      ? "translate-y-0 opacity-100 visible h-[37vh] top-20"
                      : "-translate-y-full opacity-0 invisible h-0"
                  }`}
                >
                  <div className="overflow-y-auto h-full p-4">
                    <ul className="flex flex-col space-y-6 text-xl">
                      <li
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="cursor-pointer  flex justify-between items-center hover:bg-[#F4F4F4]"
                      >
                        OUR SERVICES <FaCaretDown />
                      </li>
                      {isServicesOpen && (
                        <ul className="ml-4 text-lg space-y-2">
                          <li>
                            <a href="#">Embroidery Digitizing</a>
                          </li>
                          <li>
                            <a href="#">Vector Art Digitilizing</a>
                          </li>
                          <li>
                            <a href="#">Logo Digitinzing</a>
                          </li>
                          <li>
                            <a href="#">Applique Digitizing</a>
                          </li>

                          <li>
                            <a href="#">Jacket Back Digitizing</a>
                          </li>
                          <li>
                            <a href="#">Hat & Cap Diigitizing</a>
                          </li>
                        </ul>
                      )}
                      <li>
                        <a href="#">PRICING</a>
                      </li>
                      <li>
                        <a href="#">PORTFOLIO</a>
                      </li>
                      <li>
                        <a href="#">BLOGS</a>
                      </li>

                      <li>
                        <a href="#">ABOUT US</a>
                      </li>
                      <li>
                        <a href="#">CONTACT US</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

  );
};
