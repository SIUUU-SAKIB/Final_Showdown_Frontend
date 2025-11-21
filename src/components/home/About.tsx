"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { GoPeople } from 'react-icons/go'
import { GrProjects } from 'react-icons/gr'
import { TbLogs } from 'react-icons/tb'

const About = () => {
    const skills = [
        { name: "SQL", percentage: "80%" },
        { name: "React", percentage: "90%" },
        { name: "NextJS", percentage: "95%" },
        { name: "UI/UX", percentage: "85%" },
        { name: "NoSql", percentage: "90%" },
    ]
    return (
        <motion.div initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} className='min-w-screen  py-12'>
            <div className='max-w-7xl  mx-auto flex flex-col lg:flex-row items-center px-4'>
                {/* 1st part */}
                <div className='w-full lg:w-1/2 flex flex-col gap-8 items-start text-black p-8'>
                    <h1 className='uppercase text-5xl font-semibold'>About myself</h1>
                    <p className='text-md font-regular text-black/60 '>I’m Aminul Islam Sakib, a passionate Full Stack Web Developer specializing in Next.js, TypeScript, and Node.js. I create fast, accessible, and scalable web applications with clean code, modern design, and a focus on seamless user experiences and product quality.</p>


                    {/*boxes  */}
                    <div className='w-full flex flex-col lg:flex-row items-center gap-4 '>
                        <div className='px-8 py-4 border border-zinc-300/60 rounded-lg flex flex-col gap-2 items-start w-full'>
                            <TbLogs className='text-blue-500 text-2xl' />
                            <p className='text-4xl font-bold'>350</p>
                            <p className='text-black/40 text-md'>Total Blgos</p>
                        </div>

                        <div className='px-8 py-4 border border-zinc-300/60 rounded-lg flex flex-col gap-2 items-start w-full'>
                            <GrProjects className='text-blue-500 text-2xl' />
                            <p className='text-4xl font-bold'>250</p>
                            <p className='text-black/40 text-md'>Total Projects</p>
                        </div>

                        <div className='px-8 py-4 border border-zinc-300/60 rounded-lg flex flex-col gap-2 items-start w-full'>
                            <GoPeople className='text-blue-500 text-2xl' />
                            <p className='text-4xl font-bold'>150</p>
                            <p className='text-black/40 text-md'>Total Clients</p>
                        </div>
                    </div>
                </div>
                {/* 2nd part */}
                <div className='w-full lg:w-1/2  flex flex-col items-start gap-2 p-8'>
                    {
                        skills.map(e => <div key={e.name} className='flex flex-col gap-2 py-2 w-full'>
                            <p className='text-md font-semibold text-black'>{e.name} {e.percentage}</p>
                            <div className='border border-black/10 rounded-full w-full'>
                                <div
                                    className="bg-linear-to-r from-indigo-400/80 via-blue-500/80 to-cyan-400 h-2 rounded-full m-1"
                                    style={{ width: `${e.percentage}` }}
                                ></div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default About