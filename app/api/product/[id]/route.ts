import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'
import toast from "react-hot-toast";

//* ürünü silme istek atıyoruz
export  async function DELETE(
    //parametreler,    ,params altından id gelecek 
    request: Request, {params} : {params: {id : string}}

) {
    try {
        const currentUser = await getCurrentUser();

    //kulancı kontrolu
   if(!currentUser || currentUser.role !== "ADMIN"){
        return NextResponse.error()
    }
    //prizma icerisinde product'larda delete iselemi
    const product = await prisma.product.delete({
        //disarıdan gelen id gore
        where:{
            id: params.id
        }
    })

    return NextResponse.json(product)
    } catch (error) {
        toast.success("ürün silinmedi")
    }
}