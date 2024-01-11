import React from 'react';
import Logo from './Logo';
import Search from './Search';
import CardCount from './CardCount';
import User from './User';
import HamburgerMenu from './HamburgerMenu';
    

export default function NavBar() {
  return (
    <div className='flex items-center justify-between md:gap-10 px-3 h-16 gap-3 bg-gray-700 text-white '>

        <Logo />
        <Search />
        <CardCount />
        <User/>
        <HamburgerMenu />
      
    </div>
  )
}
