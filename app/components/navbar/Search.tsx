import React from 'react'
import { CiSearch } from "react-icons/ci";


export default function Search() {
  return (
    <div className='md:flex hidden items-center justify-center '>
        <input 
          className=' px-1 h-8 border-none rounded-md outline-none text-black ' 
          type="text" 
          placeholder='Arama Yap...' />

        <button className='pl-1'> <CiSearch size="27" /> </button>
    </div>
  )
}
