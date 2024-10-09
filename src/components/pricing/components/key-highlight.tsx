import React from 'react';
import img1 from '../../../assets/ISTITCHDIGITIZING (6)/Mask group-1.png'
import img2 from '../../../assets/ISTITCHDIGITIZING (6)/Mask group-2.png'
import img3 from '../../../assets/ISTITCHDIGITIZING (6)/Mask group-3.png'
import img4 from '../../../assets/ISTITCHDIGITIZING (6)/Mask group.png'


// Array of highlights data
const highlightsData = [
  {
    icon:img1,
    title: 'Expert Highlight 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis fuga ratione at modi fugit ea dolores delectus perspiciatis ducimus.',
  },
  {
    icon: img4,
    title: 'Fast Turnaround',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis fuga ratione at modi fugit ea dolores delectus perspiciatis ducimus.',
  },
  {
    icon: img2,
    title: 'Payment Flexiblity',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis fuga ratione at modi fugit ea dolores delectus perspiciatis ducimus.',
  },
  {
    icon:img3,
    title: '24/7 Customer Support',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis fuga ratione at modi fugit ea dolores delectus perspiciatis ducimus.',
  },
];

const Highlights: React.FC = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-between w-full h-full  xl:px-[90px] mt-10 px-7">
      {/* 40% Image Div */}
      <div className="xl:w-[900px] xl:h-[406px]  ">
        <img
          src="https://images.pexels.com/photos/28763352/pexels-photo-28763352/free-photo-of-child-engaged-with-tablet-indoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Highlight"
          className="object-cover w-full h-[360px] md:h-full"
        />
      </div>

      {/* 60% Content Div */}
      <div className="w-full ml-5 bg-white">
        <h1 className="text-3xl font-bold my-10 md:text-[40px] text-center">Key Highlights</h1>

        {/* Grid Container for Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlightsData.map((highlight, index) => (
            <div key={index} className="flex space-x-4">
                <img src={highlight.icon} className='md:w-[50px] w-12 h-12 md:h-[50px]'></img>
         
              <div>
                <h1 className="text-[24px] font-semibold">{highlight.title}</h1>
                <p className='text-[16px]'>{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
