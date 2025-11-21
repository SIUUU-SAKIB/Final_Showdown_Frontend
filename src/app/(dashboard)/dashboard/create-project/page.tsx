'use client'
import { createBlog } from '@/lib/blogs'
import { createProject } from '@/lib/projects'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const CreateProject = () => {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [technologies, setTechnologies] = useState("")
  const [githubUrl, setGithubUrl] = useState("")
  const [liveUrl, setLiveUrl] = useState("")
  const [image, setImage] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const technologie = technologies.split(' ')
    const formData = {
      "title": title,
      "description": description,
      "technologies": technologie,
      "githubUrl": githubUrl,
      "liveURl": liveUrl,
      "image": image
    }
    console.log(formData)
    try {
      const result = await createProject(formData)
      setTitle("")
      setDescription("")
      setTechnologies("")
      setGithubUrl("")
      setLiveUrl('')
      setImage('')
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Project saved successfully 🎉",
        showConfirmButton: false,
        timer: 1500
      });
      console.log(result)
      router.push('/dashboard/dashprojects')

    } catch (err) {
      console.log("Something wrong happend", err)
    }


  }
  return (
    <div className='w-full py-16 min-h-screen px-4'>
      <div className='max-w-4xl md:min-w-4xl mx-auto flex flex-col items-center justify-center gap-4 py-4  shadow-lg shadow-purple-500'>
        <h1 className='text-2xl font-semibold'>Create New Project</h1>

        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 items-center py-2 px-4'>
          <input onChange={(e) => { setTitle(e.target.value) }} required value={title} type='text' className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='Project Title' />

          <textarea onChange={(e) => { setDescription(e.target.value) }} required value={description} className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='Project Description' />

          <input onChange={(e) => { setImage(e.target.value) }} required value={image} className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='Set Project Image' />
          <input onChange={(e) => { setGithubUrl(e.target.value) }} required value={githubUrl} type='url' className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='Github URL' />
         
          <input onChange={(e) => { setLiveUrl(e.target.value) }} required value={liveUrl} type='url' className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='Live URL' />

          <button type='submit' className='bg-white text-black font-semibold text-lg   w-full py-4 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer hover:border hover:border-purple-500'>Publish</button>
        </form>
      </div>
    </div>
  )
}

export default CreateProject