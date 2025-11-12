import Footer from '@/components/home/Footer';
import Nav from '@/components/home/Nav';
import SeparateHero from '@/components/Others/SeparateHero';


const Aboutpage = () => {
    return (
        <div className='min-w-screen bg-white min-h-screen gap-4 md:gap-16 flex flex-col'>
            <div className='min-w-screen bg-linear-to-r from-indigo-400/80 via-blue-500/80 to-cyan-400 h-[30vh] text-black '>
                <Nav />
                <div className='max-w-screen-2xl mx-auto h-[20vh] md:[30vh] mt-4 lg:mt-20 flex flex-col lg:flex-row items-center justify-between gap-8 rounded-xl shadow-xl py-12 bg-white -mb-24 '>
                    <h1 className='text-center w-full font-bold text-5xl md:text-7xl grid'>About Me</h1>
                </div>
            </div>
            <div className='py-16 h-auto '>
                <SeparateHero/>
            </div>
            <Footer/> 
        </div>
    )
}

export default Aboutpage;