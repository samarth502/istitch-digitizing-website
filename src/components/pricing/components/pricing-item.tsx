import logo from "../../../assets/Pricing/Union.png";

const pricingData = [
  {
    id: 1,
    title: "Lorem ipsum 1",
    price: "$9",
    description: "Lorem ipsum dolor sit, amet conse adipisicing 1.",
    details: "Lorem ipsum dolor sit, amet conse adipisicing elit 1.",
    additional: "Lorem ipsum dolor sit, amet consect 1.",
    moreDetails: "Lorem ipsum dolor sit, amet consect adipisicing eliamet 1."
  },
  {
    id: 2,
    title: "Lorem ipsum 2",
    price: "$15",
    description: "Lorem ipsum dolor sit, amet conse adipisicing 2.",
    details: "Lorem ipsum dolor sit, amet conse adipisicing elit 2.",
    additional: "Lorem ipsum dolor sit, amet consect 2.",
    moreDetails: "Lorem ipsum dolor sit, amet consect adipisicing eliamet 2."
  },
  {
    id: 3,
    title: "Lorem ipsum 3",
    price: "$20",
    description: "Lorem ipsum dolor sit, amet conse adipisicing 3.",
    details: "Lorem ipsum dolor sit, amet conse adipisicing elit 3.",
    additional: "Lorem ipsum dolor sit, amet consect 3.",
    moreDetails: "Lorem ipsum dolor sit, amet consect adipisicing eliamet 3."
  },
];

export const PricingItem: React.FC = () => {
  return (
    <div className="xl:pl-[85px] w-full  pl-5 xs:pr-5">
      <h1 className="text-[34px] p-3 -ml-2">Pricing</h1>
      
      {/* Map through the pricingData array */}
      <div className="md:grid grid-cols-3 lg:gap-10   xs:flex xs:flex-col justify-center items-center ">
      {pricingData.map((item) => (
        <div key={item.id} className="relative mb-10 md:w-[240px]  xl:w-[352px] lg:w-[290px] md:h-[462px]">
          {/* Price label with image */}
          <div className="absolute -top-[9px] right-1">
            <div className="relative">
              <img src={logo} alt="" className="w-[45px] h-[80px] md:w-[40px] md:h-[70px]" />
              <span className="text-white font-semibold text-xl absolute top-10 left-[6px] text-center">{item.price}</span>
            </div>
          </div>

          {/* Pricing content */}
          <div className="bg-gradient-to-b from-customGold1 via-customGold2 to-customWhite flex flex-col justify-center px-7 gap-4 rounded-3xl w-full py-3">
            <h1 className="text-[24px]  text-center md:text-start">{item.title}</h1>
            <p className="text-[16px] text-justify ">{item.description}</p>
            <p className="text-[17px]">{item.details}</p>
            <p className="text-[17px]">{item.additional}</p>
            <p className="text-[17px]">{item.moreDetails}</p>
            <div className="flex flex-row justify-center items-center w-full ">
            <button className="bg-[#D0A038] text-white w-[140px] h-[40px] rounded-full text-[20px] text-center">
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
