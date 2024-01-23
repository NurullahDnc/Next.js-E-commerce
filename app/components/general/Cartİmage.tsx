import Image from 'next/image'
import React from 'react'

interface CartİmageProps{
  image: string,
  text: string
}

const Cartİmage :React.FC<CartİmageProps> = ({image, text}) => {
  return (
    <div className='md:p-2 p-2 relative'>
      <div className='flex gap-2 justify-around  h-[100%] object-contain '>
        <img  src={image} alt="" />
 
      </div>
      <div className=' flex justify-center items-center ' >
        <button 
        className='w-[65px] md:w-[150px] text-[8px] md:text-lg bottom-2 md:bottom-5 absolute h-[20px] md:h-[40px] bg-black text-whites flex justify-center items-center rounded-full ' >
          {text}
        </button>

      </div>
    </div>
  )
}

export default Cartİmage
