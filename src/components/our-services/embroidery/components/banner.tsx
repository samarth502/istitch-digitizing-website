import BannerItemImage from '../../../../assets/services/embroidery/banner-item.png';

export const Banner: React.FC = () => {
  return (
    <div className="px-4 md:px-10 xl:px-24 py-10 bg-gradient-to-b from-goldenSand via-goldenGlow to-softSand">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-center lg:text-left text-black mb-6">
        Embroidery Digitizing
      </h2> 

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8 lg:pt-8">
          <p className="text-md md:text-lg leading-relaxed text-center lg:text-left mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt velit nec turpis.
          </p>
          <p className="text-md md:text-lg leading-relaxed text-center lg:text-left mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt velit nec turpis accumsan, sit amet ornare massa commodo.
          </p>
          <p className="text-md md:text-lg leading-relaxed text-center lg:text-left mb-4">
            Maecenas in lectus porta mi posuere pulvinar a vel dui. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          
          <p className="text-md md:text-lg leading-relaxed text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt velit nec turpis accumsan, sit amet ornare massa commodo.
          </p>
          <div className="flex justify-center lg:justify-start mt-4">
            <button className="bg-goldenSand text-white font-semibold rounded-full px-6 py-3 hover:bg-yellow-600 transition-colors">
              Get Free Quote
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img
            src={BannerItemImage}
            alt="Embroidery Digitizing"
            className="w-full lg:max-w-md h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
