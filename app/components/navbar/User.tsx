"use client"
import { User } from '@prisma/client'
import { useState } from 'react';
import { CiUser } from "react-icons/ci";
import {signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { register } from 'module';


interface userProps{
  currentUser: User | null | undefined
}

const  User:React.FC<userProps> =({currentUser})=> {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  
  //cıkıs islemi
  const menuFunc =(type:any)=>{
      if (type == "logout") {
        setOpenMenu(false)
        router.push("/login")
        signOut()
      }
      else if(type == "register") {
          
        router.push("/register")
      }else{
        router.push("/login")
      }
  }

  console.log(currentUser,"currentUser");
  

  return (
    <div className=' md:flex hidden relative'>
      <div onClick={()=> setOpenMenu(!openMenu) } className='flex gap-1 mr-2 cursor-pointer'>
          <CiUser size="25" />
          {
            currentUser?<div> {currentUser.name} </div>: <div>User</div>
          }
      </div>
      <div className='absolute top-10 shadow-lg  bg-red-900 right-0 w-[150px] rounded-md'>
        {
          //openMenu true ise
          openMenu &&(
            <div className='p-2'>
              {
                currentUser? (

                  <div>
                      <div className='cursor-pointer'>Admin</div>
                      <div onClick={()=> menuFunc("logout")} className='cursor-pointer' >logout</div>
                  </div> ) : (
                
                  <div>
                      <div onClick={()=> menuFunc("register")} className='cursor-pointer'>register</div>
                      <div onClick={()=> menuFunc("login")} className='cursor-pointer'>login</div>
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default User

//setOpenMenu(!openMenu)   = tıklandıgında true, false tersini al