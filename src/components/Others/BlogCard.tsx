"use client"
import { updateBlog } from "@/lib/blogs";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const BlogCard = ({ blog }) => {

  const router = useRouter();
  // const publishBtn = async (id: string) => {
  //   const payload = {
  //     isPublished: true
  //   }

  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You want to publish this blog?",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, publish it!"
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       await updateBlog(payload, id)
  //       Swal.fire({
  //         title: "Published",
  //         text: "Your blog is published 😍",
  //         icon: "success"
  //       });
  //       window.location.reload()

  //     }
  //   });




  // }
  const editBtn = (id:string) => {
    router.push(`/dashboard/${id}`)
  }
  const deleteBtn = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/delete-blog/${id}`, {
            next: {},
            method: 'DELETE'
          })
          if (!res.ok) {
            console.log("Failed to delete the blog")
          }
          const data = await res.json().catch(() => ({}));
          console.log("Success 🎉", data);
          window.location.reload()

        } catch (error) {
          console.log(error, "Something went Wrong 😔")
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your blog has been deleted.",
          icon: "success"
        });
      }
    });

  }
  return (
    <div className="bg-white rounded-2xl w-full shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">

      <div className="p-4 gap-2 flex flex-col ">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{blog?.title}</h3>
          {/* <p className="text-sm text-gray-500 mt-1 line-clamp-2">{blog?.content}</p> */}
        </div>

        <div className="mt-3">
          <div className="flex flex-wrap gap-2 text-xs text-blue-600">
            {blog?.tags.map((tag, index:number) => (
              <span key={index} className="bg-blue-100 px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
            {/* <span>👤 {blog?.authorId}</span> */}
            <span>{new Date(blog?.createdAt).toLocaleDateString()}</span>
          </div>

          {/* <div className="mt-3">
            <span
              className={`text-xs px-3 py-1 rounded-full ${blog?.isPublished
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
                }`}
            >
              {blog?.isPublished ? "Published" : "Draft"}
            </span>
          </div> */}
        </div>

        {/* buttons */}
        <div className="flex gap-2 w-full pt-4">
          {/* <button disabled={blog.isPublished} onClick={() => publishBtn(blog._id)} className={`text-md font-light text-center ${blog.isPublished ? "bg-gray-500 cursor-none" : "bg-green-500 cursor-pointer"}  w-full text-white py-2 `}>{blog.isPublished ? "Published" : "Publish"}</button> */}
          <button onClick={() => editBtn(blog._id)} className="text-md font-light text-center bg-blue-500 w-full text-white py-2 cursor-pointer">Edit</button>
          <button onClick={() => deleteBtn(blog._id)} className="text-md font-light text-center bg-red-500 w-full text-white py-2 cursor-pointer">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
