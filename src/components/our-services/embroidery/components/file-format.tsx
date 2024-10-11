import React from 'react';
import FileFormatItem from '../../../../assets/services/embroidery/file-format-item.png';

export const FileFormat: React.FC = () => {
  return (
    <div className="px-4 md:px-10 xl:px-24 py-10">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-6">
        {/* Text Section */}
        <div className="lg:w-1/2 lg:pr-10">
          <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
            File Formats
          </h2>
          <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
            <span>PXF</span>
            <span>EMB</span>
            <span>DST</span>
            <span>PES</span>
            <span>EXP</span>
            <span>PDF</span>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={FileFormatItem}
            alt="File Format Example"
            className="w-full max-w-xs lg:max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};
