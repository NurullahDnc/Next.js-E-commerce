"use client"
import CategoryProduct from '@/app/category/[categoryId]/page';
import { Html } from 'next/document';
import { useRouter } from 'next/navigation';
import React from 'react'
import { CiUser } from "react-icons/ci";

export default function Category() {
  const router = useRouter();

    const categoryList = [
    { id: 1, name: 'Ayakkabi', icon: <CiUser /> },
    { id: 2, name: 'Tisort', icon: <CiUser /> },
    { id: 3, name: 'Sweatshirt', icon: <CiUser /> },
    { id: 4, name: 'Ceket-ve-Mont', icon: <CiUser /> },
    { id: 5, name: 'Aksesuar', icon: <CiUser /> },
    { id: 6, name: 'Esofman-Alti', icon: <CiUser /> },
  ];

  return (
    <div className='flex items-center justify-center gap-2 md:gap-5  my-3  overflow-x-auto'>
      
      {
        categoryList.map((category, index)=>(
          <div onClick={()=> router.push(`/category/${category.name}/`)} 
          className='flex border text-[9px] md:text-lg text-blacks rounded-full min-w-[120px] px-4 mb-2 py-1 justify-center items-center  cursor-pointer ' 
          key={index}>
             {category.name} 
          </div>
        ))
      }
    
    </div>
  )
}
