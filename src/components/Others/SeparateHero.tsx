import Image from 'next/image'
import { FaCalendarDays, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlineHome } from 'react-icons/md'
import { IoHomeOutline } from 'react-icons/io5'
import { LuFacebook } from 'react-icons/lu'
import { CiInstagram } from 'react-icons/ci'

const SeparateHero = () => (

        <div className="max-w-screen-2xl mx-auto bg-zinc-200/50 h-auto mt-4 lg:mt-20 flex flex-col lg:flex-row items-center justify-between gap-8 rounded-xl shadow-md p-4 lg:p-4  ">
            {/* image */}
            <div className="px-2 lg:w-2/3">
                <Image
                    src="/final2.png"
                    alt="Hero Image"
                    width={1200}
                    height={400}
                    className="rounded-xl w-[1200px]"
                    priority />
            </div>

            {/* text */}
            <div className=" p-6 md:p-12 flex flex-col  items-start text-black">
                <div className='flex flex-col '>
                    <h1 className="text-md text-black mb-4 uppercase leading-2 font-light tracking-widest">Hello everybody, i am</h1>
                    <h1 className='uppercase text-5xl font-bold text-black'>Aminul Islam Sakib</h1>
                </div>
                <p className='mt-2 uppercase  text-lg'>full stack web developer</p>
                <p className='py-4 text-black/70 w-full'>I design and build fast, accessible web apps from idea to production. Typescript, Next.js, Node, and scalable cloud—shipped with clean code and a product mindset.</p>


                <div className='flex flex-col gap-4 items-start py-8'>
                    <div className='flex gap-4'>
                        <FaCalendarDays className='text-2xl font-light text-blue-500 ' />
                        <p className='text-black/70 font-light'>28th October 1947</p>
                    </div>

                    <div className='flex gap-4'>
                        <BsTelephone className='text-2xl font-light text-blue-500 ' />
                        <p className='text-black/70 font-light'>01974121212</p>
                    </div>

                    <div className='flex gap-4'>
                        <AiOutlineMail className='text-2xl font-light text-blue-500 ' />
                        <p className='text-black/70 font-light'>sakib123@gmail.com</p>
                    </div>

                    <div className='flex gap-4'>
                        <IoHomeOutline className='text-2xl font-light text-blue-500 ' />
                        <p className='text-black/70 font-light'>Sylhet, Bangladesh.</p>
                    </div>
                </div>
                {/* social icons */}
                <div className='flex gap-4 items-center '>
                    <div className='p-4 bg-zinc-300/20 rounded-lg cursor-pointer hover:bg-linear-to-r from-indigo-400/80 via-blue-500/80 to-cyan-400 transition duration-300 text-blue-400 hover:text-white'>
                        <LuFacebook className='text-2xl font-light ' />
                    </div>

                    <div className='p-4 bg-zinc-300/20 rounded-lg cursor-pointer hover:bg-linear-to-r from-indigo-400/80 via-blue-500/80 to-cyan-400 transition duration-300 text-blue-400 hover:text-white'>
                        <FaXTwitter className='text-2xl font-light ' />
                    </div>

                    <div className='p-4 bg-zinc-300/20 rounded-lg cursor-pointer hover:bg-linear-to-r from-indigo-400/80 via-blue-500/80 to-cyan-400 transition duration-300 text-blue-400 hover:text-white'>
                        <FaInstagram className='text-2xl font-light ' />
                    </div>
                </div>
            </div>
        </div>


)

export default SeparateHero

