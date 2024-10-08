import React, { useState } from "react";
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
      image: "https://s3-alpha-sig.figma.com/img/3971/d9bd/12dc8fc7a9d63325bf4192229fc52ce5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=czOk8YRqtllGWdcAByIyByQ56iHYzhGXOiN22KqF0befLNZ2eX8hqJKHPXOyLn-uJ87x745K8~ROtNr33ClK6DtwT4lKMTyEjcxnQWVElNko4ONwvPXHhysMZfm5-8LMXYvQ9PFbCDj1PMbch2XKiE3GyR~HtWu9pHnAh8MEYxSuakwCG1ieDSd2r9khlJ1eEA-rqOlXPwBcj8fwn4hJq3~SwuaIge2tKA2WalOj9ihzbTYqZ4e1miOcx3r~g-~xP5kwaY7zLD2OUvBGKLWXyRxs-CmDHcS6Y1jzIv1X3UZ1WUqcDgZ5KtZS2Kk8nLMIWGdxr~orhVU4lpH9NVhJOA__",
    },
    {
      id: 2,
      image: "https://s3-alpha-sig.figma.com/img/7b69/9417/1f4088c93fac9bc3f00ea3ddc8b2c647?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMBLfiCW2gXfI5VDqZVDYRdifcyvXtdLtyR95DyGzTm2072zhrCwvlB1lz6gO6n2rHxZOQMCR3iwCaZhimLo100bgj3Z5eD-qsD6a6l6vKYOxB5OPfMLyqO3Y3-6gGX5X-bYp6cErmYUE5Mb3jQEe-A~ZvRFenxB41ULmeN7b7kyFM-2U7ZN088zfAQiwVBebOrrT2Gp~BLAM54aNH9J8Cax5uKARI3GEOPhT4E5kz8ari6b2vWSkdvif6e--UHQSjPvbHuJ1gl-hSzN5MHZMBDIMe1iisYEF9L47hfP221qNJlBXdtGRnKDw3sDSZZODtTwtqzvG3pBQ3I-B8XVPg__",
    },
    {
      id: 3,
      image: "https://s3-alpha-sig.figma.com/img/3f64/943d/01e83b0142840f77ffa50c47fd20fb5a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E487FJcUimXfQfH3qcAWNUpqZAcQZqjmfmBtmYhIqZNEOR00uhsDoOvvI963AHI1gCDIZjfM2~r~M44jvG2wbW6VWQLn7KMeIpjUNeh8~7t3N8Z~yf8h7Ums1X5I5MMOsonQq9XjEQ1g3GeSq0wMbnZAgcFEprbKBAmb0ks6lymufyzCwkLhvpUKaxfWih6zgPUzYCm6Xd~H1i-3O~TnYeDSnaO7c9Cclw9CzLwN6nRCM5T9aY5YBnTM2g-Ty0AHiziwqGZ6o0A~d4vRUC-4lxepxZHLV8gKc8ZQFLpMs6nOQiCC4E98zrOhBLOlwXRYlZvmrHXLLpAKlp~GYZm6qw__",
    },
    {
      id: 4,
      image: "https://s3-alpha-sig.figma.com/img/7b69/9417/1f4088c93fac9bc3f00ea3ddc8b2c647?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMBLfiCW2gXfI5VDqZVDYRdifcyvXtdLtyR95DyGzTm2072zhrCwvlB1lz6gO6n2rHxZOQMCR3iwCaZhimLo100bgj3Z5eD-qsD6a6l6vKYOxB5OPfMLyqO3Y3-6gGX5X-bYp6cErmYUE5Mb3jQEe-A~ZvRFenxB41ULmeN7b7kyFM-2U7ZN088zfAQiwVBebOrrT2Gp~BLAM54aNH9J8Cax5uKARI3GEOPhT4E5kz8ari6b2vWSkdvif6e--UHQSjPvbHuJ1gl-hSzN5MHZMBDIMe1iisYEF9L47hfP221qNJlBXdtGRnKDw3sDSZZODtTwtqzvG3pBQ3I-B8XVPg__",
    },
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scroll functionality for mobile
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
    <div className="relative bg-[#F4F4F4] py-10">
      <h1 className="text-4xl pt-9 pb-4 font-semibold text-center">Our Design</h1>
      <h2 className="text-xl my-5 font-semibold text-center absolute  xl:right-44 xl:top-16 md:right-7 md:top-20 lg:right-24 lg:top-[80px] xs:top-24 xs:right-5">View All</h2>

      {/* Left Scroll Button */}
      <div
        onClick={scrollLeft}
        className="absolute left-2 top-[60%] transform -translate-y-1/2 z-10 bg-white rounded-full w-[21px] h-[42px] xs:flex justify-center items-center cursor-pointer md:hidden "
      >
        <MdOutlineKeyboardArrowLeft size={30} />
      </div>

      {/* Scrollable Container for Mobile */}
      <div className="flex justify-center relative m-auto w-full xs:mt-4 md:mt-0">
        <div className="flex xl:grid xl:grid-cols-4 gap-4  m-auto w-[88.9%]  lg:w-[85%] xs:w-full xs:px-3 xl:px-0 overflow-hidden ">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`flex-shrink-0 md:flex-shrink md:w-[253px] w-full md:h-[240px] ${
                index === currentImageIndex ? "block" : "hidden"
              } md:block`}
            >
              <img className="w-full h-full" src={img.image} alt={`Design ${img.id}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Scroll Button */}
      <div
        onClick={scrollRight}
        className="absolute right-3 top-[60%] transform -translate-y-1/2 z-10 bg-white rounded-full w-[21px] h-[42px] xs:flex justify-center items-center cursor-pointer md:hidden"
      >
        <MdOutlineKeyboardArrowRight size={30} />
      </div>
    </div>
  );
};
