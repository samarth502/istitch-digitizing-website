import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';


interface FaqQue {
    question:string,
    answer:string

}


export const Faq: React.FC<{faqData:FaqQue[]}> = ({faqData}) => {
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
