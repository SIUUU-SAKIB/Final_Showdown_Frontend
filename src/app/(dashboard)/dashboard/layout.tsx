import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

const Layout = async ({ children }: {
    children: React.ReactNode
}) => {
    const cookieStore = await cookies()
    const token = cookieStore.get("accessToken")
    if(!token) {
        redirect('/login')
    }
    return (
          <div className="min-w-screen min-h-screen bg-gray-950">
      <div className="max-w-screen-2xl mx-auto bg-black min-h-screen flex flex-col lg:flex-row ">
        {/* Sidebar for large screens */}
        <ul className="max-w-[300px] min-h-screen bg-white lg:flex-col items-start justify-start px-6 py-4 gap-4 text-black hidden lg:flex">
          <li className="text-purple-600 text-4xl font-semibold mb-6">Dashboard</li>
          <li><Link className="text-xl font-light hover:text-purple-600" href="/">Home</Link></li>
          <li><Link className="text-xl font-light hover:text-purple-600" href="/dashboard">Blogs</Link></li>
          <li><Link className="text-xl font-light hover:text-purple-600" href="/dashboard/dashprojects">Projects</Link></li>
        </ul>

        {/* Top navbar for mobile */}
        <ul className="w-full h-[60px] bg-white items-center px-6 py-4 gap-4 text-black flex justify-between lg:hidden shadow-md">
          <li className="text-purple-600 text-3xl font-semibold">Dashboard</li>
          <div className="flex gap-6">
            <Link className="text-lg font-light hover:text-purple-600" href="/">Home</Link>
            <Link className="text-lg font-light hover:text-purple-600" href="/dashboard">Blogs</Link>
            <Link className="text-lg font-light hover:text-purple-600" href="/dashboard/dashprojects">Projects</Link>
          </div>
        </ul>

        {/* Main content */}
        <div className="flex-1 w-full min-h-screen p-6 text-white">
          {children}
        </div>
      </div>
    </div>
    )
}

export default Layout