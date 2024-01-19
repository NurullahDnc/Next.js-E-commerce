
//
//? giris yapan kulanıcının bilgilerini tutacak, istedigimiz tum sayfada tanımlanacak

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from '@/libs/prismadb'


//asenkron func.
export async function getSession() {
    //olusturdugumuz getServerSession icerisindeki authoptions'ları return et
    return await getServerSession(authOptions);
}


export async function getCurrentUser() {
    
    try {
        //kulanıcıyı func. al degiskene at
        const session = await getSession();

        //kulanıcının email yoksa return bos don
        if (!session?.user?.email) {
            return null
        }
        
        //prizma uzerinde kulanıncın email'ini bulma
        const currentUser = await prisma.user.findUnique({
            where:{
                //user tablosunda, session.user.email olan kulanıcıyı buluyor
                email: session.user.email
            }
        })

        //kulanıcıyı bulunmaz ise
        if(!currentUser) {
            return null
        }

        //varsa return et
        return{
            ...currentUser,
            //currentUser icerisinde createAt toISOString buna cevir  
            createAt: currentUser.createAt.toISOString(),
            updateAt: currentUser.updateAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null

        }



    } catch (error: any) {
        //hata varsa null don
        return null
    }
}
