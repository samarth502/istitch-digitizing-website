import ServiceItemImage from '../../../../assets/services/embroidery/service-item.png';

export const Service: React.FC = () => {
  return (
    <div className="px-4 md:px-10 xl:px-24 mt-10 py-10 bg-softSand">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Content */}
        <div className="lg:w-2/3 mb-6 lg:mb-0 lg:pr-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center lg:text-left text-black">
            Our Embroidery Digitizing Service
          </h2>
          <p className="text-md md:text-lg leading-relaxed mb-4">
            At iStitch Digitizing, we specialize in providing high-quality
            embroidery digitizing services designed to bring your creative
            visions to life. Our experienced team utilizes advanced technology
            and expert techniques to convert your artwork and designs into
            precise digitized files suitable for embroidery machines. With our
            meticulous attention to detail and commitment to quality, you can
            trust that your designs will be transformed into stunning
            embroidered pieces that stand out.
          </p>
          <p className="text-md md:text-lg leading-relaxed mb-4">
            Once we have your artwork, we carefully analyze and prepare it for
            digitization, ensuring that all elements are accurately represented.
            Our team then creates a digitized file, paying close attention to
            stitch types, densities, and the overall layout to ensure optimal
            embroidery results. After completing the digitization, we perform a
            comprehensive quality check to guarantee that every aspect meets our
            high standards before delivering the final product to you. With
            iStitch Digitizing, you can have peace of mind knowing that your
            embroidery digitizing needs are handled with professionalism and
            care.
          </p>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/3 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img
            src={ServiceItemImage}
            alt="Embroidery Service"
            className="w-full max-w-xs lg:max-w-md h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
