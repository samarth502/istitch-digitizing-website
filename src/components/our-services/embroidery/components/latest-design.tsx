import React, { useState } from 'react';

import ArrowIcon from '../../../../assets/services/embroidery/latest-design/arrow.png';
import D1Before from '../../../../assets/services/embroidery/latest-design/d1-before.png';
import D1After from '../../../../assets/services/embroidery/latest-design/d1-after.png';
import D2Before from '../../../../assets/services/embroidery/latest-design/d2-before.png';
import D2After from '../../../../assets/services/embroidery/latest-design/d2-after.png';
import D3Before from '../../../../assets/services/embroidery/latest-design/d3-before.png';
import D3After from '../../../../assets/services/embroidery/latest-design/d3-after.png';
import D4Before from '../../../../assets/services/embroidery/latest-design/d4-before.png';
import D4After from '../../../../assets/services/embroidery/latest-design/d4-after.png';

const designs = [
  { before: D1Before, after: D1After },
  { before: D2Before, after: D2After },
  { before: D3Before, after: D3After },
  { before: D4Before, after: D4After }
];

const mobDesigns = [
  { el: D1Before },
  { el: D1After },
  { el: D2Before },
  { el: D2After },
  { el: D3Before },
  { el: D3After },
  { el: D4Before },
  { el: D4After }
];

export const LatestDesign: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexMobile, setCurrentIndexMobile] = useState(0);

  const handleNext = () => {
    setCurrentIndexMobile((prevIndex) => (prevIndex + 1) % mobDesigns.length);
  };

  const handlePrev = () => {
    setCurrentIndexMobile(
      (prevIndex) => (prevIndex - 1 + mobDesigns.length) % mobDesigns.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative px-4 md:px-10 xl:px-24 py-10">
      <h2 className="text-2xl text-center font-bold mb-4">Latest Designs</h2>
      {/* View More Button */}
      <div className="absolute top-0 right-0 xs:right-7 md:right-20 lg:right-44 mt-10 md:mt-12 xs:mt-16">
        <button
          className="text-blue-500"
          onClick={() => console.log('View More Clicked')}
        >
          View More
        </button>
      </div>

      <div className="hidden md:flex items-center justify-center gap-8">
        {/* Display images side by side for larger screens */}
        <img
          src={designs[currentIndex].before}
          alt="Before Design"
          className="w-1/3 h-auto object-cover"
        />
        <img
          src={ArrowIcon}
          alt="Arrow"
          className="w-1/6 h-auto object-contain"
        />
        <img
          src={designs[currentIndex].after}
          alt="After Design"
          className="w-1/3 h-auto object-cover"
        />
      </div>

      {/* Navigation Dots */}
      <div className="hidden md:flex justify-center mt-4 space-x-2">
        {designs.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-midnightBlue' : 'bg-softSand'
            }`}
          />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="flex md:hidden justify-center items-center mt-4">
        <button onClick={handlePrev} className="text-lg px-4">
          ❮
        </button>
        <img
          src={mobDesigns[currentIndexMobile].el}
          alt="Design"
          className="w-3/4 h-auto object-cover"
        />
        <button onClick={handleNext} className="text-lg px-4">
          ❯
        </button>
      </div>
    </div>
  );
};
