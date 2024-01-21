"use client"
import CategoryProduct from '@/app/category/[categoryId]/page';
import { useRouter } from 'next/navigation';
import React from 'react'
import { CiUser } from "react-icons/ci";

export default function Category() {
  const router = useRouter();

  const categoryList = [
    
    {
      id: 1, 
      name: "Ayakkabi",
      icon: CiUser
  },
  {
      id: 2, 
      name: "Bilgisayar",
      icon: CiUser,
  }, {
    id: 3, 
      name: "Telefon",
      icon: CiUser
  }, {
      id: 4, 
      name: "Mont",
      icon: CiUser
  }, {
    id: 5, 
      name: "kazak",
      icon: CiUser
  }, {
    id: 6, 
      name: "bot",
      icon: CiUser
  },
    
  ]

  return (
    <div className='flex items-center justify-center gap-3 md:gap-10 px:3 md:px-10 my-5 md:my-2 py-3 md:py-5 overflow-x-auto'>
      {
        categoryList.map((category, index)=>(
          <div onClick={()=> router.push(`/category/${category.name}/`)} className='border text-slate-800 rounded-full min-w-[100px] justify-center items-center flex flex-1 px-4 py-2 cursor-pointer ' key={index}>
             {category.name} 
          </div>
        ))
      }
    
    </div>
  )
}
