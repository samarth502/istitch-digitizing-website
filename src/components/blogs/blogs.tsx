import { EmbroideryBlog } from "./components/embroidery-blog"

import { LatestBlog } from "./components/latest-blog"
import { VectorArtBlog } from "./components/vector-art-blog"
import { FaqAskQue } from "./components/faq-asked-question";

export const Blog:React.FC = () =>{

      
    return(
        <>
        <LatestBlog/>
        <EmbroideryBlog/>
        <VectorArtBlog/>
        <FaqAskQue/>
        </>
    )
}