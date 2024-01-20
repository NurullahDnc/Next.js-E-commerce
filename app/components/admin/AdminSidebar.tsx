"use client"
import React from 'react'
import { CiUser } from "react-icons/ci";
import AdminSidebarItem from './AdminSidebarItem';
import { usePathname } from 'next/navigation';


//* Admin sidebar comps
const AdminSidebar = () => {

    //url kontol etme eslestirme
    const pathname = usePathname();

    const adminPanel = [
        {
            name: "özetler",
            icons: CiUser,
            url: "/admin"
        },
        {
            name: "ürün olştur",
            icons: CiUser,
            url: "/admin/create"
        },
        {
            name: "ürünler",
            icons: CiUser,
            url: "/admin/manage"
        },
        {
            name: "siparisler",
            icons: CiUser,
            url: "/admin/order"
        }
    ]

  return (
    <div className=' w-1/6 p-3 border-r h-screen '>
        
        <div>
            {
                adminPanel.map((admin, i)=>(
                    <AdminSidebarItem key={i} seclected={pathname == admin.url} name={admin.name} icon={admin.icons} url={admin.url} />
                ))
            }
        </div>
    </div>
  )
}

export default AdminSidebar
