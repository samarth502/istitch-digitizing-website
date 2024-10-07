import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export const OurDesign: React.FC = () => {
  interface Services {
    id: number;
    image: string;
  }

  // Array of images
  const images: Services[] = [
    {
      id: 1,
      image: "https://s3-alpha-sig.figma.com/img/3971/d9bd/12dc8fc7a9d63325bf4192229fc52ce5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-de6C9AzZsiYJhhoSdyHF6cDQdWRovS3sGnyqGUB0Y3Rqdk0IiovFxHpHEm8rwWOvu4vfqOMJgkwRj~UAJ1Iq7JKvSEB~Ph~24ksF7kOHEp6slsYcMbMwaMToCG0uEu44bb6Fw83jzJj06wJ2DjXGobYKXulWWfzqmR3zKyb~f721tiOLclLxlDoVTP3hghj9gyqxnBuOqZZ5RZWT0juI4uv8cl2mSAl81kB5Htf~-cLLbSyeKYsuR02lxfJxAaLpAcmV9glDLaz57aAtPdhelm8hE8e-BUIDAD55m8BnRWeEZ0QErjR8682xJLxClnRTtUbCyKtTdGDY1dZI4xZg__",
    },
    {
      id: 2,
      image: "https://s3-alpha-sig.figma.com/img/3971/d9bd/12dc8fc7a9d63325bf4192229fc52ce5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-de6C9AzZsiYJhhoSdyHF6cDQdWRovS3sGnyqGUB0Y3Rqdk0IiovFxHpHEm8rwWOvu4vfqOMJgkwRj~UAJ1Iq7JKvSEB~Ph~24ksF7kOHEp6slsYcMbMwaMToCG0uEu44bb6Fw83jzJj06wJ2DjXGobYKXulWWfzqmR3zKyb~f721tiOLclLxlDoVTP3hghj9gyqxnBuOqZZ5RZWT0juI4uv8cl2mSAl81kB5Htf~-cLLbSyeKYsuR02lxfJxAaLpAcmV9glDLaz57aAtPdhelm8hE8e-BUIDAD55m8BnRWeEZ0QErjR8682xJLxClnRTtUbCyKtTdGDY1dZI4xZg__",
    },
    {
      id: 3,
      image: "https://s3-alpha-sig.figma.com/img/3971/d9bd/12dc8fc7a9d63325bf4192229fc52ce5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-de6C9AzZsiYJhhoSdyHF6cDQdWRovS3sGnyqGUB0Y3Rqdk0IiovFxHpHEm8rwWOvu4vfqOMJgkwRj~UAJ1Iq7JKvSEB~Ph~24ksF7kOHEp6slsYcMbMwaMToCG0uEu44bb6Fw83jzJj06wJ2DjXGobYKXulWWfzqmR3zKyb~f721tiOLclLxlDoVTP3hghj9gyqxnBuOqZZ5RZWT0juI4uv8cl2mSAl81kB5Htf~-cLLbSyeKYsuR02lxfJxAaLpAcmV9glDLaz57aAtPdhelm8hE8e-BUIDAD55m8BnRWeEZ0QErjR8682xJLxClnRTtUbCyKtTdGDY1dZI4xZg__",
    },
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scroll functionality
  const scrollLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative bg-[#F4F4F4]">
      <h1 className="text-4xl pt-9 pb-4 font-semibold  text-center ">Our Design</h1>
      <h2 className="text-xl my-5 font-semibold  text-center absolute right-5 top-16">View All</h2>

      {/* Left Scroll Button */}
      <div
        onClick={scrollLeft}
        className="absolute left-2 top-[65%] transform -translate-y-1/2   bg-white rounded-full  w-[21px] h-[42px] flex justify-center items-center"
      >
        <span>
        <MdOutlineKeyboardArrowLeft className=""size={30}/>
        </span>
      </div>

      {/* Scrollable Container */}
      <div className="flex justify-center relative ">
        <div className=" flex-shrink-0 md:my-5 lg:px-3 m-auto w-[345px] h-[292px] mt-6 px-5">
          <div className="w-[32px] h-[32px] absolute top-7 right-10">
            <img className="w-full h-full" src="https://s3-alpha-sig.figma.com/img/77ab/e0ba/6ea563868ed1159702b12a005a7b7b68?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cDzI-t6zpQZMO7d0e48ka4i72KZzpFDFJhqgHjpFpUEGVj6TGvlY-mQ97tBb8pH4A5PqcuhRisH41lCDjj6yjYcCXU-pzvbyuSh4dT~lH8LMveJb4xt2xwUPs9Y9winluKB~TRX8pTqPumKLtwDhJC4h8qxUYf0bKA4oNvtei--uuBcCu6kflYIbEE8Dquev4ZKntDtPY82HIWbIVM11XpFRpyI6ZfB3WA1At6amQsnPLiA4KQsqDHq2DyVpp79Bl8-fvVSqbG7oULGbZjUs~klX77JTGcp2017-7WBBbGH6k6UL5e-fnJltcdDufHcKojDGMBuIkDF-pui1HjuSTg__"/>
          </div>
          {/* Dynamically set the image based on currentImageIndex */}
          <img
            className="w-full h-full"
            src={images[currentImageIndex].image}
            alt="Design"
          />
        </div>
      </div>

      {/* Right Scroll Button */}
      <div
        onClick={scrollRight}
        className="absolute right-3 top-[65%] transform -translate-y-1/2 z-10  bg-white rounded-full shadow-lg w-[21px] h-[42px] flex justify-center items-center"
      >
        <span>
         <MdOutlineKeyboardArrowRight size={30} />
         </span>

      </div>
    </div>
  );
};
