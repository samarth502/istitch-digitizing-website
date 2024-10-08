import React from "react"
import { Banner } from "./components/banner"
import { OurServices } from "./components/our-services"
import { Featue } from "./components/fetaure"
import { OurDesign } from "./components/our-design"
import Pricing from "./components/priceing"
import { OurJourney } from "./components/our-journey"
import OurClient from "./components/our-clients"
import NoName from "./components/no-name"
import { WhyChooseUs } from "./components/why-choose-us"

export const Home:React.FC = () =>{

    return (
       <>
       <Banner/>
       <OurServices/>
       <Featue/>
       <WhyChooseUs/>
       <OurDesign/>
       <OurClient/>
       <Pricing/>
       <OurJourney/>
       <NoName/>
       
       </>
    )   

}