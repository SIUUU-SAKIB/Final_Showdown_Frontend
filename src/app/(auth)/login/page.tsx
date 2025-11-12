"use client"
import { loginUser } from '@/lib/api'
import Nav from '@/components/home/Nav'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginPage = () => {
    const router = useRouter()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = async(e: any) => {
        e.preventDefault()
        try{
         await loginUser(email, password);
         console.log("Login Successfull")
         window.location.reload()
         router.push("/")
        }catch(error) {
            console.log(error)
        } 
    }
    return (
        <div className='min-w-screen'>
            <Nav />
            <div className='max-w-5xl min-h-screen bg-black mx-auto shadow-2xl flex flex-col  justify-center gap-12 text-white'>

                <form onSubmit={handleSubmit} className='max-w-lg flex flex-col items-center justify-center gap-6 border border-purple-400/50 py-12 px-8 shadow-lg shadow-purple-400 mx-auto'>
                    <h1 className='text-4xl text-white'>Login</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Your Email' className='w-full py-3 border border-purple-400/20 bg-black px-2 outline-none focus:border-purple-400 transition-all duration-300' required />

                    <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Password' className='w-full py-3 border border-purple-400/20 bg-black px-2 outline-none focus:border-purple-400 transition-all duration-300' required />
                    <button type='submit' className='w-full py-4 border border-purple-400/20  px-2 transition-all duration-300 bg-transparent cursor-pointer hover:bg-purple-500 text-white'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default LoginPage