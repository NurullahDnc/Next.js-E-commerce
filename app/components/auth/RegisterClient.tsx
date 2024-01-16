"use client"
import React from 'react'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import AuthContainer from '../containers/AuthContainer'
import Input from '../general/Input'
import Heading from '../general/Heading'
import Button from '../general/Button'
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'
import { signIn } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation'


//register - "react-hook-form" kutuphanesi kulanıldı
const RegisterClient = () => {
    
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<FieldValues>()
      const onSubmit: SubmitHandler<FieldValues> = (data) => {

        //http istegi atıyoruz, data'yı gonderiyoruz
        axios.post("/api/register", data).then(()=>{
            toast.success("kulanıcı olusturuldu");

            //signIn giris yapacak, tanımladıgımız credentials'e kulanıcı bilgilerini gonderiyoruz
            signIn("credentials",{
                email: data.email,
                password: data.password,
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

        })
      }
    
  return (
    <AuthContainer>
      <div className='w-full md:w-[500px] p-3 shadow-lg rounded-md '>
        <Heading text='Register' center />
        <Input id="name" placeholder='name' type='text' register={register} required errors={errors}  />
        <Input id="email" placeholder='Email' type='text' register={register} required errors={errors}  />
        <Input id="password" placeholder='Password' type='Password' register={register} required errors={errors}  />
        <Button onClick={ handleSubmit(onSubmit)} text=' Kayıt ol' />
        <div> <Link className='flex justify-center my-3 underline' href={"/login"}>Hesabım Var</Link> </div>
        <div className='text-center font-bold text-2xl my-3'>QR</div>
        <Button onClick={()=>{}} outline icon={FaGoogle} text='google ile kayıt ol' />
      </div>
    </AuthContainer>
  )
}

export default RegisterClient
