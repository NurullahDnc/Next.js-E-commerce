import { getCurrentUser } from '@/app/actions/getCurrentUser'
import WarningText from '@/app/components/WarningText';
import CreateForm from '@/app/components/admin/CreateForm';
import AuthContainer from '@/app/components/containers/AuthContainer';
import React from 'react'
import { text } from 'stream/consumers';


//*product create
export default async function CreateProduct() {

  const currentUser = await getCurrentUser();

  //user kontrolu, kulanıcı yoksa ve Admin degil ise uyarı return et, ust'te kulanıcıları aldık
  if (!currentUser || currentUser.role !== "ADMIN") {
    return(
      <WarningText text={"buraya giris yasak"} />

    )
  }
  return (
    // AuthContainer sarmalandı, CreateForm comps imp edildi
    <AuthContainer >
        <CreateForm />
    </AuthContainer>
  )
}
