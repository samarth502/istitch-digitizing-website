import React from 'react';
import logo from '../assets/CompanyLogo/istitch-logo.png';

export const MainFooter: React.FC = () => {
  return (
    <footer className="bg-[#1F325C] relative  py-11 px-4 ">
      <div className="bg-white h-[80px] w-[168px] mb-6 flex justify-center items-center">
        <img src={logo} alt="logo" className="" />
      </div>

      <div className=" flex flex-col gap-5 ">
        <OurServices />
        <Blogs />
        <ContactUs />
      </div>
      <div className=" mt-7 border-t border-[3px] border-white my-4 "></div>
      <div className="flex flex-col  justify-between font-lato text-white ">
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
      <div className="cursor-pointer font-poppins text-sm flex flex-col ">
        <span className=" hover:text-redDarkColor md:text-sm">
          <a href="#">{'Embroidery Digitizing'}</a>
        </span>
        <span className="hover:text-redDarkColor md:text-sm">
          <a href="#">{'Vector Art'}</a>
        </span>
        <span className="hover:text-redDarkColor md:text-sm">
          <a href="#">{'Applique Digitizing'}</a>
        </span>
        <span className="hover:text-redDarkColor md:text-sm">
          <a href="#">{'Embroidery Digitizing'}</a>
        </span>
        <span className="hover:text-redDarkColor md:text-sm">
          <a href="#">{'Logo Digitinzing'}</a>
        </span>

        <span className="hover:text-redDarkColor md:text-sm">
          <a href="#">{'Jacket Back Digitizing'}</a>
        </span>

        <span className="hover:text-redDarkColor md:text-sm">
          <a href="#">{'Hat and Cap Embroidery Diigitizing'}</a>
        </span>
      </div>
    </div>
  );
};

const Blogs: React.FC = () => {
  return (
    <div className="flex flex-col text-white ">
      <h1 className="text-grayish font-lato text-lg">{'Blogs'}</h1>
      <div className="cursor-pointer font-poppins text-sm flex flex-col">
        <span className=" hover:text-redDarkColor">{'Pricing'}</span>
        <span className=" hover:text-redDarkColor">{'Portfolio'}</span>
        <span className=" hover:text-redDarkColor">{'About us'}</span>{' '}
        <span className=" hover:text-redDarkColor">{'FAQ'}</span>
      </div>
    </div>
  );
};

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col gap-1 lg:w-[50%] sm:w-full items-start text-white">
      <h1 className=" text-grayish font-lato text-lg">{'Contact Us'}</h1>
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-poppins md:text-sm">{' 9495070896'}</p>
          <p className="font-poppins md:text-sm">
            {'info@istitchdigitizing.com'}
          </p>
          <p className="font-poppins md:text-sm w-56 mt-3">
            {'B-1209 , 24K Stargaze socity , Near Marigold Lawns , Bawdhan'}
          </p>
        </div>
      </div>
    </div>
  );
};
