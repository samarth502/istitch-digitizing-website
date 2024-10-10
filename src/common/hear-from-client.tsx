import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Avatar from '../assets/common/avatar.png';

const clientData = [
  {
    id: 1,
    name: 'John Doe',
    imageUrl: Avatar,
    description:
      'John is a valued client who has worked with us for over five years, providing positive feedback.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    imageUrl: Avatar,
    description:
      'Jane has been a loyal customer, always appreciating our services.'
  },
  {
    id: 3,
    name: 'Michael',
    imageUrl: Avatar,
    description:
      'Michael consistently recommends us to his peers, making him a great client.'
  }
];

export const HearFromClient: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="bg-lightGray overflow-hidden py-20 flex flex-col justify-center items-center px-4 md:px-10 xl:px-24">
      <h1 className="text-center py-6 text-[32px] font-semibold">
        Hear From Our Clients
      </h1>
      <div className="flex justify-center items-center w-full">
        <div className="relative bg-white rounded-lg py-6 w-full pb-10">
          {/* Testimonial Content */}
          <div className="flex flex-col items-center transition-transform duration-500 ease-in-out transform">
            {/* Circle Image */}
            <img
              src={clientData[activeSlide].imageUrl}
              alt={`${clientData[activeSlide].name}'s feedback`}
              className="w-[80px] h-[80px] rounded-full object-cover"
            />
            {/* Client Name */}
            <h3 className="mt-4 text-center font-semibold text-gray-800">
              {clientData[activeSlide].name}
            </h3>
            {/* Five Stars */}
            <div className="flex justify-center mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-yellow-400 w-5 h-5" />
              ))}
            </div>
            {/* Description */}
            <p className="mt-4 text-center text-gray-600 text-base xs:px-0">
              {clientData[activeSlide].description}
            </p>
          </div>

          {/* Custom Dots */}
          <div className="flex justify-center space-x-2 mt-5">
            {clientData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-4 h-4 rounded-full ${
                  activeSlide === index
                    ? 'bg-gray-800'
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
