import React from 'react';
import latestBlogOne from '../../../assets/blog/vector-blog/blog2.png'
import latestBlogTwo from '../../../assets/blog/vector-blog/blog1.png'
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
    {
        id: 2,
        image: latestBlogTwo,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto at ab odio magni.',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id nesciunt sunt harum amet, rerum ad officiis a enim iure..',
        date: '12 Oct 2024',
    },
    // Add more blog posts as needed
];

export const VectorArtBlog: React.FC = () => {
    return (
        <div className="mt-5 px-4 md:px-10 xl:px-24">
            <h1 className='text-2xl font-semibold pb-5'>Vector Art Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <BlogItem blogPost={blogPost}/>

            </div>
        </div>
    );
};

