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
    <div onClick={()=> router.push(`/product/${product.id}`)} 
    className="md:min-w-[270px] md:max-w-[280px] min-w-[170px] max-w-[190px]  min-h-[240px] max-h-[250px] md:min-h-[380px] md:max-h-[390px] overflow-hidden border rounded-md cursor-pointer shadow-md flex flex-1 flex-col  ">

    <div className="relative h-[100px] md:h-[200px] ">
      <Image src={product.image} alt="" fill className="object-contain" />
    </div>
    <div className="space-y-2 p-2 ">
      <div className="font-my-custom-weight min-h-[52px] text-[14px] md:text-lg"> {TextClip(product.name)} </div>
      <div className=" text-[11px] md:text-sm text-grays "> {TextClip(product.category)} </div>
        <Raiting ratings={product}  />
      <div className="text-reds font-bold text-sm md:text-lg "> {product.price} <span className="text-[18px]">TL</span> </div>
    </div> 
    
  </div>
  )
}

export default CategoryPage
