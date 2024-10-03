import React from "react"
import { Banner } from "./components/banner"
import { OurServices } from "./components/our-services"
import { Featue } from "./components/fetaure"
import WhyChooesUs from "./components/why-choose-us"
import { OurDesign } from "./components/our-design"

export const Home:React.FC = () =>{

    return (
       <>
       <Banner/>
       <OurServices/>
       <Featue/>
       <WhyChooesUs/>
       <OurDesign/>
       
       </>
    )   

}