import React, { useState } from 'react';

// Define the type for the box data
type BoxData = {
  id: number;
  heading: string;
  paragraph1: string;
  paragraph2: string;
  imageUrl: string;
};

// Sample data array
const boxData: BoxData[] = [
  {
    id: 1,
    heading: 'Timeliness',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing sit amet ',
    paragraph2: 'Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur amet consect adipisicing sit amet consectetur ',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/0490/00d0/1b8e175c557936e231132ac36712ff5c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ei4TQ0pulk~DsShGBX14Jkb~O3qMLunbg485snCndrSx47huih9kyug9rh8sqP930Ypej2fWAvgIdFw45QaUcRHPF6yA~7lHqEZciEBIDoNj2bDra8udqxnwvbDAbUZhuVUNhMLioQa0RGN~znUt1--cCtisJ7GcAzYDobVFdUBa42-gEJHz14ZnUgiw0qm2Vxn7w-JCNZt4MtEDLmvRXXSDKgQN0GGSqiiWKsZx0VhjHST3Dxb-SvWw3uVfuwXAeEwF0POpOEVCN5Yi8BV02IjA42G-5efel937q4LKv-3mQszh4jCXXGjJaRUkL6x7tZ5uOYEwHFIJMoyAcDR2Zg__',
  },
  {
    id: 2,
    heading: 'High Performance',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing sit amet ',
    paragraph2: 'Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur amet consect adipisicing sit amet consectetur Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur amet consect adipisicing sit amet consectetur  ',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/46ea/8e15/576f77d47ee770a8618e8f80ad37ef4b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fHj-HcFZFlo9myldfMAK0l2D0DGmJ2CQ9fo3wCEUZR28ocGRxjKsKlj49cTu2A0BUHxqijmLsP8vrSxtSrVud9bIn28UodBa72VgEb0SIJvzUvQ5WeQMzho6GYb3d53kxiy16EQPiG5iprQkzvJ9FejWTlq5mPcS8EVNFcSQ0BV5aV1TEr5Cqm5bTFHbOAeaOwjbhi7dQWD-cbH0y4Xh8pnD-H7bErltI4J-h2OIwogLuZ1vK-rI7DFt5brQ-W2r1ix8hp9crIJFzUyG2jP6O5ETdwWPQ67U7Topin6XFJiySeK7hKruth~1JR9q7zTqb93~X7it7QGhTmHoZSvoKQ__',
  },
  {
    id: 3,
    heading: 'Quality Control',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing sit amet ',
    paragraph2: 'Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur amet consect adipisicing sit amet consectetur ',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/ec20/b9d4/fb9ebb54979eed3824db36b7da59d4ba?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lZQ5UMyz~0PYdW3k-dvQMq444DZ3Nv7cKmfynFMz8~reZ4KJPVWDIwunbq0h0wcj14XIFXqFrDPFlPdTvP6ZiHhPWxiAIhpvcpAqd~KDOLIlIdPmNIYJeiuzsjvwnxirQ~LIJrOJm-2XMtPZcEnpNenUWKRhoWY-94enQ4qxO~k9c12IraQwYy-t5eiB-7cRDHdldHzGe48TAsDxCxI81MM4mqcimZtntXp8CUkV9Plvv3hrn7lPfk31gv4ZFifEsD0Wt-T8MdHakuuH57bNFG9pFrnr-3iFkRLjITpdiUD2z4qPJ9jpLqqi0~u~UbPkVrotEHdv8DnMC2k3vbc7cA__',
  },
  {
    id: 4,
    heading: 'Visionary',
    paragraph1: 'Lorem ipsum dolor sit amet consectetur adipisicing sit amet  ',
    paragraph2: 'Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur Lorem ipsum dolor sit amet consect adipisicing sit amet consectetur amet consect adipisicing sit amet consectetur ',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/0261/3077/8279fff4eb96d2cb06e51648bf03ef7e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZD~Znryg5cAS~VpQ53cqYCUbs1FZ13S14~43QTdA7OAsUSIBTPLND2K-tJUwRQhfI5LO1UGVnUGCM1n-u32i7sHh-JcV8qLWpkHeQAmqiwhULO~eGEpvh48DIuYfnNnVyxB1Awlk3AAg2aILLymxL-h0VkU5foIkbe8lrUWrq9xCDKURI~0dtcW7KNkuFjgo3erDCTQuL35x0wOFW0aW5rYQPnZEBS-2KY9BQ8DcgMsKajQjhckEqn~NKRX35LdCsQkwjlPF4s~SQNxdtqQE6KxeHNl4zXUbMX3X2ENTgYMW01wvtCHw5n0cBKCj7baV05UCBY~~bbkZgBLCU0w1AQ__',
  },
];

// Main component
export const WhyChooseUs: React.FC = () => {
  const [expandedBoxId, setExpandedBoxId] = useState<number | null>(null);

  const toggleBox = (id: number) => {
    setExpandedBoxId(expandedBoxId !== id ? id : null);
  };

  return (
    <section className='bg-[#F4F4F4] xs:px-3 lg:mx-0 pt-14'>
      <h1 className="text-3xl text-center font-extrabold ">Why Choose Us?</h1>
      <div className="grid grid-cols-2 gap-5 pt-5 lg:w-[85%] xl:w-[60%] lg:m-auto gap-x-8 ">
        {boxData.map((box) => (
          <div
            key={box.id}
            className={` transition-all duration-300 ease-in-out p-2 bg-[#102044] rounded-xl flex flex-col gap-1 relative ${expandedBoxId === box.id ? ' bg-gradient-to-b from-customGold1 via-customGold2 to-customWhite h-full  ' : ' '}`}
            onClick={() => toggleBox(box.id)}
          >
            <h2 className="text-white text-[19px] md:text-[32px] text-center xs:text-xs mt-3">{box.heading}</h2>
            <p className="text-white text-[12px] md:text-[18px] md:py-2 lg:py-0 px-2 mt-6  text-justify">{box.paragraph1}</p>
            {/* {expandedBoxId === box.id && ( */}
              <p className="text-white text-[12px] md:text-[18px] px-2  text-justify hidden md:block">{box.paragraph2}</p>
            {/* )} */}

            {expandedBoxId === box.id && (
            <p className="text-white text-[12px] md:text-[18px] text-justify px-2">{box.paragraph2}</p>
            )}
            
            <div className='flex flex-row justify-end items-center w-full h-full   '>
              <div className=''>
              <img src={box.imageUrl} alt={box.heading} className={`md:w-[200px] md:h-[140px] lg:w-[250px] lg:h-[150px] xs:w-[100px] xs:h-[100px] custom820:w-[300px] custom820:h-[200px]  -mb-5  object-cover  transition-all duration-300 ease-in-out ${expandedBoxId === box.id ? 'xl:w-[300px] lg:w-[450px] lg:h-[250px]  custom820:w-[350px] custom820:h-[250px] md:w-[250px] xs:w-[140px] xs:h-[110px] -md:mb-4 ' : ' '}`} />
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
