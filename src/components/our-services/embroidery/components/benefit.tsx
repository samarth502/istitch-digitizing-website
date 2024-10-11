import React from 'react';

import DiscountedRate from '../../../../assets/services/embroidery/discount.png';
import SkilledTeam from '../../../../assets/services/embroidery/skilled-team.png';
import QuickerDelivery from '../../../../assets/services/embroidery/quicker-delivery.png';
import CustomerSupport from '../../../../assets/services/embroidery/customer-support.png';
import PaymentFlexibility from '../../../../assets/services/embroidery/payment-flexibility.png';
import CustomerSatisfaction from '../../../../assets/services/embroidery/customer-satisfaction.png';

const benefits = [
  { icon: DiscountedRate, title: 'Discounted Rates' },
  { icon: SkilledTeam, title: 'Skilled Team' },
  { icon: QuickerDelivery, title: 'Quicker delivery' },
  { icon: CustomerSupport, title: '24/7 Customer Support' },
  { icon: PaymentFlexibility, title: 'Payment Flexibility' },
  { icon: CustomerSatisfaction, title: '100% Customer Satisfaction' }
];

export const Benefit: React.FC = () => {
  return (
    <div className="px-4 md:px-10 xl:px-24 py-10 bg-midnightBlue text-white">
      <h2 className="text-center text-2xl font-semibold mb-8">Key Benefits</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={benefit.icon}
              alt={benefit.title}
              className="w-12 h-12 mb-4"
            />
            <p className="text-lg">{benefit.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
