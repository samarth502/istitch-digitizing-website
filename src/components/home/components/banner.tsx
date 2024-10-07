import React from "react";

export const Banner: React.FC = () => {
  return (
    <div className=" xl:pl-20  pt-6 bg-[rgb(244,244,244)] flex justify-between items-center lg:flex-row flex-col  w-full ;
  ">

      <div className="flex flex-col  lg:gap-10 gap-5  xl:w-[60%] w-full px-4">
        <div className="w-full">
          <h1 className="font-bold text-[32px]">Welcome to   <span className="text-[#D0A038] text-3xl font-bold text-justify">
            Istitch Digitizing
          </span> </h1>

        
        </div>
        <h2 className="text-md font-semibold text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eius
          natus odio consectetur adipisicing elit Lorem ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, excepturi! adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nobis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ea?
        </h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          voluptas modi saepe ex at repreh Lorem ipsum dolor sit., eveniet,
          provident  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia corrupti voluptatibus illo, provident minus voluptatem deleniti soluta pariatur dignissimos eos!       </p>
        <button className="bg-[#D0A038] text-white px-3  w-[155px] h-[37px] text-[20px] font-semibold rounded-full text-center hover:bg-[#102044] hover:text-white">
          Get Started
        </button>
      </div>

      <div className=" mt-3 lg:w-[489px] lg:h-[400px] w-full h-full ">
        <img className="w-full h-full"
          src="https://s3-alpha-sig.figma.com/img/5e89/4d2d/2c98d3b3dcf05a7177350b1f72e010e7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fivU-A4kuo8HU8HFn9qDDOxRU9uh5gSwlkhwvKTWeQhWIxbs6fs1i3LmCPFjDRD8paG~EQTxBHizvjXS0jTYt3L4YfnXBZbjVom17m-bvYCGJGS6BfQ8MII9gTxIvCqqWjdnurrqPAPBuAk8gmw3Xoc~y-AYjjY1lGzrexZexeQwY0Oo~zqNRiqwMmA3RG1x9bnamMTA-0lPjmkOH4h6~OIFprwiKr4i5p1ndzHyjKMOgFz3v0oMAsvWFXsHCrdIXvD6smciZAGgVWZxyp97hm4UUGJCKHXSti~6L1jXQ5doJ1Gcy3SpyqPLud3D8~Rnh~WIj2ciE-sejdV72w~e8g__"
          alt=""
        />
      </div>
    </div>
  );
};
