import React from 'react';

import NoName from './components/no-name';
import Pricing from './components/pricing';
import { Banner } from './components/banner';
import { Feature } from './components/feature';
import { Design } from './components/design';
import { Journey } from './components/journey';
import { OurServices } from './components/service';
import { WhyChooseUs } from './components/why-choose-us';
import { HearFromClient } from '../../common/hear-from-client';

export const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <OurServices />
      <Feature />
      <WhyChooseUs />
      <Design />
      <HearFromClient />
      <Pricing />
      <Journey />
      <NoName />
    </>
  );
};
