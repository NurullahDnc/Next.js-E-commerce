import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from '@/libs/prismadb'


export default async function Delete(
    //parametreler,    ,params altından id gelecek 
    request: Request, {params} : {params: {id : string}}

) {
    const currentUser = await getCurrentUser();

    //kulancı kontrolu
    if (!currentUser || currentUser.role !== "ADMIN") {
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
}