import React from 'react';
import V1 from '../../../assets/portfolio/vector-art/v1.png';
import V2 from '../../../assets/portfolio/vector-art/v2.png';
import V3 from '../../../assets/portfolio/vector-art/v3.png';
import V4 from '../../../assets/portfolio/vector-art/v4.png';
import V5 from '../../../assets/portfolio/vector-art/v5.png';

const designs = [
  { id: 1, image: V1 },
  { id: 2, image: V2 },
  { id: 3, image: V3 },
  { id: 4, image: V4 },
  { id: 5, image: V5 }
];

export const VectorArtDesign: React.FC = () => {
  return (
    <div className="px-4 md:px-10 xl:px-24 py-10">
      <h2 className="text-2xl font-semibold mb-6">Vector Art Designs</h2>

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
