import React from "react"
import { IconType } from "react-icons"

interface ButtonProps{
    text: string
    onclik: (e: React.MouseEvent<HTMLElement >) => void
    small?: boolean
    outline?: boolean
    icon?: IconType
    disabled?: boolean
}

const Button:React.FC<ButtonProps> = ({text, onclik, small, outline, disabled, icon:Icon }) => {
  return (
    <button disabled={disabled} className={`rounded-lg p-3 ${small ? "w-[250px]": " w-full "} ${outline ? "border text-black": "bg-black text-white"} `} onClick={onclik}>
      {Icon && < Icon />}
      {text}
    </button>
  )
}

export default Button