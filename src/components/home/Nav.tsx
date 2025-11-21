"use client"

import { useAuth } from "@/Context/AuthContext"
import { logoutUser } from "@/lib/api"
import { LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
import { IoMdClose, IoMdMenu } from "react-icons/io"
import Swal from "sweetalert2"

const Nav = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user } = useAuth()
  const nav = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/service", name: "Services" },
    { link: "/projects/allproject", name: "Projects" },
    { link: "/projects/allblogs", name: "Blogs" },


  ]
  return (
    <div className={`z-100 min-w-screen ${open ? "bg-black" : "bg-transparent"} h-20 flex items-center transition-all transition-duration-800 justify-between px-4 lg:px-24 relative`}>
      <Link href={'/'} className='text-4xl font-black'>SAKIB</Link>
      <ul className="hidden gap-2 lg:flex items-center">
        {
          nav.map(nav => <li key={nav.link}><Link href={`${nav.link}`} className={`text-sm font-regular uppercase trasnsition ${pathname === nav.link ? "font-bold underline" : "text-white"}`}>{nav.name}</Link></li>)
        }
        {user ? (
          <li className="flex gap-2 items-center justify-center">
            <Link href="/dashboard" className="text-white uppercase">Dashboard</Link>
            <img src={user?.url} className="w-10 h-10 object-cover rounded-full border border-white cursor-pointer" />
            <div onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, logout!"
              }).then(async (result) => {
                if (result.isConfirmed) {
                  try {
                    await logoutUser()
                    toast("Logout Successfull 😍")
                    window.location.reload()
                  } catch (error) {
                    console.log(error)
                  }
                  Swal.fire({
                    title: "Success!",
                    text: "Successfully logged out",
                    icon: "success"
                  });
                }
              });

            }} className="flex gap-1 items-center cursor-pointer shadow-sm p-2"><LogOut className="text-red-500 font-bold" /><p>logout</p></div></li>


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
          <li className="flex gap-2 items-center"><img src={user?.url} className="w-10 h-10 object-cover rounded-full border border-white cursor-pointer" /><div onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, logout!"
              }).then(async (result) => {
                if (result.isConfirmed) {
                  try {
                    await logoutUser()
                    toast("Logout Successfull 😍")
                    window.location.reload()
                  } catch (error) {
                    console.log(error)
                  }
                  Swal.fire({
                    title: "Success!",
                    text: "Successfully logged out",
                    icon: "success"
                  });
                }
              });

            }} className="flex gap-1 items-center cursor-pointer shadow-sm p-2"><LogOut className="text-red-500 font-bold" /><p>logout</p></div>
            <Link href="/dashboard" className="text-white uppercase">Dashboard</Link></li>

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