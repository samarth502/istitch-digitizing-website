import { useState } from 'react';

interface IProps {
  image: string;
  hoverImage: string;
  heading: string;
  paragraph: string;
  btn: string;
}

export const ServiceItem: React.FC<IProps> = ({
  image,
  hoverImage,
  heading,
  paragraph,
  btn
}) => {
  const [currentImage, setCurrentImage] = useState(image);

  return (
    <div className="flex flex-col items-center">
      <div
        className="xs:min-w-[255px] custom412:min-w-[324px] custom375:min-w-[287px] custom414:min-w-[326px] custom390:min-w-[302px] custom430:min-w-[342px] custom360:min-w-[272px] lg:min-w-[1px]   custom540:min-w-[452px] md:min-w-[100px]   overflow-hidden bg-gradient-to-b from-customGold1 via-customGold2 to-customWhite flex flex-col justify-center items-center px-7 gap-5 rounded-3xl pt-8 group hover:bg-gradient-to-b hover:from-[#2850AA] hover:via-[#2850AA] hover:to-[#102044] pb-5 transition-all duration-300"
        onMouseEnter={() => setCurrentImage(hoverImage)}
        onMouseLeave={() => setCurrentImage(image)}
      >
        <div className="w-[88px] h-[90px]">
          <img
            src={currentImage}
            className="w-full h-full object-cover transition-all duration-300"
            alt="Our Services"
          />
        </div>
        <h2 className="md:text-[24px] text-lg font-extrabold text-[#000000] group-hover:text-white lg:text-xl custom540:text-[28px] ">
          {heading}
        </h2>
        <p className="text-[16px] text-black text-justify group-hover:text-white">
          {paragraph}
        </p>
        <div className="w-full flex justify-end">
          <button className="bg-[#D0A038] text-white w-[140px] h-[40px] rounded-full text-[20px] hover:bg-[#102044] hover:text-white transition-colors duration-300">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};
