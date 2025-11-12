"use client"
import Nav from '@/components/home/Nav'
import { useAuth } from '@/Context/AuthContext'
import { logoutUser } from '@/lib/api'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const ProfilePage = () => {
  const router = useRouter()
  const { user } = useAuth()
  return (
    <div className='min-w-screen min-h-screen bg-slate-900'>
      <Nav />
      <div className='max-w-4xl mx-auto bg-black min-h-full flex  gap-4 items-center justify-center flex-col md:flex-row py-12'>
        <img src={user?.url} className='min-w-lg p-4 object-contain' />
        <div className='flex flex-col gap-4 items-start h-full '>
          <p className='text-xl font-semibold'>{user?.name}</p>
          <p className='text-xl font-semibold'>{user?.email}</p>
          <button onClick={async () => {
            try {
              await logoutUser()
            toast("Logout Successfull 😍")
            window.location.reload()
              router.push('/login')
            } catch (error) {
              console.log(error)
            }
          }} className='text-md font-semibold px-8 py-2 bg-white text-black cursor-pointer'>Logout</button>
        </div>

      </div>
    </div>
  )
}

export default ProfilePage