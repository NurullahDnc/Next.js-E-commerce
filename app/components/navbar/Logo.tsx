"use client"
import { useRouter } from "next/navigation"

export default function Logo() {
  const router = useRouter()

  return (
    <div onClick={()=> router.push("/")} className='text-white px-3 py-1 mr-auto rounded-md text-lg md:text-2xl cursor-pointer '>
      Trendyol
    </div>
  )
}
