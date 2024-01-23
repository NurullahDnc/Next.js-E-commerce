"use client"
import UseCart from '@/hooks/UseCart';
import { useRouter } from "next/navigation"
import React from 'react'
import { SlBasket } from "react-icons/sl";


export default function CardCount() {

  const router = useRouter();
  const {cartPrdcts } = UseCart();

  return (
    <div onClick={()=> router.push("/cart")} className='md:flex hidden relative cursor-pointer'>
      <SlBasket size="21" />
      <div className='absolute -top-2 -right-2 text-sm w-4 h-4 bg-reds flex justify-center items-center rounded-full'>
        { cartPrdcts ? <div>{cartPrdcts?.length}</div>: 0 } 
      </div>
    </div>
  )
}
