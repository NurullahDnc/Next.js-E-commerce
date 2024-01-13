import React from 'react'

//page sarmalama
export default function PageContainers({children}: {children: React.ReactNode}) {
  return (
    <div className='px-3 md:px-10'>
        {children}
    </div>
  )
}
