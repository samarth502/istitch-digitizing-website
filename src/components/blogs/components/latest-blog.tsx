import React from 'react';
import { BlogItem } from './components/blog-item';
import latestBlogOne from '../../../assets/blog/latest-blog/blog1.png';
import latestBlogTwo from '../../../assets/blog/latest-blog/blog2.png';

export const LatestBlog: React.FC = () => {
    const blogPost = [
        {
            id: 1,
            image: latestBlogOne,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto at ab odio magni.',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id nesciunt sunt harum amet, rerum ad officiis a enim iure.',
            date: '25 Sept 2024',
        },
        {
            id: 2,
            image: latestBlogTwo,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum architecto at ab odio magni.',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id nesciunt sunt harum amet, rerum ad officiis a enim iure.',
            date: '12 Oct 2024',
        },
        // Add more blog posts as needed
    ];

    return (
        <div className="px-4 md:px-10 xl:px-24 mt-5">
            <h1 className="text-2xl font-semibold pb-5">Latest Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <BlogItem blogPost={blogPost} />
            </div>
        </div>
    );
};
