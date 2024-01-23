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
    <div className='flex items-center mt-5 px-12  md:gap-6 h-16 gap-5 bg-blacks text-whites '>

        <Logo />
        <Search />
        <CardCount />
        <div>
          |
        </div>
        <User currentUser={currentUser} />
        <HamburgerMenu />
      
    </div>
  )
}
