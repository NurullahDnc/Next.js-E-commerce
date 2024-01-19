import React from 'react'


//* uyarı comporents
export default function WarningText({text}: {text: string}) {
  return (
    <div className='text-lg h-screen w-full flex justify-center items-center text-slate-600 '>
      {text}
    </div>
  )
}
