import { getCurrentUser } from '@/app/actions/getCurrentUser';
import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server';

//*product create islemi
export async function POST(request:Request) {
    
    const currentUser = await getCurrentUser();

    //currentUser "kulanıcı " kontrolu
    if (!currentUser || currentUser.role !== "ADMIN") {
        return NextResponse.error();
    }
    //gelen verileri json'a cevirdik
    const body = await request.json();

    const{name, description, price, brand, category, inStock, image } = body;

    //product func, product create edecek
    const product = await prisma.product.create({
        //data iceriidnde name email password gonder
        data:{
            name,
            description,
            price: parseFloat(price),
            brand,
            category,
            inStock,
            image


        }
    })
    return NextResponse.json(product)
}
