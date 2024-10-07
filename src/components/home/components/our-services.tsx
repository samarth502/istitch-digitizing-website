import React, { useRef } from "react";
import one from "../../../assets/OurServicesPic/Mask group (1).png";
import two from "../../../assets/OurServicesPic/Mask group-1.png";
import three from "../../../assets/OurServicesPic/Mask group.png";

import four from "../../../assets/OurServicesPic/Mask group-2.png";

import five from "../../../assets/OurServicesPic/Mask group-3.png";

import six from "../../../assets/OurServicesPic/Mask group-4.png";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export const OurServices: React.FC = () => {
  interface Services {
    id: number;
    image: string;
    heading: string;
    paragraph: string;
    btn: string;
  }

  const data: Services[] = [
    {
      id: 1,
      image: one,
      heading: "Embroidery Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to  shifting their focus from traditional marketing methods to  shifting their focus from traditional marketing methods to shifting their",
      btn: "Read More",
    },
    {
      id: 2,
      image: two,
      heading: "Vector Art Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to  shifting their focus from traditional marketing methods to  shifting their focus from traditional marketing methods to shifting their",
      btn: "Read More",
    },
    {
      id: 3,
      image: three,
      heading: "Appliue Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to  shifting their focus from traditional marketing methods to  shifting their focus from traditional marketing methods to shifting their",
      btn: "Read More",
    },

    {
      id: 4,
      image: four,
      heading: "Jacket Back Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to  shifting their focus from traditional marketing methods to  shifting their focus from traditional marketing methods to shifting their",
      btn: "Read More",
    },
    {
      id: 5,
      image: five,
      heading: "Hot & Cap Embroidery Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to  shifting their focus from traditional marketing methods to  shifting their focus from traditional marketing methods to shifting their",
      btn: "Read More",
    },
    {
      id: 5,
      image: six,
      heading: "Hot & Cap Embroidery Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to  shifting their focus from traditional marketing methods to  shifting their focus from traditional marketing methods to shifting their",
      btn: "Read More",
    },
  ];

  // Scroll functionality
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -395, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 395, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-[#F4F4F4]">
      <h1 className="text-4xl font-semibold py-6 text-center">Our Services</h1>

      {/* Left Scroll Button */}
      <div
        onClick={scrollLeft}
        className="absolute left-1 top-[55%] transform -translate-y-1/2   bg-white rounded-full  w-[21px] h-[42px] flex justify-center items-center"
      >
        <span>
        <MdOutlineKeyboardArrowLeft className=""size={30}/>
        </span>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-5 overflow-x-auto scrollbar-hide"
      >
        {data.map((service) => (
          <div
            key={service.id}
            className="min-w-full flex-shrink-0 md:my-5 lg:px-3 overflow-hidden "
          >
            <OurServicesItem
              image={service.image}
              heading={service.heading}
              paragraph={service.paragraph}
              btn={service.btn}
            />
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <div
        onClick={scrollRight}
        className="absolute right-1 top-[55%] transform -translate-y-1/2 z-10  bg-white rounded-full shadow-lg w-[21px] h-[42px] flex justify-center items-center"
      >
        <span>
         <MdOutlineKeyboardArrowRight size={30} />
         </span>

      </div>
    </div>
  );
};

interface OurServicesItemProps {
  image: string;
  heading: string;
  paragraph: string;
  btn: string;
}

export const OurServicesItem: React.FC<OurServicesItemProps> = ({
  image,
  heading,
  paragraph,
  btn,
}) => {
  return (
   <div className="flex flex-col justify-center items-center bg-[#F4F4F4]">
      <div className="w-[320px] h-[460px] bg-gradient-to-b from-customGold1 via-customGold2 to-customWhite flex flex-col justify-center items-center px-7 gap-2 hover:bg-gradient-to-b hover:from-customBlue1 hover:via-customBlue2 hover:to-customWhite rounded-3xl pt-8 group">
        <div className="w-[88px] h-[88px] border-4 border-transparent transition-all duration-300 ease-in-out group-hover:border-yellow-500 group-hover:scale-105">
          <img
            src={image}
            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:filter group-hover:brightness-200 group-hover:hue-rotate-60 group-hover:opacity-70"
            alt="Our Services"
          />
          {/* Overlay for Yellow Tint */}
          <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30 rounded-full" />
        </div>
        <h2 className="text-[24px] font-extrabold text-[#000000] group-hover:text-white">
          {heading}
        </h2>
        <p className="text-[16px] text-black text-justify group-hover:text-white">
          {paragraph}
        </p>
        <div className="w-full h-full flex justify-end">
          <button className="bg-[#D0A038] text-white w-[140px] h-[40px] rounded-full text-[20px] hover:bg-[#102044] hover:text-white">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};
