import { AppliqueDesign } from './components/applique-design';
import { EmbroideryDesign } from './components/embroidery-design';
import { Faq } from './components/faq';
import { LatestDesign } from './components/latest-design';
import { LogoDesign } from './components/logo-design';
import { VectorArtDesign } from './components/vector-art-design';

export const Portfolio = () => {
  return (
    <div className="bg-lightGray">
      <LatestDesign />
      <EmbroideryDesign />
      <VectorArtDesign />
      <LogoDesign />
      <AppliqueDesign />
      <Faq />
    </div>
  );
};
