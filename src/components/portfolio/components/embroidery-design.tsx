import React from 'react';
import E1 from '../../../assets/portfolio/embroidery/e1.png';
import E2 from '../../../assets/portfolio/embroidery/e2.png';
import E3 from '../../../assets/portfolio/embroidery/e3.png';
import E4 from '../../../assets/portfolio/embroidery/e4.png';
import E5 from '../../../assets/portfolio/embroidery/e5.png';
import E6 from '../../../assets/portfolio/embroidery/e6.png';

const designs = [
  { id: 1, image: E1 },
  { id: 2, image: E2 },
  { id: 3, image: E3 },
  { id: 4, image: E4 },
  { id: 5, image: E5 },
  { id: 6, image: E6 }
];

export const EmbroideryDesign: React.FC = () => {
  return (
    <div className="px-4 md:px-10 xl:px-24 py-10">
      <h2 className="text-2xl font-semibold mb-6">Embroidery Designs</h2>

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
