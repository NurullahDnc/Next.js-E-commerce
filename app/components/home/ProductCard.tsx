"use client"
import TextClip from "@/utils/TextClip"
import { Rating } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"

const ProductCard = ({product}: {product: any}) => {
  const router = useRouter()

  //rating topla bol = item.rating ve acc topla, 0 dan baslayarak topla, product.reviews.length bol
  const ProductRating = product?.reviews?.reduce((acc: number, item: any)=> acc + item.rating, 0 ) / product?.reviews?.length;

  return (
    <div onClick={()=> router.push(`product/${product.id}`)} className="min-w-[230px] max-w-[240px] border p-2 rounded-md cursor-pointer shadow-lg flex flex-1 flex-col  ">

      <div className="relative h-[200px] ">
        <Image src={product.image} alt="" fill className="object-contain" />
      </div>
      <div className="space-y-2 mt-2 pl-5">
        <div> {TextClip(product.name)} </div>
        <div> <Rating name="read-only" value={ProductRating} readOnly /> </div>
        <div className="text-red-500 font-bold text-lg md:text-xl "> {product.price} TL </div>
      </div>
      
    </div>
  ) 
}

export default ProductCard
