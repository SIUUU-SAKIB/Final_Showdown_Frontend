import { House, Mail, Phone } from 'lucide-react'
import React from 'react'

const ContactComp = () => {
  return (
    <div className='max-w-6xl mx-auto py-12 flex items-center justify-center'>
      <div className='flex flex-col md:flex-row items-center justify-evenly gap-8 max-h-[500px] w-full'>
        {/* address */}
        <div className='flex flex-col gap-6 p-4 items-start text-black'>
          <div className='flex gap-4 items-start '>
            <House className='text-lg text-purple-500 font-light' />
            <div className='flex flex-col gap-1 items-start'>
              <p className='text-sm font-semibold'>Sylhet, Bangladesh</p>
              <p className='text-sm font-light'>Masimpur, Sylhet</p>
            </div>
          </div>

          <div className='flex gap-4 items-start '>
            <Phone className='text-lg text-purple-500 font-light' />
            <div className='flex flex-col gap-1 items-start'>
              <p className='text-sm font-semibold'>017964712121</p>
              <p className='text-sm font-light'>Sat to Thur 10am to 6pm</p>
            </div>
          </div>

          <div className='flex gap-4 items-start '>
            <Mail className='text-lg text-purple-500 font-light' />
            <div className='flex flex-col gap-1 items-start'>
              <p className='text-sm font-semibold'>Sakib123@gmail.com</p>
              <p className='text-sm font-light'>Send me your query anytime!</p>
            </div>
          </div>
        </div>
        {/* address /// */}

        {/* inputs */}
        <div className={"flex gap-4 items-start text-zinc-500"}>
          <form className='flex flex-col gap-2'>
            <input placeholder='Enter your name' className='py-1 px-4 border border-black/20 outline-none font-light text-sm' />
            <input placeholder='Enter your email' className='py-1 px-4 border border-black/20 outline-none font-light text-sm' />
            <textarea placeholder='Enter Message' className='py-2 px-4 border border-black/20 outline-none font-light text-md'/>
            <button className='text-sm font-semibold w-full bg-purple-500 py-2 text-white'>Send</button>
          </form>
        </div>
        {/* inputs */}
      </div>
s
    </div>
  )
}

export default ContactComp