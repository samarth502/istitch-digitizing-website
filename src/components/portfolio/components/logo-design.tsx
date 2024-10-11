import React from 'react';
import L1 from '../../../assets/portfolio/logo/l1.png';
import L2 from '../../../assets/portfolio/logo/l2.png';
import L3 from '../../../assets/portfolio/logo/l3.png';
import L4 from '../../../assets/portfolio/logo/l4.png';
import L5 from '../../../assets/portfolio/logo/l5.png';
import L6 from '../../../assets/portfolio/logo/l6.png';

const designs = [
  { id: 1, image: L1 },
  { id: 2, image: L2 },
  { id: 3, image: L3 },
  { id: 4, image: L4 },
  { id: 5, image: L5 },
  { id: 6, image: L6 }
];

export const LogoDesign: React.FC = () => {
  return (
    <div className="px-4 md:px-10 xl:px-24 py-10">
      <h2 className="text-2xl font-semibold mb-6">Logo Designs</h2>

      {/* Container for Desktop View */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {designs.map((design) => (
          <div key={design.id} className="relative">
            <img
              src={design.image}
              alt={`Design ${design.id}`}
              className="w-full h-full object-cover shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Container for Mobile View */}
      <div className="flex sm:hidden space-x-4 overflow-x-scroll">
        {designs.map((design) => (
          <div key={design.id} className="flex-shrink-0 w-64">
            <img
              src={design.image}
              alt={`Design ${design.id}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
