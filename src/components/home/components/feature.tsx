import React from 'react';

import AfterSale from '../../../assets/home/feature/afterSale.png';
import RobustQuality from '../../../assets/home/feature/robustQuality.png';
import Artist from '../../../assets/home/feature/artist.png';
import FastTurnaround from '../../../assets/home/feature/fastTurnaround.png';

export const Feature: React.FC = () => {
  return (
    <>
      <div className=" bg-lightGray px-4 md:px-10 xl:px-24 pt-14  ">
        <h1 className="text-center font-semibold text-4xl ">Features</h1>
        <div className="flex md:flex-row flex-col justify-between items-center  ">
          <div className="flex flex-row gap-5 md:w-[50%]  ">
            <div className="flex flex-col gap-5">
              <img src={Artist} className=" w-[40px] h-[40px]" alt="" />
              <img src={RobustQuality} className=" w-[40px] h-[40px]" alt="" />
              <img src={AfterSale} className=" w-[40px] h-[40px]" alt="" />
              <img src={FastTurnaround} className=" w-[40px] h-[40px]" alt="" />
            </div>

            <div className="flex flex-col gap-7 justify-center ">
              <h2 className="text-[22px] font-semibold text-black">
                Experienced Artists
              </h2>
              <h2 className="text-[22px] font-semibold text-black">
                Robust Quality Assurance{' '}
              </h2>
              <h2 className="text-[22px] font-semibold text-black">
                After Sales Services
              </h2>
              <h2 className="text-[22px] font-semibold text-black">
                Fast Turnaround
              </h2>
            </div>
          </div>

          <div className=" md:w-[50%] px-8 md:px-0 mt-5">
            <img
              className="w-full h-full"
              src="https://s3-alpha-sig.figma.com/img/a2cf/e861/ce8d7fc603acf80b28aa90b7fedcad87?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GQK2p0Efrj5uLUqoqFNfcrae6oYlKIRdWm77zYaxYv96yrir0-Kl9Igs5o8muaXvvlaMVgfGpHyM1LDtxT7AuUS4MYLpnVW3yAmCGEvyfePWMkrZhNPESavzZUT27Z0gJkd6DD3oF2CV6iFl64yvYdPxFE~gzmQVcUk5ZagFchrrOmXgyiYbllEwqMHRwx0-9azoj1-iwdnk-Iye5RfFb7YBTvvckfsIL9Lc5jdawC6ymRCAZrX1x0WVruecbx-NGCS08VK-e-2wCKSv9jb-6m1VRw4gh--eV3rMC9~GuhY07moK0bnOxdCCeDBPTp2tQoxh28MTYzWAAO2eI3QOgg__"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
