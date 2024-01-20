import { getCurrentUser } from '@/app/actions/getCurrentUser'
import getProduct from '@/app/actions/getProduct';
import WarningText from '@/app/components/WarningText';
import ManageClient from '@/app/components/admin/ManageClient';
import AuthContainer from '@/app/components/containers/AuthContainer';
import React from 'react'


//*product create
export default async function Manage() {

  const currentUser = await getCurrentUser();
  const products = await getProduct({category: null});

  //user kontrolu, kulanıcı yoksa ve Admin degil ise uyarı return et, ust'te kulanıcıları aldık
  if (!currentUser || currentUser.role !== "ADMIN") {
    return(
      <WarningText text={"buraya giris yasak"} />

    )
  }
  return (
    // AuthContainer sarmalandı, CreateForm comps imp edildi
        <div className='w-full m-4'>
            <ManageClient products={products} />
        </div>
    )
}
