import React from 'react';

import DesignWithSewing from '../../../assets/home/banner/designWithSewing.png';

export const Banner: React.FC = () => {
  return (
    <div className="bg-lightGray px-4 md:px-10 xl:px-24 pt-6 flex justify-between items-center lg:flex-row flex-col w-full">
      <div className="flex flex-col md:gap-10 gap-5 xl:w-[60%] w-full">
        <div className="w-full">
          <h1 className="font-bold text-[32px]">
            Welcome to{' '}
            <span className="text-goldenSand text-3xl font-bold text-justify">
              Istitch Digitizing
            </span>{' '}
          </h1>
        </div>
        <h2 className="text-md font-semibold text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eius
          natus odio consectetur adipisicing elit Lorem ipsum dolor sit amet
          Lorem ipsum dolor
        </h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          voluptas modi saepe ex at repreh Lorem ipsum dolor sit., eveniet,
          provident Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Officia corrupti voluptatibus illo, provident minus voluptatem
          deleniti soluta pariatur dignissimos eos!{' '}
        </p>
        <button className="bg-goldenSand text-white   w-[180px] h-[37px] text-[20px] font-semibold rounded-full text-center hover:bg-[#102044] hover:text-white hover:border-solid hover:border-2 hoverL:border-indigo-600 hidden lg:block cursor-pointer">
          <a href="/contact-us">Get Free Quote</a>
        </button>
      </div>

      <div className="mt-3 xl:w-[38%] xl:h-[400px] w-full h-full ">
        <img
          className="w-full h-full object-contain"
          src={DesignWithSewing}
          alt=""
        />
      </div>
    </div>
  );
};
