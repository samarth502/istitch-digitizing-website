import React from 'react';

const NoName: React.FC = () => {
  return (
    <div className="flex flex-row gap-5 p-8 ">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-[73px] h-[54px] bg-[#ADADAD] border-collapse"
          ></div>
        ))}
    </div>
  );
};

export default NoName;
