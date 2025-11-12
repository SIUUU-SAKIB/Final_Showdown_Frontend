import React from 'react'
import { Building2 } from "lucide-react";
const Offering = () => {
    return (
        <div className='min-h-screen min-w-screen flex items-center justify-center relative'>
            <div className='max-w-7xl mx-auto p-12 flex flex-col items-center justify-center gap-8'>
                <div className='uppercase flex flex-col gap-4 items-center text-center text-black py-8'>
                    <p className='text-4xl font-semibold'>MY OFFERINGS TO CLIENTS</p>
                    <p className='text-sm font-light  text-black/70'>When you browse online, you might notice big price differences — and it can be confusing. The same goes for creative services. You’ll find plenty of options, but not all deliver the same value.

                        I focus on providing high-quality, customized work designed to match your goals, not just the lowest price tag. Every project I take on is crafted with care, creativity, and clear communication — so you always know exactly what you’re getting.</p>
                </div>


                <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 place-self-center'>
                    <div className="max-w-md md:min-w-md rounded-sm bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md text-black ">
                        <div className="flex items-start flex-col gap-4">
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUMNKPDhzSHxiL9yCeg8GzwAQT61PyqVnhtdwlquUZ9eSFdNF0SxWZlTMzQIQjOT_O78&usqp=CAU"} className='w-[200px] object-cover' />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold uppercase">Full Stack Application</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600">I specialize in building end-to-end web applications that combine sleek, responsive front-end design with robust, secure back-end functionality. From user-friendly interfaces to scalable APIs and databases, I ensure every layer works seamlessly together. Using modern technologies like React, Node.js, Express, and MongoDB, I create digital solutions that are fast, reliable, and tailored to your business goals. Whether you need a dynamic website, an admin dashboard, or a complex enterprise system — I deliver performance, precision, and clean code every time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-md md:min-w-md rounded-sm bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md text-black ">
                        <div className="flex items-start flex-col gap-4">
                            <img src={"https://i.ytimg.com/vi/v0t42xBIYIs/maxresdefault.jpg"} className='w-[200px] shadow-lg object-cover' />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold uppercase">Backend or Frontend</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600">Whether it’s crafting a stunning frontend that engages users or building a powerful backend that drives performance, I ensure every part of your application works in perfect harmony.
                                    On the frontend, I focus on clean design, responsiveness, and intuitive user experiences using frameworks like React and Next.js.
                                    On the backend, I develop secure, efficient, and scalable systems powered by Node.js, Express, and modern databases like MongoDB or PostgreSQL.
                                    Together, these layers create seamless, high-performing applications that look great and work even better.</p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-md md:min-w-md rounded-sm bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md text-black ">
                        <div className="flex items-start flex-col gap-4">
                            <img src={"https://bif.telkomuniversity.ac.id/wp-content/uploads/2024/09/Mengapa-UI-UX-Design-Sangat-Penting-dalam-Pengembangan-Aplikasi.png"} className='w-[200px] object-cover'
                            />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold uppercase">UI/UX</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600">Great design is more than visuals — it’s about creating experiences that feel effortless. I focus on crafting intuitive, user-centered interfaces that balance beauty with usability.
                                    From wireframes and prototypes to final layouts, I design with purpose — ensuring every click, scroll, and interaction feels natural. Using tools like Figma and Adobe XD, I turn ideas into smooth, engaging digital experiences that connect users to your brand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offering