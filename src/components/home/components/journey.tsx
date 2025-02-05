export const Journey: React.FC = () => {
  return (
    <div className="bg-midnightBlue w-full h-[280px] px-4 md:px-10 xl:px-24 flex justify-center items-center">
      <div className="flex flex-col gap-3 justify-center items-center text-white">
        <h1 className="text-[32px] font-semibold  leading-normal -tracking-tighter pt-2">
          Our Journey
        </h1>
        <p className="text-[16px] text-center  px-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore totam
          pariatur aperiam vero{' '}
        </p>
        <div className="flex flex-row xl:gap-44 md:gap-14 lg:gap-24">
          <div className=" flex flex-col px-4">
            <div className="text-[32px]">503+</div>
            <span className="text-[20px]">Lorem, ipsum.</span>
          </div>

          <div className="flex flex-col">
            <div className="text-[32px]">503+</div>
            <span className="text-[20px]">Lorem, ipsum.</span>
          </div>
          <div className="flex flex-col">
            <div className="text-[32px]">503+</div>
            <span className="text-[20px]">Lorem, ipsum.</span>
          </div>

          <div className="flex flex-col">
            <div className="text-[32px]">503+</div>
            <span className="text-[20px]">Lorem, ipsum.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
