import React, { useRef, useState } from "react";
import one from "../../../assets/OurServicesPic/Mask group (1).png";
import two from "../../../assets/OurServicesPic/Mask group-1.png";
import three from "../../../assets/OurServicesPic/Mask group.png";
import four from "../../../assets/OurServicesPic/Mask group-2.png";
import five from "../../../assets/OurServicesPic/Mask group-3.png";
import six from "../../../assets/OurServicesPic/Mask group-4.png";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import img1 from '../../../assets/ISTITCHDIGITIZING (4)/Mask group.png';
import img2 from '../../../assets/ISTITCHDIGITIZING (4)/Mask group-1.png';
import img3 from '../../../assets/ISTITCHDIGITIZING (4)/Mask group-2.png';
import img4 from '../../../assets/ISTITCHDIGITIZING (4)/Mask group-3.png';
import img5 from '../../../assets/ISTITCHDIGITIZING (4)/Mask group-4.png';
import img6 from '../../../assets/ISTITCHDIGITIZING (4)/Mask group5.png';


export const OurServices: React.FC = () => {
  interface Services {
    id: number;
    image: string;
    hoverImage: string; // New field for hover image
    heading: string;
    paragraph: string;
    btn: string;
  }

  const data: Services[] = [
    {
      id: 1,
      image: one,
      hoverImage: img1, // Hover image
      heading: "Embroidery Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to...",
      btn: "Read More",
    },
    {
      id: 2,
      image: two,
      hoverImage: img2, // Hover image
      heading: "Vector Art Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to...",
      btn: "Read More",
    },
    {
      id: 3,
      image: three,
      hoverImage: img3, // Hover image
      heading: "Appliue Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to. tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to..",
      btn: "Read More",
    },
    {
      id: 4,
      image: four,
      hoverImage: img4, // Hover image
      heading: "Jacket Back Digitizing",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to. tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to..",
      btn: "Read More",
    },
    {
      id: 5,
      image: five,
      hoverImage: img5, // Hover image
      heading: "Hot & Cap Embroidery",
      paragraph:
        "In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to...",
      btn: "Read More",
    },
    {
      id: 6,
      image: six,
      hoverImage: img6, // Hover image (can change accordingly)
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
        className="absolute left-0 top-[65%] transform -translate-y-1/2 bg-white rounded-full w-[21px] h-[42px] flex justify-center items-center md:hidden"
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
            hoverImage={service.hoverImage} // Pass hover image
            heading={service.heading}
            paragraph={service.paragraph}
            btn={service.btn}
          />
        ))}
      </div>

      {/* Right Scroll Button */}
      <div
        onClick={scrollRight}
        className="absolute right-1 top-[65%] transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg w-[21px] h-[42px] flex justify-center items-center md:hidden"
      >
        <MdOutlineKeyboardArrowRight size={30} />
      </div>
    </div>
  );
};

interface OurServicesItemProps {
  image: string;
  hoverImage: string; // New prop for hover image
  heading: string;
  paragraph: string;
  btn: string;
}

export const OurServicesItem: React.FC<OurServicesItemProps> = ({
  image,
  hoverImage,
  heading,
  paragraph,
  btn,
}) => {
  const [currentImage, setCurrentImage] = useState(image); // State to manage the current image

  return (
    <div className="flex flex-col items-center  bg-[#F4F4F4] scrollbar-hide">
      {/* Parent div with hover gradient background */}
      <div
        className=" xs:min-w-[310px] customOne:min-w-[350px] customTwo:min-w-[375px] customThree:min-w-[390px] customFour:min-w-[320px] customOne:bg-black xl:w-[332px] md:min-w-[357px] customFive:min-w-[375px] md:h-[350px]  xl:min-w-[400px] lg:min-w-full lg:min-h-[43px] overflow-y-hidden bg-gradient-to-b from-customGold1 via-customGold2 to-customWhite flex flex-col justify-center items-center px-7 gap-1 rounded-3xl pt-8 group hover:bg-gradient-to-b hover:from-[#2850AA] hover:via-[#2850AA] hover:to-[#102044] pb-5 "
        onMouseEnter={() => setCurrentImage(hoverImage)} // Change image on hover
        onMouseLeave={() => setCurrentImage(image)} // Reset image on mouse leave
      >
        {/* Image with hover effect */}
        <div className="w-[88px] h-[88px] ">
          <img
            src={currentImage} // Use currentImage from state
            className="w-full h-full object-cover"
            alt="Our Services"
          />
        </div>

        {/* Heading */}
        <h2 className="text-[24px] lg:text-[21px] font-extrabold text-[#000000] group-hover:text-white xs:text-lg">
          {heading}
        </h2>

        {/* Paragraph */}
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
