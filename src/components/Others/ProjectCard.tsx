"use client"
import { updateBlog } from "@/lib/blogs";
import { getAllProject } from "@/lib/projects";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProjectCard = ({ projects }) => {
  const router = useRouter();
  const [project, setProjects] = useState('')
  const [id, setId] = useState(null)
  useEffect(() => {
    const getAll = async () => {
    setProjects(await getAllProject())
    }
    getAll()
  }, [id])
  const editBtn = (id) => {
    router.push(`/dashboard/projectedit/${id}`)
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
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/delete-project/${id}`, {
            next: { revalidate: 5 },
            method: 'DELETE'
          })
          if (!res.ok) {
            console.log("Failed to delete the Project")
          }
          const data = await res.json().catch(() => ({}));
          console.log("Success 🎉", data);
          setProjects(prev => prev?.data?.filter(p => p._id !== id));


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
    <>
      {projects.map((e) => (
        <div
          key={e._id}
          className="bg-white rounded-2xl w-full shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-4 gap-2 flex flex-col">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {e?.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {e?.content}
              </p>
            </div>

            <div className="mt-3">
              <div className="flex flex-wrap gap-2 text-xs text-blue-600">
                {e?.technologies?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <span>{new Date(e?.createdAt).toLocaleDateString()}</span>
              </div>

              <div className="mt-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full ${e?.isPublished
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                  {e?.isPublished ? "Published" : "Draft"}
                </span>
              </div>
            </div>

            {/* buttons */}
            <div className="flex gap-2 w-full pt-4">
              <button
                onClick={() => editBtn(e._id)}
                className="text-md font-light text-center bg-blue-500 w-full text-white py-2 cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => { deleteBtn(e._id); setId(e._id) }}
                className="text-md font-light text-center bg-red-500 w-full text-white py-2 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );

};

export default ProjectCard;
