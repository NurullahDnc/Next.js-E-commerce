"use client"
import { useRouter } from "next/navigation"

export default function Logo() {
  const router = useRouter()

  return (
    <div onClick={()=> router.push("/")} className='bg-gray-800 px-3 py-1 rounded-md text-lg md:text-2xl cursor-pointer '>
      Logo
    </div>
  )
}
