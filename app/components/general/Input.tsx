"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

//input alacagı degerleri tip tanımlaması yapıldı
interface InputProps{
 id: string
 placeholder: string
 disabled?: boolean
 type: string
 required?: boolean
 register: UseFormRegister<FieldValues>
 errors: FieldErrors
}
const Input:React.FC<InputProps> = ({
    id, placeholder, disabled, type, required, register, errors
}) => {
  return (
    //errors id verdik, hata id gore donmesi icin,  register tanımlamsı kutuphane kulanıldı 
    <input className={` w-full h-12 p-3 rounded-md outline-none my-2 ${errors[id] ? "border border-reds" : "border border-grays"}`} id={id} placeholder={placeholder} disabled={disabled} type={type} {...register(id, {required})}  />
  )
}

export default Input