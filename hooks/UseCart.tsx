"use client"
import { CardProductProps } from '@/app/components/detail/DetailClient'
import React, { useState, createContext, useContext, useCallback, useEffect } from 'react'
import toast from 'react-hot-toast'
//use context olusturuldu

//context tip belirlemesi
interface CartContextProps{
    //ekli olan urunlerin miktarı
    productCartQty: number
    cartPrdcts: CardProductProps[] | null
    addToBasket: (product: CardProductProps)=> void
    removeFromCart: (product: CardProductProps)=> void

}

const CartContext = createContext <CartContextProps | null>(null)

interface Props{
    [propName: string]: any
}

export const CardContextProvider = (Props: Props)=> {
    //urun adeti 
    const [productCartQty, SetCardProductQty] = useState(0)
    //urunler
    const [cartPrdcts, SetCartPrdcts] = useState<CardProductProps[] | null>(null)

    //sayfa yuklendiginde localstore deki urunu, cartPrdcts'ı guncelliyoruz
    useEffect(()=>{
        const getItem: any = localStorage.getItem("cart");
        let getItemParse: CardProductProps[] | null = JSON.parse(getItem);
        SetCartPrdcts(getItemParse);
    },[])

    //sepete ekleme 
    const addToBasket = useCallback((product: CardProductProps)=>{
        SetCartPrdcts(prev =>{
            let updateCart;
            //daha once sepete urun varsa, true
            if(prev){
                //tum ürünleri don, product'da ekle, update cart at
                updateCart = [...prev, product]
            }else{
                //yoksa productu ekle updateCart'a
                updateCart = [product]
            }
            //alert "react-hot-toast" kutuphanesi kulanıldı
            toast.success('Ürün Sepete Eklendi')

            //udpatecart'daki urunu local'a ekliyoruz
            localStorage.setItem("cart", JSON.stringify(updateCart));
            return updateCart
        })
    },[cartPrdcts])

    //sepeten urun silme
    const removeFromCart = useCallback((product: CardProductProps)=>{
        cartPrdcts?.filter(product => {} )
    },[]) 

    //context value'lerini tanımladık
    let value={
        productCartQty,
        addToBasket,
        //sepetteki productlar burda, cartPrdcts
        cartPrdcts,
        removeFromCart
    }

  return (
    <div>
        <CartContext.Provider value={value} {...Props} />
    </div>
  )
}



//olusturdumuz contextleri disarıya gonderme 
const UseCart = () => {
    //yeni context olusturduk, baslangic degeri CartContext verdik
    const context = useContext(CartContext)
    
    //context bos ise hata mesajı dondur, degilse contextleri tum sayfaya return et
    if(context == null){
        throw new Error("Bir hata durumu mevcut")
    }
    return context
}

export default UseCart



