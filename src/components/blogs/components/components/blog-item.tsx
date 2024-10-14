import React from 'react';

// Define the type for a single blog post
interface BlogPost {
    id: number;
    image: string;
    title: string;
    content: string;
    date: string;
}


export const BlogItem: React.FC<{blogPost:BlogPost[]}> = ({ blogPost }) => {
    return (
        <>
            {blogPost.map((post) => (
                <div key={post.id} className="bg-white shadow-md rounded-xl overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                        <p className="text-gray-700 mb-4">{post.content}</p>
                        <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">{post.date}</div>
                            <button className="bg-[#D0A038] text-white w-[140px] h-[40px] rounded-full text-[20px] hover:bg-[#102044] hover:text-white transition-colors duration-300">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
