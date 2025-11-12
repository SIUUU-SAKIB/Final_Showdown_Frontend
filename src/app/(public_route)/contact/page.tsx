import Footer from '@/components/home/Footer'
import Nav from '@/components/home/Nav'
import ContactComp from '@/components/Others/ContactComp'

const ContactPage = () => {
  return (
    <div className='min-w-screen bg-white min-h-screen gap-4 md:gap-16 flex flex-col'>
            <div className='min-w-screen bg-linear-to-r from-indigo-400/80 via-blue-500/80 to-cyan-400 h-[20vh] text-black '>
                <Nav />
                <div className='max-w-screen-2xl mx-auto h-[20vh] mt-4  flex  items-center justify-between gap-8 rounded-xl shadow-xl bg-white '>
                    <h1 className='text-center w-full font-semibold text-5xl md:text-7xl grid'>Contact Me</h1>
                </div>
            </div>
            <div className='py-16 '>
              <ContactComp/>
            </div>
            <Footer/> 
        </div>
  )
}

export default ContactPage