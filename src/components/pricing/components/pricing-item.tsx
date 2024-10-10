import UnionImage from '../../../assets/pricing/union.png';

const pricingData = [
  {
    id: 1,
    title: 'Lorem ipsum 1',
    price: '$9',
    description: 'Lorem ipsum dolor sit, amet conse adipisicing 1.',
    details: 'Lorem ipsum dolor sit, amet conse adipisicing elit 1.',
    additional: 'Lorem ipsum dolor sit, amet consect 1.',
    moreDetails: 'Lorem ipsum dolor sit, amet consect adipisicing eliamet 1.'
  },
  {
    id: 2,
    title: 'Lorem ipsum 2',
    price: '$9',
    description: 'Lorem ipsum dolor sit, amet conse adipisicing 2.',
    details: 'Lorem ipsum dolor sit, amet conse adipisicing elit 2.',
    additional: 'Lorem ipsum dolor sit, amet consect 2.',
    moreDetails: 'Lorem ipsum dolor sit, amet consect adipisicing eliamet 2.'
  },
  {
    id: 3,
    title: 'Lorem ipsum 3',
    price: '$20',
    description: 'Lorem ipsum dolor sit, amet conse adipisicing 3.',
    details: 'Lorem ipsum dolor sit, amet conse adipisicing elit 3.',
    additional: 'Lorem ipsum dolor sit, amet consect 3.',
    moreDetails: 'Lorem ipsum dolor sit, amet consect adipisicing eliamet 3.'
  }
];

export const PricingItem: React.FC = () => {
  return (
    <div className="bg-lightGray w-full px-4 md:px-10 xl:px-24">
      <h1 className="pt-8 text-[28px] md:text-[34px] text-center md:text-left">
        Pricing
      </h1>

      {/* Map through the pricingData array */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 justify-center items-center">
        {pricingData.map((item) => (
          <div
            key={item.id}
            className="relative mb-10 w-full max-w-[320px] lg:max-w-[360px] mx-auto md:mx-0 h-auto bg-white rounded-3xl shadow-lg"
          >
            {/* Price label with image */}
            <div className="absolute -top-[10px] right-4">
              <div className="relative">
                <img
                  src={UnionImage}
                  alt="Price Icon"
                  className="w-[45px] h-[80px] md:w-[40px] md:h-[70px]"
                />
                <span className="text-white font-semibold text-xl absolute top-10 left-[6px] text-center">
                  {item.price}
                </span>
              </div>
            </div>

            {/* Pricing content */}
            <div className="bg-gradient-to-b from-goldenSand via-goldenGlow to-softSand flex flex-col justify-center px-6 py-8 gap-4 rounded-3xl">
              <h2 className="text-[24px] text-center font-bold">
                {item.title}
              </h2>
              <p className="text-[16px] text-justify text-gray-700">
                {item.description}
              </p>
              <p className="text-[17px] text-gray-800">{item.details}</p>
              <p className="text-[17px] text-gray-800">{item.additional}</p>
              <p className="text-[17px] text-gray-800">{item.moreDetails}</p>
              <div className="flex flex-row justify-center mt-4">
                <button className="bg-goldenSand text-white w-[140px] h-[40px] rounded-full text-[18px] font-medium">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
