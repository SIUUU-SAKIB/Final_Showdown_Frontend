"use client"
import { createBlog, updateBlog } from "@/lib/blogs"
import { updateProject } from "@/lib/projects"
import { useRouter } from "next/navigation"
import { use, useEffect, useState } from "react"
import Swal from "sweetalert2"


const ProjectEdit = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params)
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [technologies, setTechnologies] = useState("")
  const [githubUrl, setGithubUrl] = useState("")
  const [liveUrl, setLiveUrl] = useState("")
  const [image, setImage] = useState('')
  const getProjectById = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/project/${id}`, {
        next: { revalidate: 20 },
        method: "GET"
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.data)
      setTitle(data.data.title || "")
      setDescription(data.data.description || "")
      setTechnologies(
        Array.isArray(data.data.technologies)
          ? data.data.technologies.join(" ")
          : data.data.technologies || ""
      )
      setGithubUrl(data.data.githubUrl || '')
      setLiveUrl(data.data.liveUrl || '')
      setImage(data.data.image || "")
      return data;
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };
  useEffect(() => {
    getProjectById()
  }, [id])
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const technologie = technologies.split(' ')
    const formData = {
      "title": title,
      "description": description,
      "technologies": technologie,
      "githubUrl": githubUrl,
      "liveUrl": liveUrl,
      "image": image
    }
    Swal.fire({
      text: "Update this project?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!"
    }).then(async (result) => {
      try {
        await updateProject(formData, id)
        setTitle("")
        setDescription("")
        setTechnologies("")
        setGithubUrl("")
        setLiveUrl("")
        setImage('')
        router.push('/dashboard/dashprojects')
      } catch (err) {
        console.log("Something wrong happend", err)
      }
      if (result.isConfirmed) {
        Swal.fire({
          title: "Updated!",
          text: "Your Project has been Updated.",
          icon: "success"
        });
      }
    });

  }

  return (
    <div className='w-full grid place-content-center min-h-screen px-4'>
      <div className='max-w-4xl md:min-w-4xl mx-auto flex flex-col items-center justify-center gap-4 py-4  shadow-lg shadow-purple-500'>
        <h1 className='text-2xl font-semibold'>Edit Project</h1>

        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 items-center py-2 px-4'>
          <input onChange={(e) => { setTitle(e.target.value) }} required value={title} type='text' className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='Project Title' />

          <textarea onChange={(e) => { setDescription(e.target.value) }} required value={description} className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='Project Content' />

          <input onChange={(e) => { setTechnologies(e.target.value) }} required value={technologies} className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='JS, Express, Node, NoSql' />

          <input onChange={(e) => { setGithubUrl(e.target.value) }} required value={githubUrl} type='url' className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='Cover Image URL' />
          <input onChange={(e) => { setLiveUrl(e.target.value) }} required value={liveUrl} type='url' className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='Cover Image URL' />

          <button type='submit' className='bg-white text-black font-semibold text-lg   w-full py-4 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer hover:border hover:border-purple-500'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ProjectEdit