import React from 'react';
import { FiMaximize } from 'react-icons/fi';

interface IProps {
  id: number;
  image: string;
  isFullscreen: boolean;
  toggleFullscreen: (id: number) => void;
}

export const DesignItem: React.FC<IProps> = ({
  id,
  image,
  isFullscreen,
  toggleFullscreen
}) => {
  return (
    <div
      className={`flex flex-col items-center ${
        isFullscreen
          ? 'fixed inset-0 z-50 w-[80%] h-[80%]'
          : 'relative w-[300px] h-[300px]'
      }`}
    >
      <div className="overflow-hidden flex flex-col justify-center items-center relative w-full h-full">
        <img
          src={image}
          className={`object-cover transition-all duration-300 ${
            isFullscreen ? 'w-full h-full' : 'w-full h-auto'
          }`}
          alt="Our Services"
        />
        <button
          onClick={() => toggleFullscreen(id)}
          className="absolute top-7 right-2 bg-white p-1 rounded-full shadow-md"
        >
          <FiMaximize className="text-black" size={24} />
        </button>
      </div>
    </div>
  );
};
