"use client"

import Footer from "@/components/home/Footer"
import Nav from "@/components/home/Nav"
import { use, useEffect, useState } from "react"

const ViewBlog = ({ params }: { params: Promise<{ params: string }> }) => {
  const { blogid } = use(params)
  const [blog, setBlog] = useState([])
  const getBlogsById = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${blogid}`, {
        next: { revalidate: 20 },
        method: "GET"
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setBlog(data)
      return data;
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };
  useEffect(() => {
    if (blogid) {
      getBlogsById()
    }
  }, [])

  return (
    <div className="w-full min-h-screen ">
      <Nav />
      <div className="max-w-5xl min-h-screen bg-white text-black mx-auto  gap-4 mb-8 pb-8">
        <img
          src={blog?.data?.coverImageUrl || "https://canvas-lb.tubitv.com/opts/GTrtFuOmbVZcEA==/fe169fe7-7ccd-4d2d-9f7b-cd87c6f5d7ef/CJ4GEMADOgUxLjEuOA=="}
          alt={blog?.data?.title || "Blog cover image"}
          className="w-full h-[300px] object-cover mx-auto rounded-xl"
        />


        <div className="gap-4 px-4">
          <p className="text-4xl font-semibold py-4">{blog?.data?.title}</p>
          <p className="text-lg">Category: {blog?.data?.category}</p>
          <div className="flex gap-4 items-center mt-2">
            {
              blog?.data?.tags.map(e => <p key={e.name} className="text-sm font-light bg-black text-white rounded-full px-4 py-2">{e}</p>)
            }



          </div>
          <p className="mt-2">Published At: {new Date(blog?.data?.updatedAt).toLocaleDateString()}</p>

          <p className="text-md font-light text-slate-900 leading-6 mt-4">{blog?.data?.content}</p>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default ViewBlog