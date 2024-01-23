"use client"

import UseCart from "@/hooks/UseCart"
import PageContainers from "../containers/PageContainers"
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import Cart from "@/app/cart/page";
import Counter from "../general/Counter";
import TextClip from "@/utils/TextClip";

//sepet comps
const CartClient = () => {
    //cartprdcts context ile UseCart'dan cagırdık, sepetteki urunler
    const { cartPrdcts, removeFromCart, addToBasketIncrease, addToBasketDecrease } = UseCart();

    //sepete urun varmı
    if(!cartPrdcts || cartPrdcts.length == 0){
        return <div className="flex-1 text-center text-2xl mt-5">Sepetiniz Boş    </div>
    }
    return (
        <div className="flex-1">
            <PageContainers>
                <div className=' flex flex-1 text-[13px] md:text-[18px] py-5 justify-center items-center text-center border-b-2'>
                    {/* <div className="w-1/5 flex justify-center" >
                        İmage
                    </div>
                    <h1 className='w-1/6    '> Name </h1>
                    <p className='w-1/6  '> Category </p>

                    <p className='w-1/6  '> Quantity</p>
                    <p className='w-1/6   '> Price </p>
                    <p className='w-1/6  '> Delete</p>
 */}

                </div>
                
                {
                    cartPrdcts?.map(product => (

                        <div key={product.id} className="flex flex-1  ">

                            <div className='    flex flex-1 my-3 h-[100px] justify-center items-center text-center text-[9px] md:text-[17px]'>
                                <div className="w-1/6 flex justify-center" >
                                    <Image src={product.image} alt="" width={100} height={100} />
                                </div>
                                <h1 className='w-1/6 '> {TextClip(product.name)} </h1>
                                <p className='w-1/6 '> {product?.brand} phone </p>

                                <p className='w-1/6 flex justify-center'> 
                                    <Counter cardProduct={product} increaseFunc={()=> addToBasketIncrease(product)} decreaseFunc={()=> addToBasketDecrease(product)} /> 
                                </p>
                                <p className='w-1/6 '> {product.price} <span className='pl-1'>TL</span> </p>
                                <p className='w-1/6 flex justify-center cursor-pointer' onClick={() => removeFromCart(product)} > <MdDelete size={27} /> </p>


                            </div>



                        </div>
                    ))

                }
                 
            </PageContainers>
        </div>
    )
}

export default CartClient
