import React from 'react';
import { FaStar } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './App.css'; // Ensure to import your custom CSS for the dots

const OurClient: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: React.ReactNode) => (
      <ul className="slick-dots flex justify-center space-x-2 mt-4">{dots}</ul>
    ),
    customPaging: () => (
      <button className="w-4 h-4 rounded-full bg-black transition-all duration-300 ease-in-out" /> // Button for custom paging
    ),
  };

  const clientData = [
    {
      id: 1,
      name: "John Doe",
      imageUrl: "https://s3-alpha-sig.figma.com/img/dd3d/c693/458722dc21ff27633fae3c950bbcf0b7?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TEPBNIzThS9kMUku06v8wdXAYFn2fU3EI8mUG5JTdEAcUjuGvZeq~ujvvaPnSfngLBu17-nIuAiu0hOeCcb2yZ9xoE7colOw3BF9eHcvmp4rDRdJb1kpM~zdLPIf9ZPjIwpp2lTEDTyPqxVj695CFxkYzvt6EhRZ~OAO6OhASi5rBGOR7Z2~7xi98ipf~UqdxFkBWyprIPWpAbY~lSTLp~ISRKtksE3mOSIy-x5-wQ3U5~yy5qA-KxqQhjh1Lxws0efKq7WAS9NggECESqZU45zcwYvL9q8~92xm-0cAcVnlTcddRTemvhQu0NFt9GEiZOiXkA~-z70kB7hDZ~kJjQ__",
      description: "John is a valued client who has worked with us for over five years, providing positive feedback.",
    },
    {
      id: 2,
      name: "Jane Smith",
      imageUrl: "https://s3-alpha-sig.figma.com/img/dd3d/c693/458722dc21ff27633fae3c950bbcf0b7?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TEPBNIzThS9kMUku06v8wdXAYFn2fU3EI8mUG5JTdEAcUjuGvZeq~ujvvaPnSfngLBu17-nIuAiu0hOeCcb2yZ9xoE7colOw3BF9eHcvmp4rDRdJb1kpM~zdLPIf9ZPjIwpp2lTEDTyPqxVj695CFxkYzvt6EhRZ~OAO6OhASi5rBGOR7Z2~7xi98ipf~UqdxFkBWyprIPWpAbY~lSTLp~ISRKtksE3mOSIy-x5-wQ3U5~yy5qA-KxqQhjh1Lxws0efKq7WAS9NggECESqZU45zcwYvL9q8~92xm-0cAcVnlTcddRTemvhQu0NFt9GEiZOiXkA~-z70kB7hDZ~kJjQ__",
      description: "Jane has been a loyal customer, always appreciating our services.",
    },
    {
      id: 3,
      name: "Michael ",
      imageUrl: "https://s3-alpha-sig.figma.com/img/dd3d/c693/458722dc21ff27633fae3c950bbcf0b7?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TEPBNIzThS9kMUku06v8wdXAYFn2fU3EI8mUG5JTdEAcUjuGvZeq~ujvvaPnSfngLBu17-nIuAiu0hOeCcb2yZ9xoE7colOw3BF9eHcvmp4rDRdJb1kpM~zdLPIf9ZPjIwpp2lTEDTyPqxVj695CFxkYzvt6EhRZ~OAO6OhASi5rBGOR7Z2~7xi98ipf~UqdxFkBWyprIPWpAbY~lSTLp~ISRKtksE3mOSIy-x5-wQ3U5~yy5qA-KxqQhjh1Lxws0efKq7WAS9NggECESqZU45zcwYvL9q8~92xm-0cAcVnlTcddRTemvhQu0NFt9GEiZOiXkA~-z70kB7hDZ~kJjQ__",
      description: "Michael consistently recommends us to his peers, making him a great client.",
    },
  ];

  return (
      <div className=' bg-[#F4F4F4]'>
        <h1 className='text-center py-6 text-[32px] font-semibold'>Hear From Our Clients</h1>
    <div className="relative bg-white  rounded-lg p-6 w-96 h-92">
      <Slider {...sliderSettings}>
        {clientData.map((client) => (
          <div key={client.id}>
            <div className="flex flex-col items-center w-18 h-18">
              {/* Circle Image */}
              <img
                src={client.imageUrl}
                alt="Client"
                className="w-[80px] h-[80px] rounded-full object-cover"
              />

              {/* Client Name */}
              <h3 className="mt-4 text-center font-semibold text-gray-800 w-20 h-7">
                {client.name}
              </h3>

              {/* Five Stars */}
              <div className="flex justify-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-yellow-400 w-8 h-8 px-1" />
                ))}
              </div>

              {/* Description */}
              <p className="mt-4 text-center text-gray-600 w-86 h-16 text-base">
                {client.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default OurClient;
