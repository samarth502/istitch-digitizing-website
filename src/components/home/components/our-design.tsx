import React, {  useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

export const OurDesign: React.FC = () => {
  interface Services {
    id: number;
    image: string;
  }

  // Array of images only
  const images: Services[] = [
    { id: 1, image: "https://s3-alpha-sig.figma.com/img/3971/d9bd/12dc8fc7a9d63325bf4192229fc52ce5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-de6C9AzZsiYJhhoSdyHF6cDQdWRovS3sGnyqGUB0Y3Rqdk0IiovFxHpHEm8rwWOvu4vfqOMJgkwRj~UAJ1Iq7JKvSEB~Ph~24ksF7kOHEp6slsYcMbMwaMToCG0uEu44bb6Fw83jzJj06wJ2DjXGobYKXulWWfzqmR3zKyb~f721tiOLclLxlDoVTP3hghj9gyqxnBuOqZZ5RZWT0juI4uv8cl2mSAl81kB5Htf~-cLLbSyeKYsuR02lxfJxAaLpAcmV9glDLaz57aAtPdhelm8hE8e-BUIDAD55m8BnRWeEZ0QErjR8682xJLxClnRTtUbCyKtTdGDY1dZI4xZg__" },
    { id: 2, image: "https://s3-alpha-sig.figma.com/img/3971/d9bd/12dc8fc7a9d63325bf4192229fc52ce5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-de6C9AzZsiYJhhoSdyHF6cDQdWRovS3sGnyqGUB0Y3Rqdk0IiovFxHpHEm8rwWOvu4vfqOMJgkwRj~UAJ1Iq7JKvSEB~Ph~24ksF7kOHEp6slsYcMbMwaMToCG0uEu44bb6Fw83jzJj06wJ2DjXGobYKXulWWfzqmR3zKyb~f721tiOLclLxlDoVTP3hghj9gyqxnBuOqZZ5RZWT0juI4uv8cl2mSAl81kB5Htf~-cLLbSyeKYsuR02lxfJxAaLpAcmV9glDLaz57aAtPdhelm8hE8e-BUIDAD55m8BnRWeEZ0QErjR8682xJLxClnRTtUbCyKtTdGDY1dZI4xZg__" },
    { id: 3, image: "https://s3-alpha-sig.figma.com/img/3971/d9bd/12dc8fc7a9d63325bf4192229fc52ce5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-de6C9AzZsiYJhhoSdyHF6cDQdWRovS3sGnyqGUB0Y3Rqdk0IiovFxHpHEm8rwWOvu4vfqOMJgkwRj~UAJ1Iq7JKvSEB~Ph~24ksF7kOHEp6slsYcMbMwaMToCG0uEu44bb6Fw83jzJj06wJ2DjXGobYKXulWWfzqmR3zKyb~f721tiOLclLxlDoVTP3hghj9gyqxnBuOqZZ5RZWT0juI4uv8cl2mSAl81kB5Htf~-cLLbSyeKYsuR02lxfJxAaLpAcmV9glDLaz57aAtPdhelm8hE8e-BUIDAD55m8BnRWeEZ0QErjR8682xJLxClnRTtUbCyKtTdGDY1dZI4xZg__" },
    { id: 4, image: "https://s3-alpha-sig.figma.com/img/3971/d9bd/12dc8fc7a9d63325bf4192229fc52ce5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-de6C9AzZsiYJhhoSdyHF6cDQdWRovS3sGnyqGUB0Y3Rqdk0IiovFxHpHEm8rwWOvu4vfqOMJgkwRj~UAJ1Iq7JKvSEB~Ph~24ksF7kOHEp6slsYcMbMwaMToCG0uEu44bb6Fw83jzJj06wJ2DjXGobYKXulWWfzqmR3zKyb~f721tiOLclLxlDoVTP3hghj9gyqxnBuOqZZ5RZWT0juI4uv8cl2mSAl81kB5Htf~-cLLbSyeKYsuR02lxfJxAaLpAcmV9glDLaz57aAtPdhelm8hE8e-BUIDAD55m8BnRWeEZ0QErjR8682xJLxClnRTtUbCyKtTdGDY1dZI4xZg__" },
    { id: 5, image: "https://s3-alpha-sig.figma.com/img/3971/d9bd/12dc8fc7a9d63325bf4192229fc52ce5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-de6C9AzZsiYJhhoSdyHF6cDQdWRovS3sGnyqGUB0Y3Rqdk0IiovFxHpHEm8rwWOvu4vfqOMJgkwRj~UAJ1Iq7JKvSEB~Ph~24ksF7kOHEp6slsYcMbMwaMToCG0uEu44bb6Fw83jzJj06wJ2DjXGobYKXulWWfzqmR3zKyb~f721tiOLclLxlDoVTP3hghj9gyqxnBuOqZZ5RZWT0juI4uv8cl2mSAl81kB5Htf~-cLLbSyeKYsuR02lxfJxAaLpAcmV9glDLaz57aAtPdhelm8hE8e-BUIDAD55m8BnRWeEZ0QErjR8682xJLxClnRTtUbCyKtTdGDY1dZI4xZg__" },
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
      <h1 className="text-4xl py-10 font-semibold  text-center">Our Design</h1>

      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-[65%] transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full shadow-lg "
      >
        <FaChevronLeft />
      </button>

      {/* Scrollable Container */}
      <div className="flex justify-center">
        <div className=" flex-shrink-0 md:my-5 lg:px-3 m-auto w-[345px] h-[292px]">
         <img className="w-full h-full" src="https://s3-alpha-sig.figma.com/img/3971/d9bd/12dc8fc7a9d63325bf4192229fc52ce5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-de6C9AzZsiYJhhoSdyHF6cDQdWRovS3sGnyqGUB0Y3Rqdk0IiovFxHpHEm8rwWOvu4vfqOMJgkwRj~UAJ1Iq7JKvSEB~Ph~24ksF7kOHEp6slsYcMbMwaMToCG0uEu44bb6Fw83jzJj06wJ2DjXGobYKXulWWfzqmR3zKyb~f721tiOLclLxlDoVTP3hghj9gyqxnBuOqZZ5RZWT0juI4uv8cl2mSAl81kB5Htf~-cLLbSyeKYsuR02lxfJxAaLpAcmV9glDLaz57aAtPdhelm8hE8e-BUIDAD55m8BnRWeEZ0QErjR8682xJLxClnRTtUbCyKtTdGDY1dZI4xZg__" alt="" />
        </div>
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-[65%] transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full shadow-lg"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

