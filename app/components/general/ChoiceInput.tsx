import { Icon } from '@mui/material'
import { Value } from '@prisma/client/runtime/library'
import React from 'react'
import { IconType } from 'react-icons'

//* product olusturmada category secimi
interface ChoiceInputProps{
    text: string
    icon: IconType
    onClick: (Value: string) => void
    selected?: boolean
}

const ChoiceInput:React.FC<ChoiceInputProps> = ({text, icon: Icon, onClick, selected}) => {
  return (
    <div onClick={()=> onClick(text)} className={`flex items-center w-[85px] md:w-[150px] cursor-pointer gap-2 justify-center h-16 border ${selected? "border-black":"border-slate-200"} `} >
      <Icon />
      <span  className='text-grays text-lg ' >{text}</span>
    </div>
  )
}

export default ChoiceInput
