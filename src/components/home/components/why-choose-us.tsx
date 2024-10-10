import React from 'react';

import Timeliness from '../../../assets/home/choose/timeliness.png';
import HighPerformance from '../../../assets/home/choose/highPerformance.png';
import QualityControl from '../../../assets/home/choose/qualityControl.png';
import Visionary from '../../../assets/home/choose/visionary.png';

type BoxData = {
  id: number;
  heading: string;
  paragraph1: string;
  paragraph2: string;
  imageUrl: string;
};

const boxData: BoxData[] = [
  {
    id: 1,
    heading: 'Timeliness',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing sit amet ',
    paragraph2:
      'Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur amet consect adipisicing sit amet consectetur ',
    imageUrl: Timeliness
  },
  {
    id: 2,
    heading: 'High Performance',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing sit amet ',
    paragraph2:
      'Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur amet consect adipisicing sit amet consectetur Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur amet consect adipisicing sit amet consectetur  ',
    imageUrl: HighPerformance
  },
  {
    id: 3,
    heading: 'Quality Control',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing sit amet ',
    paragraph2:
      'Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur amet consect adipisicing sit amet consectetur ',
    imageUrl: QualityControl
  },
  {
    id: 4,
    heading: 'Visionary',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing sit amet  ',
    paragraph2:
      'Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur amet consect adipisicing sit amet consectetur ',
    imageUrl: Visionary
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-lightGray px-4 md:px-10 xl:px-24 pt-14">
      <h1 className="text-3xl text-center font-extrabold">Why Choose Us?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 lg:w-[85%] xl:w-[70%] lg:m-auto gap-x-8">
        {boxData.map((box) => (
          <div
            key={box.id}
            className="p-6 bg-midnightBlue rounded-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-b hover:from-goldenSand hover:via-goldenGlow hover:to-softSand text-white flex flex-col relative overflow-hidden h-[400px] hover:h-[450px]"
          >
            <div className="">
              <h2 className="text-[19px] md:text-[24px] text-center font-semibold mb-2">
                {box.heading}
              </h2>
              <p className="text-[14px] md:text-[16px] text-justify mb-2">
                {box.paragraph1}
              </p>
              <p className="text-[14px] md:text-[16px] text-justify">
                {box.paragraph2}
              </p>
            </div>

            <div className="absolute bottom-0 right-4">
              <img
                src={box.imageUrl}
                alt={box.heading}
                className="w-48 h-40 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
