import React from 'react';
import { FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { BsTwitterX } from 'react-icons/bs';

import logo from '../assets/CompanyLogo/istitch-logo.png';

export const MainFooter: React.FC = () => {
  return (
    <footer className="bg-headerFooter py-11">
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-10 xl:px-24">
        <div className="bg-white h-[80px] w-[168px] mb-6 flex justify-center items-center">
          <img src={logo} alt="logo" className="" />
        </div>

        <>
          <OurServices />
        </>
        <>
          <QuickLinks />
        </>
        <div>
          <ContactUs />
        </div>
      </div>
      <div className="mt-3 border-t border-[3px] border-white my-4"></div>
      <div className="flex flex-col md:flex-row  justify-between font-lato text-white px-4 md:px-10 xl:px-24">
        <h4>{'Privacy Policy'}</h4>
        <h2>{'All copyright@istitchdigitilizing'}</h2>
      </div>
    </footer>
  );
};

const OurServices: React.FC = () => {
  return (
    <div className="flex flex-col text-white ">
      <h1 className="text-grayish font-lato text-lg ">{'Our Services'}</h1>
      <div className="cursor-pointer font-poppins text-sm flex flex-col gap-1 mt-4">
        <span className=" hover:text-redDarkColor md:text-sm">
          <a href="#">{'Embroidery Digitizing'}</a>
        </span>
        <span className="hover:text-redDarkColor md:text-sm">
          <a href="#">{' Vector Art Digitizing'}</a>
        </span>
        <span className="hover:text-redDarkColor md:text-sm">
          <a href="#">{'Logo Digitizing'}</a>
        </span>
        <span className="hover:text-redDarkColor md:text-sm">
          <a href="#">{'Applique Digitizing'}</a>
        </span>
        <span className="hover:text-redDarkColor md:text-sm">
          <a href="#">{'Jacket Back Digitizing'}</a>
        </span>

        <span className="hover:text-redDarkColor md:text-sm">
          <a href="#">{'Cap and Hat Embroidery Digitizing'}</a>
        </span>
      </div>
    </div>
  );
};

const QuickLinks: React.FC = () => {
  return (
    <div className="flex flex-col text-white ">
      <h1 className="xs:mt-4 lg:mt-0 text-grayish font-lato text-lg">
        {'Quick Links'}
      </h1>
      <div className="cursor-pointer font-poppins text-sm flex flex-col gap-1 mt-4">
        <span className=" hover:text-redDarkColor">{'Blogs'}</span>
        <span className=" hover:text-redDarkColor mt-2">{'Pricing'}</span>
        <span className=" hover:text-redDarkColor mt-2">{'Portfolio'}</span>
      </div>
    </div>
  );
};

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col text-white">
      <h1 className="xs:mt-4 lg:mt-0 text-grayish font-lato text-lg">
        {'Contact Us'}
      </h1>
      <div className="flex flex-col mt-4">
        <div>
          <p className="font-poppins md:text-sm">{'9495070896'}</p>
          <p className="font-poppins md:text-sm mt-2">
            {'info@istitchdigitizing.com'}
          </p>
          <p className="font-poppins md:text-sm w-56 mt-2">
            {'B-1209, 24K Stargaze society, Near Marigold Lawns, Bawdhan'}
          </p>

          <div className="xs:mt-6 xs:mb-4 md:mt-20 md:mb-6 lg:mt-28 lg:mb-4">
            <div className="flex flex-row gap-2 ">
              <Link
                to="https://www.facebook.com/profile.php?id=61560468841566"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-goldenSand  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-midnightBlue hover:border-solid hover:border-2 hover:border-goldenSand"
              >
                <FiFacebook className="w-[20px] h-[20px]" color="white" />
              </Link>
              <Link
                to="https://www.instagram.com/adhipatechnologies/"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-goldenSand text-white w-[35px] h-[35px]  flex  rounded-full justify-center items-center hover:bg-midnightBlue hover:border-solid hover:border-2 hover:border-goldenSand"
              >
                <FaInstagram className="w-[20px] h-[20px]" color="white" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/adhipa-tech/"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-goldenSand w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-midnightBlue hover:border-solid hover:border-2 hover:border-goldenSand"
              >
                <FiLinkedin className="w-[20px] h-[20px]" color="white" />
              </Link>
              <Link
                to="https://twitter.com/adhipatech"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-goldenSand w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-midnightBlue hover:border-solid hover:border-2 hover:border-goldenSand"
              >
                <BsTwitterX className="w-[15px] h-[15px]" color="white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
