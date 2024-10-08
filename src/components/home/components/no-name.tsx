import React from 'react';

const NoName: React.FC = () => {
  return (
    <div className="flex flex-row gap-5 md:gap-24 p-8 lg:w-[90%] m-auto ">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-[73px] h-[54px] xl:w-[216px] md:w-[300px]  md:h-[119px] bg-[#ADADAD] border-collapse"
          ></div>
        ))}
    </div>
  );
};

export default NoName;
