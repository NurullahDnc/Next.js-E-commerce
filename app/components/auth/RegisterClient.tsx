"use client"
import React from 'react'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import AuthContainer from '../containers/AuthContainer'
import Input from '../general/Input'
import Heading from '../general/Heading'
import Button from '../general/Button'
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link'


//register - "react-hook-form" kutuphanesi kulanıldı
const RegisterClient = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<FieldValues>()
      const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)
    
  return (
    <AuthContainer>
      <div className='w-full md:w-[500px] p-3 shadow-lg rounded-md '>
        <Heading text='Register' center />
        <Input id="name" placeholder='name' type='text' register={register} required errors={errors}  />
        <Input id="Email" placeholder='Email' type='text' register={register} required errors={errors}  />
        <Input id="Password" placeholder='Password' type='Password' register={register} required errors={errors}  />
        <Button onClick={ handleSubmit(onSubmit)} text=' Kayıt ol' />
        <div> <Link className='flex justify-center my-3 underline' href={"/login"}>Hesabım Var</Link> </div>
        <div className='text-center font-bold text-2xl my-3'>QR</div>
        <Button onClick={()=>{}} outline icon={FaGoogle} text='google ile kayıt ol' />
      </div>
    </AuthContainer>
  )
}

export default RegisterClient
