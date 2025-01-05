import React from 'react';

import ExpertTeam from '../../../assets/Pricing/expertTeam.png'
import FastTurnaround from '../../../assets/pricing/fastTurnAround.png';
import PaymentFlexibility from '../../../assets/pricing/paymentFlexibility.png';
import CustomerSupport from '../../../assets/pricing/customerSupport.png';
import KeyHighlights from '../../../assets/pricing/keyHighlights.png';

const highlightsData = [
  {
    icon: ExpertTeam,
    title: 'Expert Team',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis fuga ratione at modi fugit ea dolores delectus perspiciatis ducimus.'
  },
  {
    icon: FastTurnaround,
    title: 'Fast Turnaround',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis fuga ratione at modi fugit ea dolores delectus perspiciatis ducimus.'
  },
  {
    icon: PaymentFlexibility,
    title: 'Payment Flexibility',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis fuga ratione at modi fugit ea dolores delectus perspiciatis ducimus.'
  },
  {
    icon: CustomerSupport,
    title: '24/7 Customer Support',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis fuga ratione at modi fugit ea dolores delectus perspiciatis ducimus.'
  }
];

export const Highlight: React.FC = () => {
  return (
    <div className="bg-lightGray flex flex-col md:flex-row justify-between w-full h-full pt-10 px-4 md:px-10 xl:px-24">
      <div className="xl:w-[900px] xl:h-[406px]">
        <img
          src={KeyHighlights}
          alt="Highlight"
          className="object-cover w-full h-[360px] md:h-full"
        />
      </div>

      <div className="w-full ml-0 md:ml-5">
        <h1 className="text-3xl font-bold my-10 md:text-[40px] text-center">
          Key Highlights
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlightsData.map((highlight, index) => (
            <div key={index} className="flex space-x-4">
              <img
                src={highlight.icon}
                className="md:w-[50px] w-12 h-12 md:h-[50px]"
              ></img>

              <div>
                <h1 className="text-[24px] font-semibold">{highlight.title}</h1>
                <p className="text-[16px]">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
