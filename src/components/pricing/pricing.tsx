import { BulkOrder } from "./components/bulk-order"
import Highlights from "./components/key-highlight"
import OurClient from "./components/our-client"
import { PricingItem } from "./components/pricing-item"

export const Pricing:React.FC = () =>{
    return (
        <>
          <PricingItem/>
          <BulkOrder/>
          <Highlights/>
          <OurClient/>
        </>
    )
}