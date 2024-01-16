import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server';

//name,email,password buraya post edicez, burada karsılayacaz, bodyleri JSON ceviricez

export async function POST(request:Request) {
    
    //gelen verileri json'a cevirdik
    const body = await request.json();

    const{name, email, password} = body;

    //disarıdan gelen veriyi hash'le
    const hashedpassword = await bcrypt.hash(password, 10)

    //prizma user uzerinden create yap
    const user = await prisma.user.create({
        //data iceriidnde name email password gonder
        data:{
            name,
            email,
            hashedpassword
        }
    })
    return NextResponse.json(user)
}
