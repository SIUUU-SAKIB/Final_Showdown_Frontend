'use client'
import { createBlog } from '@/lib/blogs'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const CreateBlog = () => {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState('')
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState("")


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const tag = tags.split(' ')
    const formData = {
      "title": title,
      "content": content,
      tags: tag,
      "coverImageUrl": url,
      "category": category,
    }
    try {
      const result = await createBlog(formData)
      setTitle("")
      setContent("")
      setTags("")
      setUrl("")
      setCategory("")
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Blog saved successfully 🎉",
        showConfirmButton: false,
        timer: 1500
      });
      router.push('/dashboard')

    } catch (err) {
      console.log("Something wrong happend", err)
    }


  }
  return (
    <div className='w-full grid place-content-center min-h-screen px-4'>
      <div className='max-w-4xl md:min-w-4xl mx-auto flex flex-col items-center justify-center gap-4 py-4  shadow-lg shadow-purple-500'>
        <h1 className='text-2xl font-semibold'>Create New Blog</h1>

        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 items-center py-2 px-4'>
          <input onChange={(e) => { setTitle(e.target.value) }} required value={title} type='text' className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='Blog Title' />

          <textarea onChange={(e) => { setContent(e.target.value) }} required value={content} className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='Blog Content' />

          <input onChange={(e) => { setTags(e.target.value) }} required value={tags} className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='JS, Express, Node, NoSql' />

          <input onChange={(e) => { setUrl(e.target.value) }} required value={url} type='url' className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200' placeholder='Cover Image URL' />

          <select value={category} onChange={(e) => { setCategory(e.target.value) }} required className='w-full border text-white py-2 focus:bg-white focus:text-black outline-none px-2 transition-all duration-200'>
            <option>Category</option>
            <option>Backend</option>
            <option>Frontend</option>
            <option>UI/UX</option>
          </select>
          <button type='submit' className='bg-white text-black font-semibold text-lg   w-full py-4 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer hover:border hover:border-purple-500'>Send to Dashboard</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlog