import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className='h-[237px] bg-black flex justify-center items-center '>
      <div className='h-[137px] relative w-full  '>
            <Image src={"/hepsi.jpeg"} alt='' fill className='object-cover' />
      </div>
    </div>
  )
}

