import About from '@/components/home/About'
import Hero from '@/components/home/Hero'
import Nav from '@/components/home/Nav'
import React from 'react'

const MainPage = () => {
  return (
    <div className='bg-zinc-100'>
      <Hero />
      <About />
    </div>
  )
}

export default MainPage