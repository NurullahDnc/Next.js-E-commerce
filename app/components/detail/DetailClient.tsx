"use client";
import React, { useEffect, useState } from 'react'
import PageContainers from '../containers/PageContainers'
import Image from 'next/image'
import Counter from '../general/Counter'
import Button from '../general/Button'
import Comment from './Comment';
import Heading from '../general/Heading';
import UseCart from '@/hooks/UseCart';
import { log } from 'console';
import ProductRating from '../general/ProductRating';
import TextClip from '@/utils/TextClip';
import { useRouter } from 'next/navigation';

//Tip tanımlaması yapıldı
export type CardProductProps = {
  id: string
  name: string
  description: string
  price: number
  category: string  //  
  quantity: number
  rating: string
  image: string
  inStock: boolean
}
//productId'den geliyor product parametresi
export default function DetailClient({ product }: { product: any }) {
  const router = useRouter();

  //usecart- usecontext 
  const { productCartQty, addToBasket, cartPrdcts } = UseCart();
  //urun sepete ekli mi
  const [displayButton, setDisplayButton] = useState(false);

  //product verileri ?
  const [cardProduct, SetCardProduct] = useState<CardProductProps>(
    {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,  //
      rating: product.rating,
      quantity: 1,
      image: product.image,
      inStock: product.inStock
    }
  );
    console.log(cardProduct,"cardProduct");
    
  //sayfa yuklendiginde ürün sepet kontrolu
  useEffect(() => {
    setDisplayButton(false);
    //sepeteki urunun findIndex bulma, cartprdcts.id == product.id, yani urun sepete var
    let controlDisplay: any = cartPrdcts?.findIndex((cart) => cart.id == product.id)
    if (controlDisplay > -1) {
      setDisplayButton(true)
    }
  }, [cartPrdcts])

  console.log(cartPrdcts, "cartPrdcts");


  //detail de adet artırma
  const increaseFunc = () => {
    //adet 10 esit olunca artırma
    if (cardProduct.quantity == 10) return

    //tüm prev'ler donsun, prev icerisine o anki degeri gelsin, 1 artırsın
    SetCardProduct(prev => ({ ...prev, quantity: prev.quantity + 1 }))
  }

  //detail de adet azaltma
  const decreaseFunc = () => {
    if (cardProduct.quantity === 1) return
    SetCardProduct(prev => ({ ...prev, quantity: prev.quantity - 1 }))

  }

  console.log(product);
  return (
    <div className='my-10 '>
      <PageContainers>
        <div className='block md:flex text-xl'>
          <div className=' relative md:w-[500px] w-[250px] md:h-[500px] h-[250px] mb-5 md:mb-0 flex-1  '>
            <Image src={product.image} fill alt="" className='object-cover' />
          </div>
          <div className='w-full md:w-2/3 px-3 space-y-3 ml-0 md:ml-10 '>
            <div className='font-bold'> {product?.name} </div>
            <div> {product?.category} </div>
            <div> <ProductRating ratings={product}  /> </div>
            <div className=''> {TextClip(product?.description) } </div>
            <div className='flex'>
              <div className='pr-3'>Stok Durumu:  </div>
              {
                product.inStock ? <div className='text-green-600'>Ürün Stokta mevcut</div> : <div className='text-red-400'>Ürün Stokta Mevcut Değil</div>
              }
            </div>
            <div className='text-red-700'> {product?.price} TL </div>

            <div className='space-y-3 py-3'>
              {/*ürün sepet kontrolu yukarıda yapıldı, varsa buttonu degistir */}
              {
                displayButton ? <>
                  <div> <Button text='Ürün Sepete Ekli' outline small onClick={() => router.push("/cart")} /> </div>

                </> : <>
                  <Counter cardProduct={cardProduct} increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} />

                  {/*buttona tıklandıgında hooks. klasor icerisinde addtocart func. calıstır ve urunleri gonder */}
                  <div> <Button text='Sepete Ekle' small onClick={() => addToBasket(cardProduct)} /> </div>

                </>
              }

            </div>

          </div>
        </div>
        <Heading text={"Yorumlar"} /> 
        <div>
          {
            //prduct yorumlarını Comment props olarak gonderiyor
            product?.reviews?.map((prd: any) => (
              <Comment key={prd.id} prd={prd} />
            ))

          }
        </div>
      </PageContainers>
    </div>
  )
}
