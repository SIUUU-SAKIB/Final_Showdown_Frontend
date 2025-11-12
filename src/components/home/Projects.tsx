"use client"
import { useState } from "react"

const Projects = () => {
  const [active, setActive] = useState(true)
  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center bg-white'>
      <div className='max-w-7xl mx-auto p-12 flex flex-col items-center justify-center gap-8'>
        <div className='uppercase flex flex-col gap-4 items-center text-center text-black py-8'>
          <p className='text-4xl font-semibold uppercase'>MY latest featured projects</p>
          <p className='text-sm font-light  text-black/70'>I do mostly Fullstack applications and Writing blogs is my hobby</p>
        </div>

        {/* main section */}
        <div className='w-full flex  items-center justify-center gap-4 '>
          <p onClick={() => setActive(true)} className='text-sm shadow-x font-semibold cursor-pointer px-4 py-2 bg-white text-black'>Projects</p>
          <p onClick={() => setActive(false)} className='text-sm font-semibold cursor-pointer px-4 py-2 bg-white shadow-xl text-black'>Blogs</p>

        </div>
        {/* main secation */}
        {/* blogs */}
        <div className={`${!active ? "grid" : "hidden"} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 text-black`}>

          <div className='max-w-md p-4 shadow-md flex flex-col items-start justify-center gap-3'>
            <div className='w-full py-2'>
              <img src={"https://codewithmosh.com/_next/image?url=https%3A%2F%2Fuploads.teachablecdn.com%2Fattachments%2F0dKhU49vRbiSSWknbHAR_1920X1357.jpg&w=3840&q=75"} className='w-full h-auto' />
            </div>
            <p className='px-2 py-1 border border-black/50 rounded-full'>Backend</p>
            <p className='text-lg font-medium'>Learning NextJS and Typescript</p>
            <p className='text-sm font-light'>If you need some pages of your application to be static and others dynamic, you should use Next. js. It lets you choose between different rendering methods for each page, whereas React only allows one method — client-side rendering — which isn't as good for performance or SEO.</p>

            <div className='flex items-center gap-2'>
              <p>Published At:</p>
              <p>23rd October 2025</p>
            </div>
            <p className='cursor-pointer text-blue-600 ml-auto'>Read more..</p>
          </div>

          <div className='max-w-md p-4 shadow-md flex flex-col items-start justify-center gap-3'>
            <div className='w-full py-2'>
              <img src={"https://codewithmosh.com/_next/image?url=https%3A%2F%2Fuploads.teachablecdn.com%2Fattachments%2F0dKhU49vRbiSSWknbHAR_1920X1357.jpg&w=3840&q=75"} className='w-full h-auto' />
            </div>
            <p className='px-2 py-1 border border-black/50 rounded-full'>Backend</p>
            <p className='text-lg font-medium'>Learning NextJS and Typescript</p>
            <p className='text-sm font-light'>If you need some pages of your application to be static and others dynamic, you should use Next. js. It lets you choose between different rendering methods for each page, whereas React only allows one method — client-side rendering — which isn't as good for performance or SEO.</p>

            <div className='flex items-center gap-2'>
              <p>Published At:</p>
              <p>23rd October 2025</p>
            </div>
            <p className='cursor-pointer text-blue-600 ml-auto'>Read more..</p>
          </div>

          <div className='max-w-md p-4 shadow-md flex flex-col items-start justify-center gap-3'>
            <div className='w-full py-2'>
              <img src={"https://codewithmosh.com/_next/image?url=https%3A%2F%2Fuploads.teachablecdn.com%2Fattachments%2F0dKhU49vRbiSSWknbHAR_1920X1357.jpg&w=3840&q=75"} className='w-full h-auto' />
            </div>
            <p className='px-2 py-1 border border-black/50 rounded-full'>Backend</p>
            <p className='text-lg font-medium'>Learning NextJS and Typescript</p>
            <p className='text-sm font-light'>If you need some pages of your application to be static and others dynamic, you should use Next. js. It lets you choose between different rendering methods for each page, whereas React only allows one method — client-side rendering — which isn't as good for performance or SEO.</p>

            <div className='flex items-center gap-2'>
              <p>Published At:</p>
              <p>23rd October 2025</p>
            </div>
            <p className='cursor-pointer text-blue-600 ml-auto'>Read more..</p>
          </div>
        </div>
        {/* blogs/// */}
        {/* projects */}
        <div className={`${active ? "grid" : "hidden"} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 text-black`}>
          <div className='max-w-md p-4 shadow-md flex flex-col items-start justify-center gap-3'>
            <div className='w-full py-2'>
              <img src={"https://codewithmosh.com/_next/image?url=https%3A%2F%2Fuploads.teachablecdn.com%2Fattachments%2F0dKhU49vRbiSSWknbHAR_1920X1357.jpg&w=3840&q=75"} className='w-full h-auto' />
            </div>
            <p className='px-2 py-1 border border-black/50 rounded-full'>Backend</p>
            <p className='text-lg font-medium'>Learning NextJS and Typescript</p>
            <p className='text-sm font-light'>If you need some pages of your application to be static and others dynamic, you should use Next. js. It lets you choose between different rendering methods for each page, whereas React only allows one method — client-side rendering — which isn't as good for performance or SEO.</p>

            <div className='flex items-center gap-2'>
              <p>Published At:</p>
              <p>23rd October 2025</p>
            </div>
            <p className='cursor-pointer text-blue-600 ml-auto'>Read more..</p>
          </div>
        </div>
        {/* projects */}
        {/* main section //// */}
      </div>


    </div>
  )
}

export default Projects