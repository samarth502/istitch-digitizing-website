import React from 'react';

const Pricing: React.FC = () => {
  interface Pricing {
    id: number; // 'id' for each pricing box
    title: string;
    description: string;
    btn: string;
  }

  const data: Pricing[] = [
    {
      id: 1,
      title: "Box 1 Heading",
      description: "Some descriptive paragraph for box 1",
      btn: "Read More",
    },
    {
      id: 2,
      title: "Box 2 Heading",
      description: "Some descriptive paragraph for box 2.",
      btn: "Read More",
    },
    {
      id: 3,
      title: "Box 3 Heading",
      description: "Some descriptive paragraph for box 3.",
      btn: "Read More",
    },
  ];

  return (
    <>
    <div className='bg-[#F4F4F4]'>
    <h1 className='text-3xl text-center font-semibold
     pt-6 pb-3'>Pricing</h1>
    <div className="m-auto w-[83%] flex flex-row items-center  space-x-5 overflow-x-auto scrollbar-hide ">
        
      {data.map((box) => (
        <div key={box.id} className='w-[337px] h-[207px] bg-gradient-to-b from-customGold1 via-customGold2 to-customWhite flex flex-col gap-3 justify-center items-center min-w-full flex-shrink-0 my-4'>
          <h2 className="opacity-100 font-[DM Sans] text-[24px] font-[400] leading-[31.25px] text-left">
            {box.title} {/* Dynamic title */}
          </h2>
          <p className="opacity-100 text-[16px] font-[400] leading-[20.83px] text-center px-3">
            {box.description} {/* Dynamic description */}
          </p>
          <button className="bg-[#D0A038] text-white w-[155px] h-[37px] pb-1 rounded-full text-[20px] hover:bg-[#102044] hover:text-white">
            {box.btn} {/* Dynamic button text */}
          </button>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Pricing;
