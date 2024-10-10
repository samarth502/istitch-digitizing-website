import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { DesignItem } from './components/design-item';

import D1 from '../../../assets/home/design/d1.png';
import D2 from '../../../assets/home/design/d2.png';
import D3 from '../../../assets/home/design/d3.png';

interface Services {
  id: number;
  image: string;
}

const designs: Services[] = [
  { id: 1, image: D1 },
  { id: 2, image: D2 },
  { id: 3, image: D3 }
];

export const Design: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleData, setVisibleData] = useState(1);
  const [expandedImageId, setExpandedImageId] = useState<number | null>(null);

  useEffect(() => {
    const updateVisibleData = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleData(1);
      else if (width < 1024) setVisibleData(2);
      else setVisibleData(3);
    };

    updateVisibleData();
    window.addEventListener('resize', updateVisibleData);
    return () => window.removeEventListener('resize', updateVisibleData);
  }, []);

  const handleNext = () => {
    if (currentIndex < designs.length - visibleData) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const toggleFullscreen = (id: number) => {
    setExpandedImageId(expandedImageId === id ? null : id);
  };

  return (
    <div className="relative bg-lightGray pt-20 px-4 md:px-10 xl:px-24">
      <h1 className="text-4xl font-semibold text-center pb-10">Our Designs</h1>

      <div className="block sm:hidden">
        <div className="flex items-center justify-center w-full">
          <button
            onClick={handlePrev}
            className="bg-light p-2 rounded-lg h-9 w-7 shadow-md"
            disabled={currentIndex === 0}
          >
            <IoIosArrowBack className="text-black" size={14} />
          </button>

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {designs.map((design) => (
                <div key={design.id} className="min-w-full">
                  <DesignItem
                    id={design.id}
                    image={design.image}
                    isFullscreen={expandedImageId === design.id}
                    toggleFullscreen={toggleFullscreen}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="bg-light p-2 rounded-lg h-9 w-7 shadow-md"
            disabled={currentIndex >= designs.length - visibleData}
          >
            <IoIosArrowForward className="text-black" size={14} />
          </button>
        </div>
      </div>

      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {designs.map((design) => (
          <DesignItem
            key={design.id}
            id={design.id}
            image={design.image}
            isFullscreen={expandedImageId === design.id}
            toggleFullscreen={toggleFullscreen}
          />
        ))}
      </div>
    </div>
  );
};
