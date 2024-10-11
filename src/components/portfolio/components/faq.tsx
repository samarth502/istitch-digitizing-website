import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question:
      'How do I ensure my vector art looks consistent across different media?',
    answer:
      'To ensure consistency, use high-quality vector files and maintain color profiles across various outputs.'
  },
  {
    question: 'Do you offer revisions if I need changes to the design?',
    answer:
      'Yes, we offer revisions to make sure you are satisfied with the final design.'
  },
  {
    question:
      'How long does it take to complete an embroidery digitizing or vector art project?',
    answer:
      'The turnaround time varies based on the complexity of the design, but we typically complete projects within 24-48 hours.'
  },
  {
    question: 'How do I know if my design will look good when embroidered?',
    answer:
      'We provide a preview of the design and offer recommendations to ensure the best quality for embroidery.'
  },
  {
    question:
      'What is the difference between embroidery digitizing and vector art?',
    answer:
      'Embroidery digitizing is the process of converting artwork into a stitch file for embroidery machines, while vector art involves creating scalable graphics for printing and other uses.'
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 md:px-10 xl:px-24 pt-10 pb-20">
      <h2 className="text-2xl font-semibold mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg"
            >
              {item.question}
              <span className="ml-4">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 border-t border-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
