"use client"
import React, { useState } from 'react'


const Experience = () => {
    const [active, setActive] = useState(true)
    return (
        <div className='min-w-screen min-h-screen bg-linear-to-r from-indigo-400/80 via-blue-500/80 to-cyan-400 flex items-center justify-center relative'>
            <div className='max-w-5xl mx-auto flex items-center justify-center flex-col'>
                <div className={` flex ml-4 md:mr-8 gap-2 text-black`}>
                    <button onClick={() => setActive(true)} className={`p-4 text-sm font-semibold rounded-sm ${active ? "bg-white" : "bg-white/10 shadow-xs text-white"} bg-white cursor-pointer`}>My Experiences</button>
                    <button onClick={() => setActive(false)} className={`p-4 text-sm font-semibold rounded-sm ${!active ? "bg-white" : "bg-white/10 shadow-xs text-white"} bg-white cursor-pointer`}>My Education</button>
                </div>

                {/* main section */}
                <div className='flex md:flex-row gap-4 items-center justify-center min-h-[600px] ml-8 md:ml-0'>
                    {/* section-1 */}
                    <div className='flex flex-col gap-4 h-full justify-evenly'>
                        <p className='text-white font-md py-12'>{active ? "March 2017 to 2020" : "From 2012 to 2014"}</p>
                        <p className='text-white font-md py-12'>{active ? "March 2017 to 2020" : "From 2014 to 2016"}</p>
                        <p className='text-white font-md py-12'>{active ? "March 2017 to 2020" : "From 2018 to 2024"}</p>

                    </div>
                    {/* section-2 */}
                    <div className=' h-[500px] py-8 w-[0.5px] md:w-1 bg-white/50 rounded-full'></div>
                    {/* section-3 */}
                    <div className='flex flex-col gap-4 h-full justify-evenly'>
                        <div className='flex flex-col gap-4 text-white py-8'>
                            <p className='text-lg font-bold'>{active ? "Colorlib" : "SSC"}</p>
                            <p className='text-white text-sm max-w-[150px]'>{active ? "Senior Web Developer Santa monica, Los Angeles" : "The Aided High School, Sylhet."}</p>
                        </div>

                        <div className='flex flex-col gap-4 text-white py-4 md:py-8'>
                            <p className='text-lg font-bold'>{active ? "Colorlib" : "HSC"}</p>
                            <p className='text-white text-sm max-w-[150px]'>{active ? "Senior Web Developer Santa monica, Los Angeles" : "The Aided High School, Sylhet."}</p>
                        </div>

                        <div className='flex flex-col gap-4 text-white py-8'>
                            <p className='text-lg font-bold'>{active ? "Colorlib" : "BBA"}</p>
                            <p className='text-white text-sm max-w-[150px]'>{active ? "Senior Web Developer Santa monica, Los Angeles" : "The Aided High School, Sylhet."}</p>
                        </div>
                    </div>
                </div>
                {/* main section //// */}
            </div>
        </div>
    )
}

export default Experience