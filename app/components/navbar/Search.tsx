import React from 'react'

export default function Search() {
  return (
    <div className='   md:flex justify-center flex-1 '>
        <input className='py-2 px-2 w-2/3 border-none outline-none text-black ' type="text" placeholder='Arama Yap...' />
        <button className='py-2 px-2'>Ara</button>
    </div>
  )
}
