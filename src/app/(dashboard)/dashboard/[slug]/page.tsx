"use client"
import { createBlog, updateBlog } from "@/lib/blogs"
import { use, useEffect, useState } from "react"


const EditBlog = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params)



  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState('')
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState("")
  const getBlogsById = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${slug}`, {
        next: { revalidate: 20 },
        method: "GET"
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setTitle(data.data.title || "")
      setContent(data.data.content || "")
      setTags(
        Array.isArray(data.data.tags)
          ? data.data.tags.join(" ")
          : data.data.tags || ""
      )
      setUrl(data.data.coverImageUrl || '')
      setCategory(data.data.category || '')
      return data;
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };
  useEffect(() => {
    if (slug) {
      getBlogsById()
    }
  }, [slug])
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
    console.log(formData)
    try {
      const result = await updateBlog(formData, slug)
      setTitle("")
      setContent("")
      setTags("")
      setUrl("")
      setCategory("")
      console.log("Blog Edited", result)
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

export default EditBlog