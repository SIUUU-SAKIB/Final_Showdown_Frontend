"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

import BlogCard from "@/components/Others/BlogCard";
import { getAllBlogs, getAllBlog } from "@/lib/blogs";

interface Blog {
  _id: string;
  title: string;
  image?: string;
  content?: string;
  createdAt?: string;
}

const BlogManagementPage = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(3);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.max(1, Math.ceil(totalBlogs / limit));

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const [blogsRes, totalRes] = await Promise.all([
          getAllBlogs(page, limit),
          getAllBlog(),
        ]);

        setBlogs(blogsRes?.data || []);
        setTotalBlogs(totalRes?.data?.length || 0);
      } catch (err) {
        console.error("Failed to load blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page, limit]);

  const handlePrev = () => page > 1 && setPage((p) => p - 1);
  const handleNext = () => page < totalPages && setPage((p) => p + 1);

  return (
    <div className="w-full min-h-screen text-black">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center w-full px-8 py-4 md:py-8 gap-6">
          <div className="w-full text-center text-md md:text-xl font-medium px-8 py-4 bg-white shadow rounded cursor-none">
            Total Blogs: {totalBlogs}
          </div>

          <Link
            href="/dashboard/create-blog"
            className="w-full text-center text-md md:text-xl font-medium px-4 py-4 bg-black text-white shadow rounded hover:bg-white hover:text-black transition border border-white/30 cursor-pointer"
          >
            Create New Blog
          </Link>
        </div>

        {/* Blog List */}
        <div className="flex flex-col items-center gap-4">
          {loading ? (
            <p className="text-gray-500 mt-6 text-lg">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-gray-500 mt-6 text-lg">No blogs found.</p>
          ) : (
            blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center gap-10 mx-auto bg-white py-4 px-8 rounded-lg shadow mb-8">
            <ArrowBigLeft
              onClick={handlePrev}
              className={`text-2xl cursor-pointer transition ${
                page === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "hover:text-black"
              }`}
            />

            <p className="text-xl font-semibold">
              Page {page} of {totalPages}
            </p>

            <ArrowBigRight
              onClick={handleNext}
              className={`text-2xl cursor-pointer transition ${
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

export default BlogManagementPage;
