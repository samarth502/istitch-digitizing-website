import React from 'react';
import latestBlogOne from '../../../assets/blog/embroidery-blog/blog1.png'
import { BlogItem } from './components/blog-item';


// Sample blog data
const blogPost = [
    {
        id: 1,
        image: latestBlogOne, // Replace with actual image URL
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto at ab odio magni.',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id nesciunt sunt harum amet, rerum ad officiis a enim iure..',
        date: '25 Sept 2024',
    },
   
    // Add more blog posts as needed
];

export const EmbroideryBlog: React.FC = () => {
    return (
        <div className=" px-4 md:px-10 xl:px-24 mt-5">
            <h1 className='text-2xl font-semibold pb-5'>Embroidery Blogs</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <BlogItem blogPost={blogPost}/>
            </div>
        </div>
    );
};

