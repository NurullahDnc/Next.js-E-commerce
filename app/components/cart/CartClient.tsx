"use client"

import UseCart from "@/hooks/UseCart"
import PageContainers from "../containers/PageContainers"
import { MdDelete } from "react-icons/md";
import Image from "next/image";

const CartClient = () => {

    //cartprdcts context iile UseCart'dan cagırdık, sepetteki urunler
    const { cartPrdcts } = UseCart();

    return (
        <div className="flex-1">
            <PageContainers>
                <div className=' flex flex-1 text-[13px] md:text-[18px] py-5 justify-center items-center border-b-2'>
                    <div className="w-1/5 flex justify-center" >
                        İmage
                    </div>
                    <h1 className='w-1/6    '> Name </h1>
                    <p className='w-1/6  '> Category </p>

                    <p className='w-1/6  '> Quantity</p>
                    <p className='w-1/6   '> Price </p>
                    <p className='w-1/6  '> Delete</p>


                </div>
                
                {
                    cartPrdcts?.map(product => (

                        <div key={product.id} className="flex flex-1 ">

                            <div className='flex flex-1 my-3 justify-center items-center'>
                                <div className="w-1/6 flex justify-center" >
                                    <Image src={product.image} alt="" width={100} height={100} />
                                </div>
                                <h1 className='w-1/6 font-bold text-[15px]  '> {product.name} </h1>
                                <p className='w-1/6 text-[17px] '> {product.category} phone </p>

                                <p className='w-1/6 text-[17px] font-bold '> Adet: {product.quantity} </p>
                                <p className='w-1/6 font-bold text-[19px] '> {product.price} <span className='pl-1'>TL</span> </p>
                                <p className='w-1/6 ' onClick={(e) => { }} > <MdDelete size={25} /> </p>


                            </div>



                        </div>
                    ))

                }
            </PageContainers>
        </div>
    )
}

export default CartClient
