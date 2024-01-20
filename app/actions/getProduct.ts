
//? tum urunleri baska sayfa da kulanma

import prisma from '@/libs/prismadb'

//filter islemleri icin
export interface productParams{
    category?: string | null
    search?: string | null
}

export default async function getProduct(params:productParams) {
    
    try {
        //paramsdan gelen degerleri degiskene at
        const {category, search} = params

        let searchString = search;
        //kontol search ici bos ise basalangıc olarak bos tanımla
        if (!search) {
            searchString = ""
        }

        let query:any = {}

        if (category) {
            //query iceerisine category alanı olustur, categoryleri at
            query.category = category;
        }

        //prisma uzerinden tum urunleri bul ve filter yapma

        const products = await prisma.product.findMany({

            where:{
                //tüm query'leri al, arry icerisinde filter olacak urunleri containers icerisinde belirtilmesi gerek
                ...query,
                OR:[
                    {
                        //mame gore, contains gelecek searchstrine gore filter yap  - description gore de filter
                        name: {
                            contains :searchString,
                            mode: 'insensitive'
                        },
                        description: {
                            contains :searchString,
                            mode: 'insensitive'
                        }
                    }
                ]
            },
            //user true olan, createde azalatarak?
            include:{
                reviews:{
                    include:{
                        user: true
                    },
                    orderBy:{
                        createdDate: "desc"
                    }
                }
            }
        })

        return products

    } catch (error :any) {
        throw new Error(error)
    }
}