"use client"
import React, { useEffect } from 'react'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import AuthContainer from '../containers/AuthContainer'
import Input from '../general/Input'
import Heading from '../general/Heading'
import Button from '../general/Button'
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { User } from '@prisma/client'

interface LoginClientProps{
  currentUser: User | null | undefined
}

//register - "react-hook-form" kutuphanesi kulanıldı
const LoginClient:React.FC<LoginClientProps> = ({currentUser}) => {

    const router = useRouter();
    //kutuphane yapısı
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<FieldValues>()
      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        signIn("credentials",{
            //credentials'a tum data'yı don
            ...data,
            redirect: false
        }).then((callback)=>{
             //istek olumu ise islemleri yap, erros donerse, pages/api/auth tanımladıgımız errorları yazdır
             if(callback?.ok){
                toast.success("giriş basarılı");
                router.push("/cart");
                router.refresh();
            }

            if (callback?.error) {
                toast.error(callback.error);
            }
        })
      }

      useEffect(()=>{
        if (currentUser) {
          router.push("/cart")
        }
      },[])
    
  return (
    <AuthContainer>
      <div className='w-full md:w-[500px] my-5 p-3 shadow-lg rounded-md '>
        <Heading text='Login' center />
        <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required/>
        <Input placeholder="Parola" type="password" id="password" register={register} errors={errors} required/>
        <Button onClick={ handleSubmit(onSubmit)} text='Giriş yap' />
        <div> <Link className='flex justify-center my-3 underline' href={"/register"}>Hesabım Yok</Link> </div>
        <div className='text-center font-bold text-2xl my-3'>QR</div>
        <Button onClick={()=>{}}  text='google ile Giriş yap' outline icon={FaGoogle} />
      </div>
    </AuthContainer>
  )
}

export default LoginClient
