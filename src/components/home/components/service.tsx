import React, { useState } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { ServiceItem } from './components/service-item';

import BlackMaskGroup from '../../../assets/home/service/blackMaskGroup.png';
import BlackMaskGroupOne from '../../../assets/home/service/blackMaskGroupOne.png';
import BlackMaskGroupTwo from '../../../assets/home/service/blackMaskGroupTwo.png';
import BlackMaskGroupThree from '../../../assets/home/service/blackMaskGroupThree.png';
import BlackMaskGroupFour from '../../../assets/home/service/blackMaskGroupFour.png';
import BlackMaskGroupFive from '../../../assets/home/service/blackMaskGroupFive.png';

import YellowMaskGroup from '../../../assets/home/service/yellowMaskGroup.png';
import YellowMaskGroupOne from '../../../assets/home/service/yellowMaskGroupOne.png';
import YellowMaskGroupTwo from '../../../assets/home/service/yellowMaskGroupTwo.png';
import YellowMaskGroupThree from '../../../assets/home/service/yellowMaskGroupThree.png';
import YellowMaskGroupFour from '../../../assets/home/service/yellowMaskGroupFour.png';
import YellowMaskGroupFive from '../../../assets/home/service/yellowMaskGroupFive.png';

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
    image: BlackMaskGroup,
    hoverImage: YellowMaskGroup,
    heading: 'Embroidery Digitizing',
    paragraph:
      'In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to...',
    btn: 'Read More'
  },
  {
    id: 2,
    image: BlackMaskGroupOne,
    hoverImage: YellowMaskGroupOne,
    heading: 'Vector Art Digitizing',
    paragraph:
      'In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to...',
    btn: 'Read More'
  },
  {
    id: 3,
    image: BlackMaskGroupFive,
    hoverImage: YellowMaskGroupFive,
    heading: 'Logo Digitizing',
    paragraph:
      'In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to. tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to..',
    btn: 'Read More'
  },
  {
    id: 4,
    image: BlackMaskGroupTwo,
    hoverImage: YellowMaskGroupTwo,
    heading: 'Applique Digitizing',
    paragraph:
      'In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to. tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to..',
    btn: 'Read More'
  },
  {
    id: 5,
    image: BlackMaskGroupThree,
    hoverImage: YellowMaskGroupThree,
    heading: 'Jacket Back Digitizing',
    paragraph:
      'In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to. tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to..',
    btn: 'Read More'
  },
  {
    id: 6,
    image: BlackMaskGroupFour,
    hoverImage: YellowMaskGroupFour,
    heading: 'Hot & Cap Embroidery',
    paragraph:
      'In today’s fast-paced, tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to tech-driven world, businesses are increasingly shifting their focus from traditional marketing methods to...',
    btn: 'Read More'
  }
];

export const OurServices: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleData =
    window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const handleNext = () => {
    if (currentIndex < data.length - visibleData) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative bg-lightGray pt-32 px-4 md:px-10 xl:px-24">
      <h1 className="text-4xl font-semibold text-center pb-10">Our Services</h1>

      {/* Carousel for Mobile Devices */}
      <div className="block sm:hidden">
        <div className="flex items-center justify-center w-full">
          <button
            onClick={handlePrev}
            className="bg-light p-2 rounded-lg h-9 w-7 shadow-md items-center"
            disabled={currentIndex === 0}
          >
            <IoIosArrowBack className="text-black" size={14} />
          </button>

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {data.map((service) => (
                <ServiceItem
                  key={service.id}
                  image={service.image}
                  hoverImage={service.hoverImage}
                  heading={service.heading}
                  paragraph={service.paragraph}
                  btn={service.btn}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="bg-light p-2 rounded-lg h-9 w-7 shadow-md items-center"
            disabled={currentIndex >= data.length - visibleData}
          >
            <IoIosArrowForward className="text-black" size={14} />
          </button>
        </div>
      </div>

      {/* Grid for Larger Devices */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((service) => (
          <ServiceItem
            key={service.id}
            image={service.image}
            hoverImage={service.hoverImage}
            heading={service.heading}
            paragraph={service.paragraph}
            btn={service.btn}
          />
        ))}
      </div>
    </div>
  );
};
