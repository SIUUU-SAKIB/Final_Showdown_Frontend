"use client";

import BlogCard from "@/components/Others/BlogCard";
import { getAllBlog, getAllBlogs } from "@/lib/blogs";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(totalBlogs / limit);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogsRes = await getAllBlogs(page, 3);
        const totalRes = await getAllBlog();
        setBlogs(blogsRes?.data || []);
        setTotalBlogs(totalRes?.data?.length || 0);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page, limit]);

  const handlePrev = () => {
    if (page > 1) setPage((p) => p - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((p) => p + 1);
  };

  return (
    <div className="w-full min-h-screen text-black">
      <div className="flex max-w-screen-2xl mx-auto gap-4 justify-between flex-col">
        {/* Header */}
        <div className="flex items-center w-full px-8 py-8 gap-8">
          <div className="text-xl cursor-pointer w-full shadow bg-white text-black px-8 py-4 font-medium text-center hover:bg-black hover:text-white transition-all duration-300 hover:border hover:border-white">
            Total Blogs: {totalBlogs}
          </div>

          <Link
            href="/dashboard/create-blog"
            className="text-xl cursor-pointer w-full shadow bg-white text-black px-8 py-4 font-medium text-center hover:bg-black hover:text-white transition-all duration-300 hover:border hover:border-white"
          >
            Create new Blog
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4">
          {loading ? (
            <p className="text-gray-500 mt-8 text-lg">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-gray-500 mt-8 text-lg">No blogs found.</p>
          ) : (
            blogs.map((blog: any) => <BlogCard key={blog._id} blog={blog} />)
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex mx-auto bg-white gap-12 py-4 px-8 items-center rounded-lg shadow-md mt-8">
            <ArrowBigLeft
              onClick={handlePrev}
              className={`font-bold text-2xl cursor-pointer transition ${
                page === 1 ? "text-gray-300 cursor-not-allowed" : "hover:text-black"
              }`}
            />
            <p className="text-xl font-bold">
              Page {page} of {totalPages}
            </p>
            <ArrowBigRight
              onClick={handleNext}
              className={`font-bold text-2xl cursor-pointer transition ${
                page === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "hover:text-black"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
