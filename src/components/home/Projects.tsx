"use client"
import { getAllBlog } from "@/lib/blogs"
import { getAllProject, getAllProjects } from "@/lib/projects"
import { useEffect, useState } from "react"
import ProjectCard from "./home_cards/ProjectCard"
import Link from "next/link"
// import BlogCard from "../Others/BlogCard"
import BlogCard from "./home_cards/BlogCard"
import { motion } from "framer-motion"

const Projects = () => {
  const [active, setActive] = useState(true)
  const [projects, setProjects] = useState([])
  const [blogs, setBlogs] = useState([])

      useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const projectRes = await getAllProject();
          const blogsRes = await getAllBlog()
          setBlogs(blogsRes?.data || [])
          setProjects(projectRes?.data || []);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        } 
      };
    
      fetchBlogs();
    }, []);

  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center bg-white'>
      <div className='max-w-7xl mx-auto p-12 flex flex-col items-center justify-center gap-8'>
        <div className='uppercase flex flex-col gap-4 items-center text-center text-black py-8'>
          <p className='text-4xl font-semibold uppercase'>MY latest featured works</p>
          <p className='text-sm font-light  text-black/70'>I do mostly Fullstack applications and Writing blogs is my hobby</p>
        </div>

        {/* main section */}
        <div className='w-full flex  items-center justify-center gap-4 '>
          <p onClick={() => setActive(true)} className={` shadow-x ${active && "shadow-md px-4 py-2 bg-zinc-300/20 "} font-semibold text-md cursor-pointer px-4 py-2 bg-white text-black`}>Projects</p>
          <p onClick={() => setActive(false)} className={`shadow-x ${!active && "shadow-md px-4 py-2 bg-zinc-300/20 "} font-semibold text-md cursor-pointer px-4 py-2 bg-white text-black`}>Blogs</p>

        </div>

        {/* blogs */}
        <motion.div  initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} className={`${!active ? "grid" : "hidden"} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 text-black`}>

         <BlogCard/>
        </motion.div>
        {/* blogs/// */}
        {/* projects */}
        <div className="flex items-center justify-center flex-col gap-4">
          <motion.div  initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} className={`${active ? "grid" : "hidden"} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 text-black`}>
          {
         projects && projects.length > 0 ? projects.slice(0,3).map(e => <ProjectCard project={e
         } key={e._id}/>
            ):(
              <div>No projects found</div>
            )
          }
         
        </motion.div>
         <Link href={`/projects/${active?"allproject":"allblogs"}`} className="text-center w-full py-4 text-lg text-black/80 cursor-pointer hover:underline transition duration-75">View More</Link>
        </div>
        {/* projects */}
        {/* main section //// */}
      </div>


    </div>
  )
}

export default Projects