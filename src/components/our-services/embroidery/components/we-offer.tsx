import React from 'react';

const services = [
  {
    title: 'Processing Bulk Quantities',
    description:
      'We excel in processing large, bulk orders with the highest level of efficiency and accuracy. Our experienced team is dedicated to precision and creativity, ensuring every design meets your expectations. Our streamlined processes and advanced digitizing techniques ensure that even the largest orders are managed seamlessly, providing you with reliable and hassle-free service.'
  },
  {
    title: 'Confidentiality',
    description:
      'We understand the importance of confidentiality when it comes to your designs and business information. We are committed to safeguarding the privacy of our clients and ensuring that all designs, whether in development or final form, remain strictly confidential.'
  },
  {
    title: 'Quality Assurance',
    description:
      'Quality is at the core of everything we do. We are committed to delivering top-tier results that meet and exceed client expectations. Each design undergoes a thorough quality assurance process, where our skilled team carefully reviews every detail to ensure precision, accuracy, and consistency.'
  },
  {
    title: 'Latest Technology',
    description:
      "At iStitch Digitizing, we leverage the latest technology to ensure that our designs are not only precise but also cutting-edge. By using advanced software and modern digitizing tools, we are able to produce high-quality designs that meet today's industry standards."
  },
  {
    title: 'Flexible Delivery',
    description:
      'At iStitch Digitizing, we prioritize flexibility in our delivery process to meet the diverse needs of our clients. Understanding that each project has unique timelines and requirements, we offer adaptable delivery options to ensure your designs are completed on time.'
  }
];

export const WeOffer: React.FC = () => {
  return (
    <div className="px-4 md:px-10 xl:px-24 py-10">
      <h2 className="text-3xl font-bold mb-10">What We Offer</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center h-[400px] rounded-3xl text-white p-6 shadow-lg transition-transform transform hover:scale-105 hover:text-black"
            style={{
              background: 'linear-gradient(180deg, #2850AA 18%, #102044 96%)',
              transition: 'background 0.3s ease, color 0.3s ease'
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                'linear-gradient(180deg, #D0A038, #EBC764)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                'linear-gradient(180deg, #2850AA 18%, #102044 96%)')
            }
          >
            <h3 className="flex text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-lg leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
