import React from 'react';
import A1 from '../../../assets/portfolio/applique/a1.png';
import A2 from '../../../assets/portfolio/applique/a2.png';
import A3 from '../../../assets/portfolio/applique/a3.png';

const designs = [
  { id: 1, image: A1 },
  { id: 2, image: A2 },
  { id: 3, image: A3 }
];

export const AppliqueDesign: React.FC = () => {
  return (
    <div className="px-4 md:px-10 xl:px-24 py-10">
      <h2 className="text-2xl font-semibold mb-6">Applique Designs</h2>

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
