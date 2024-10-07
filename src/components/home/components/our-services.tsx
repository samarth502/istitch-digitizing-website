import React, { useRef } from "react";
import one from "../../../assets/OurServicesPic/Mask group (1).png";
import two from "../../../assets/OurServicesPic/Mask group-1.png";
import three from "../../../assets/OurServicesPic/Mask group.png";
import four from "../../../assets/OurServicesPic/Mask group-2.png";
import five from "../../../assets/OurServicesPic/Mask group-3.png";
import six from "../../../assets/OurServicesPic/Mask group-4.png";
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
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to...",
      btn: "Read More",
    },
    {
      id: 2,
      image: two,
      heading: "Vector Art Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to...",
      btn: "Read More",
    },
    {
      id: 3,
      image: three,
      heading: "Appliue Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to. tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to..",
      btn: "Read More",
    },
    {
      id: 4,
      image: four,
      heading: "Jacket Back Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to. tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to..",
      btn: "Read More",
    },
    {
      id: 5,
      image: five,
      heading: "Hot & Cap Embroidery ",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to...",
      btn: "Read More",
    },
    {
      id: 6,
      image: six,
      heading: "Logo Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to. tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to..",
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
    <div className="relative bg-[#F4F4F4] pt-32">
      <h1 className="text-4xl font-semibold text-center pb-10">Our Services</h1>

      {/* Left Scroll Button */}
      <div
        onClick={scrollLeft}
        className="absolute left-0 top-[65%] transform -translate-y-1/2   bg-white rounded-full  w-[21px] h-[42px] flex justify-center items-center md:hidden"
      >
        <MdOutlineKeyboardArrowLeft size={30} />
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-5 px-5 scrollbar-hide "
      >
        {data.map((service) => (
          <OurServicesItem
            key={service.id}
            image={service.image}
            heading={service.heading}
            paragraph={service.paragraph}
            btn={service.btn}
          />
        ))}
      </div>

      {/* Right Scroll Button */}
      <div
        onClick={scrollRight}
        className="absolute right-1 top-[65%] transform -translate-y-1/2 z-10  bg-white rounded-full shadow-lg w-[21px] h-[42px] flex justify-center items-center md:hidden"
      >
        <MdOutlineKeyboardArrowRight size={30} />
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
    <div className="flex flex-col items-center min-w-[332px] sm:min-w-[332px] xs:min-w-[332px]  bg-[#F4F4F4] scrollbar-hide ">
      <div className="xl:w-[332px] xl:h-[422px] lg:w-[290px] lg:h-[430px] overflow-y-hidden  bg-gradient-to-b from-customGold1 via-customGold2 to-customWhite flex flex-col justify-center items-center px-7 gap-1 hover:bg-gradient-to-b  rounded-3xl pt-8 ">
        <div className="w-[88px] h-[88px] border-4 border-transparent">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt="Our Services"
          />
        </div>
        <h2 className="text-[24px] lg:text-[21px] font-extrabold text-[#000000] group-hover:text-white">
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
