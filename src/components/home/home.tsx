import React from 'react';

import NoName from './components/no-name';
import OurClient from './components/our-clients';
import Pricing from './components/pricing';
import { Banner } from './components/banner';
import { Feature } from './components/feature';
import { OurDesign } from './components/our-design';
import { OurJourney } from './components/our-journey';
import { OurServices } from './components/service';
import { WhyChooseUs } from './components/why-choose-us';

export const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <OurServices />
      <Feature />
      <WhyChooseUs />
      <OurDesign />
      <OurClient />
      <Pricing />
      <OurJourney />
      <NoName />
    </>
  );
};
