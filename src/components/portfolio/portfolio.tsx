import { AppliqueDesign } from './components/applique-design';
import { EmbroideryDesign } from './components/embroidery-design';
import { Faq } from '../../common/faq-container-item';
import { LatestDesign } from './components/latest-design';
import { LogoDesign } from './components/logo-design';
import { VectorArtDesign } from './components/vector-art-design';

export const Portfolio = () => {
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
  return (
    <div className="bg-lightGray">
      <LatestDesign />
      <EmbroideryDesign />
      <VectorArtDesign />
      <LogoDesign />
      <AppliqueDesign />
      <Faq faqData={faqData} />
    </div>
  );
};
