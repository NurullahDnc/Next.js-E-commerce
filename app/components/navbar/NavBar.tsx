import React from 'react';
import Logo from './Logo';
import Search from './Search';
import CardCount from './CardCount';
import User from './User';
import HamburgerMenu from './HamburgerMenu';
import { getCurrentUser } from '@/app/actions/getCurrentUser';
    

export default async function  NavBar() {

  //kulanıcı bilgilerini al
  const currentUser = await getCurrentUser();
  return (
    <div className='flex items-center justify-between md:gap-10 px-3 h-16 gap-3 bg-gray-700 text-white '>

        <Logo />
        <Search />
        <CardCount />
        <User currentUser={currentUser} />
        <HamburgerMenu />
      
    </div>
  )
}
