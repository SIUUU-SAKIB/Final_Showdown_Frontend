import About from '@/components/home/About'
import Experience from '@/components/home/Experience'
import Footer from '@/components/home/Footer'
import Hero from '@/components/home/Hero'
import Nav from '@/components/home/Nav'
import Offering from '@/components/home/Offering'
import Projects from '@/components/home/Projects'
import React from 'react'

const MainPage = () => {
  return (
    <div className='bg-zinc-100'>
      {/* <Nav/> */}
      <Hero />
      <About />
      <Experience/>
      <Offering/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default MainPage
