import React from "react";
import one from "../../../assets/FeaturePic/Mask group-1.png";
import two from "../../../assets/FeaturePic/Mask group-2.png";
import three from "../../../assets/FeaturePic/Mask group-3.png";
import four from "../../../assets/FeaturePic/Mask group.png";

export const Featue: React.FC = () => {
  return (
    <>
      <div className=" bg-[#F4F4F4]  m-auto">
        <h1 className="text-center font-semibold text-4xl py-10">Features</h1>
      <div className="flex md:flex-row flex-col justify-between items-center md:px-20 ">
        <div className="flex flex-row gap-5 ">
          <div className="flex flex-col gap-3">
            <img src={one} className=" w-[40px] h-[40px]" alt="" />
            <img src={two} className=" w-[40px] h-[40px]" alt="" />
            <img src={three} className=" w-[40px] h-[40px]" alt="" />
            <img src={four} className=" w-[40px] h-[40px]" alt="" />
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-[22px] font-semibold text-black">
              Afte Sales Services
            </h2>
            <h2 className="text-[22px] font-semibold text-black">
              Robust Quality{" "}
            </h2>
            <h2 className="text-[22px] font-semibold text-black">
              Experienced Artists
            </h2>
            <h2 className="text-[22px] font-semibold text-black">
              Fast Turnaound
            </h2>
          </div>
        </div>

        <div className=" w-[350px] h-[280px] mt-8 lg:m-0 ">
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
