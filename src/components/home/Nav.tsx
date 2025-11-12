"use client"

import { useAuth } from "@/Context/AuthContext"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { IoMdClose, IoMdMenu } from "react-icons/io"

const Nav = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { user } = useAuth()
  console.log(user)
  const nav = [
    { link: "/", name: "home" },
    { link: "/about", name: "about" },
    { link: "/services", name: "services" },
    { link: "/blog", name: "blog" },


  ]
  return (
    <div className={`min-w-screen ${open ? "bg-black" : "bg-transparent"} h-20 flex items-center transition-all transition-duration-800 justify-between px-4 lg:px-24 relative`}>
      <Link href={'/'} className='text-4xl font-black'>SAKIB</Link>
      <ul className="hidden gap-2 lg:flex items-center">
        {
          nav.map(nav => <li key={nav.link}><Link href={`${nav.link}`} className={`text-sm font-regular uppercase trasnsition ${pathname === nav.link ? "font-bold underline" : "text-white"}`}>{nav.name}</Link></li>)
        }
        {user ? (
          <li className="flex gap-2 items-center justify-center">
            <Link href="/dashboard" className="text-white uppercase">Dashboard</Link>
            <Link href={'/profile'}><img src={user?.url} className="w-10 h-10 object-cover rounded-full border border-white cursor-pointer" /></Link></li>

        ) : (
          <li className="flex items-center gap-2">
            <Link href="/contact" className="text-white uppercase">
              Contact
            </Link>
            <Link href="/login" className="text-white uppercase">
              Login
            </Link>
          </li>
        )}
      </ul>
      {/* hamburger */}
      <div className="flex lg:hidden">
        <IoMdMenu onClick={() => setOpen(true)} className={`cursor-pointer text-4xl ${open ? "hidden" : "block"}`} />
        <IoMdClose onClick={() => setOpen(false)} className={`cursor-pointer text-4xl ${!open ? "hidden" : "block"}`} />
      </div>
      <ul className={`gap-4 flex flex-col absolute bg-black w-full left-0  ${open ? "top-16 opacity-100" : "-top-80 opacity-0"} transition-all transition-duration-800 items-start px-4 py-8`}>
        {user ? (
          <li className="flex gap-2 items-center"> <Link href={'/profile'}><img src={user?.url} className="w-10 h-10 object-cover rounded-full border border-white cursor-pointer" /></Link><p className="font-md font-semibold">{user?.name}</p></li>

        ) : (
          <li>
            <Link href="/login" className="text-white uppercase">
              Login
            </Link>
          </li>
        )}
        {
          nav.map(nav => <li className="w-full cursor-pointer border-b border-white/30" key={nav.link}><Link href={`${nav.link}`} className={`text-md font-regular uppercase trasnsition ${pathname === nav.link ? "text-white font-semibold " : "text-white"} `}>{nav.name}</Link></li>)
        }

      </ul>
      {/* ///hamburger */}
    </div>
  )
}

export default Nav