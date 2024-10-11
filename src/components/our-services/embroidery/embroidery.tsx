import { HearFromClient } from '../../../common/hear-from-client';
import { Banner } from './components/banner';
import { Benefit } from './components/benefit';
import { FileFormat } from './components/file-format';
import { LatestDesign } from './components/latest-design';
import { Service } from './components/service';
import { WeOffer } from './components/we-offer';

export const Embroidery = () => {
  return (
    <div className="bg-lightGray">
      <Banner />
      <Service />
      <WeOffer />
      <FileFormat />
      <Benefit />
      <LatestDesign />
      <div className="py-10">
        <HearFromClient />
      </div>
    </div>
  );
};
