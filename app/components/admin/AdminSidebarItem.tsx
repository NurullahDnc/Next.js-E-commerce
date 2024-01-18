import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface AdminSidebarItem{
    seclected?: boolean,
    name?: String
    icon: IconType 
    url: string
}

//* admin sidebaritem'ları  "AdminSidebar" func geliyor
const AdminSidebarItem:React.FC<AdminSidebarItem> = ({seclected, name, icon:Icon, url}) => {
  return (
    //menu ıtem= kategoreiden gelen url gore git
    <Link className={`flex gap-3 items-center text-xl my-3   ${seclected?"text-black font-bold":"text-gray-500" } `} href={url} >
        {<Icon size={25} />}
        <div>
            {name}
        </div>
    </Link>
  )
}

export default AdminSidebarItem
