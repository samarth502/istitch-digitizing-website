import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';

export const ContactDetail: React.FC = () => {
  return (
    <div className="px-4 md:px-10 xl:px-24 py-20 bg-gradient-to-b from-goldenSand via-goldenGlow to-softSand">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Location */}
        <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-md h-48 justify-center">
          <div className="flex flex-row">
            <FaMapMarkerAlt size={24} className="mb-3" />
            <h3 className="text-lg font-semibold ml-2 mb-2">Location</h3>
          </div>
          <p className="text-center">
            B-1209, Stargaze
            <br />
            Mulshi Road
            <br />
            Bavdhan, Pune
          </p>
        </div>

        {/* Call */}
        <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-md  h-48 justify-center">
          <div className="flex flex-row">
            <FaPhoneAlt size={24} className="mb-3" />
            <h3 className="text-lg font-semibold ml-2 mb-2">Call</h3>
          </div>
          <p className="text-center">
            India: (0091)9359216981
            <br />
            US: (001)6463559265
          </p>
        </div>

        {/* Mail */}
        <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-md  h-48 justify-center">
          <div className="flex flex-row">
            <FaEnvelope size={24} className="mb-3" />
            <h3 className="text-lg font-semibold ml-2 mb-2">Mail</h3>
          </div>
          <p className="text-center">
            info@istitchdigitizing.com
            <br />
            orders@istitchdigitizing.com
            <br />
            contact@istitchdigitizing.com
          </p>
        </div>

        {/* Working Hours */}
        <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-md  h-48 justify-center">
          <div className="flex flex-row">
            <FaClock size={24} className="mb-3" />
            <h3 className="text-lg font-semibold ml-2 mb-2">Working Hours</h3>
          </div>
          <p className="text-center">9am to 6pm</p>
        </div>
      </div>
    </div>
  );
};
