import BannerItemImage from '../../../assets/contact-us/banner-item.png';

export const Banner: React.FC = () => {
  return (
    <div className="px-4 md:px-10 xl:px-24 py-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8 lg:pt-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="text-md md:text-lg leading-relaxed text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt velit nec turpis accumsan. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={BannerItemImage}
            alt="Support Team"
            className="w-full lg:max-w-md h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};
