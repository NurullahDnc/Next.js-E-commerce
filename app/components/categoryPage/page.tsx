"use client"
import TextClip from "@/utils/TextClip"
import { Rating } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Raiting from "../general/ProductRating"


//product category/[categoryId]'den geliyor
const CategoryPage = ({product} : {product:any}) => {

  const router = useRouter()
    
  return (
    <div>
        <div onClick={()=> router.push(`product/${product.id}`)} className="min-w-[230px] max-w-[240px] border p-2 rounded-md cursor-pointer shadow-lg flex flex-1 flex-col  ">

        <div className="relative h-[200px] ">
        <Image src={product.image} alt="" fill className="object-contain" />
        </div>
        <div className="space-y-2 mt-2 pl-5">
        <div> {TextClip(product.name)} </div>
            <Raiting ratings={product}  />
        <div className="text-red-500 font-bold text-lg md:text-xl "> {product.price} TL </div>
        </div> 

        </div>    
</div>
  )
}

export default CategoryPage
