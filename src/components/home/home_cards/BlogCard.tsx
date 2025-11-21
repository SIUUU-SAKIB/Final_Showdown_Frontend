import { getAllBlog, getAllBlogs } from '@/lib/blogs';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
interface Card {
  _id:string,
    title:string,
    content:string,
    tags:string[],
    coverImageUrl:string,
    category:string,
   updatedAt:Date
}

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);

        const projectRes = await getAllBlog();
        setBlogs(projectRes?.data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
 <>
 {blogs.slice(0,3).map(blog =>  <div key={blog._id} className="min-w-sm min-h-[500px]  bg-white shadow-md rounded-2xl overflow-hidden border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
  <div className="w-full h-56">
    <img 
      src={blog?.coverImageUrl} 
      alt={blog?.title}
      className="w-full min-h-56 object-contain"
    />
  </div>

  <div className="flex flex-col gap-3 px-4 py-4">
    <h2 className="text-lg font-semibold text-black">
      {blog?.title}
    </h2>

    <p className="text-sm  text-black font-medium py-1 rounded-full">
      Category: <span className='bg-black w-full text-white rounded-full px-2 py-1'>{blog?.category}</span>
    </p>

    <div className="flex flex-wrap gap-2">
      {blog?.tags?.map((tag, index) => (
        <span 
          key={index}
          className="text-xs bg-black text-white px-2 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>

    <p className="text-sm text-gray-600">
      Published: {new Date(blog?.updatedAt).toLocaleDateString()}
    </p>
  </div>

  <Link href={`/projects/${blog?._id}`} className="text-md text-center w-full py-3 border-t bg-black text-white inline-block  hover:bg-gray-900 transition cursor-pointer">
    Read Full Blog →
  </Link>
</div>)}
 </>

  )
}

export default BlogCard