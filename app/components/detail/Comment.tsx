import { RxAvatar } from 'react-icons/rx'
import React from 'react'
import { Avatar } from '@mui/material'

export default function Comment({prd}: {prd:any}) {
  return (
    <div className='border w-full md:w-2/3 mt-5 p-3 rounded-md'>
        <div className=' flex items-center mb-3'>
            {/* <RxAvatar size="25" /> */}
            <Avatar component={RxAvatar} image={prd?.user?.image} />
            <div className='px-2 text-xl '>{prd?.user?.name} </div>
        </div>  
        <div>
            {prd?.comment}    
        </div>       
    </div>
  )
}
