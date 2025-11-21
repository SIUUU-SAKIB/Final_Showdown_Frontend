"use client"
import { loginUser } from '@/lib/api'
import Nav from '@/components/home/Nav'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginPage = () => {
    const router = useRouter()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [errorMessage, setErrorMessage] = useState<string>("")

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        setErrorMessage("") // clear old errors

        try {
            await loginUser(email, password)
            console.log("Login Successful")

            window.location.reload()
            router.push("/")
        } catch (error: any) {
            console.log(error)
            if (error?.response?.status === 401) {
                setErrorMessage("Wrong email or password")
            } else {
                setErrorMessage("Something went wrong. Please try again.")
            }
        }
    }

    return (
        <div className='min-w-screen'>
            <Nav />
            <div className='max-w-5xl min-h-screen bg-black mx-auto shadow-2xl  py-12 gap-12 text-white'>

                <form 
                    onSubmit={handleSubmit} 
                    className='max-w-lg flex flex-col items-center gap-6 border border-purple-400/50 py-12 px-8 shadow-lg shadow-purple-400 mx-auto'
                >
                    <h1 className='text-4xl text-white'>Login</h1>

                    {/* Error message */}
                    {errorMessage && (
                        <p className="w-full text-red-400 text-sm bg-red-500/10 border border-red-400/30 px-3 py-2 rounded">
                            {errorMessage}
                        </p>
                    )}

                    <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        type='email' 
                        placeholder='Your Email' 
                        className='w-full py-3 border border-purple-400/20 bg-black px-2 outline-none focus:border-purple-400 transition-all duration-300' 
                        required 
                    />

                    <input 
                        onChange={(e) => setPassword(e.target.value)} 
                        type="text" 
                        placeholder='Password' 
                        className='w-full py-3 border border-purple-400/20 bg-black px-2 outline-none focus:border-purple-400 transition-all duration-300' 
                        required 
                    />

                    <button 
                        type='submit' 
                        className='w-full py-4 border border-purple-400/20 px-2 transition-all duration-300 bg-transparent cursor-pointer hover:bg-purple-500 text-white'
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}

export default LoginPage
