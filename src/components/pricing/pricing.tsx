import { BulkOrder } from './components/bulk-order';
import { Highlight } from './components/highlight';
import { PricingItem } from './components/pricing-item';
import { HearFromClient } from '../../common/hear-from-client';

export const Pricing: React.FC = () => {
  return (
    <>
      <PricingItem />
      <BulkOrder />
      <Highlight />
      <HearFromClient />
    </>
  );
};
