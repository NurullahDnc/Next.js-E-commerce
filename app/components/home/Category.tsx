import React from 'react'

export default function Category() {
  const categoryList = [
    {name: "Ayakkabı"},
    {name: "Ayakkabı"},
    {name: "Ayakkabı"},
    {name: "Ayakkabı"},
    {name: "Ayakkabı"},
    {name: "Ayakkabı"},
    {name: "Ayakkabı"},
    


  ]
  return (
    <div className='flex items-center justify-center gap-3 md:gap-10 px:3 md:px-10 my-5 md:my-2 py-3 md:py-5 overflow-x-auto'>
      {
        categoryList.map((category, index)=>(
          <div className='border text-slate-800 rounded-full min-w-[100px] justify-center items-center flex flex-1 px-4 py-2 cursor-pointer ' key={index}>
             {category.name} 
          </div>
        ))
      }
    </div>
  )
}
