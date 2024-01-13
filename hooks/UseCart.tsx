"use client"
import { CardProductProps } from '@/app/components/detail/DetailClient'
import React, { useState, createContext, useContext, useCallback, useEffect } from 'react'
import toast from 'react-hot-toast'
//use context olusturuldu

//context tip belirlemesi
interface CartContextProps{
    //ekli olan tum urunlerin miktarı
    productCartQty: number
    //sepeteki urunler
    cartPrdcts: CardProductProps[] | null
    addToBasket: (product: CardProductProps)=> void
    addToBasketIncrease: (product: CardProductProps)=> void
    addToBasketDecrease: (product: CardProductProps)=> void
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

    //sepette urun adet artır, total guncelelle 
    const addToBasketIncrease = useCallback((product: CardProductProps)=>{
        let updatedCart;
        //urun adeti 10 esit olunca artırma
        if (product.quantity == 10) {
            toast.error('Daha Fazla Artıramazsınız');  
        }else{

            if (cartPrdcts) {
                //sepeteki tum urunu degiskene attık
                updatedCart = [...cartPrdcts];
                const existingItem = cartPrdcts.findIndex(item => item.id === product.id);
                //tıklanılan urunun index bulma, -1 buyuk donerse bulundu
                if(existingItem > -1){
                    //filter edilen urunu degiskene at, qunatity miktarını onceki degerinden artır
                    updatedCart[existingItem].quantity = ++updatedCart[existingItem].quantity
                }
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                SetCartPrdcts(updatedCart);
                console.log(existingItem,"existingItem");
                 
            }
        }

       
        
    },[cartPrdcts])

    //sepette urun adet azalt, total guncelelle 
    const addToBasketDecrease = useCallback((product: CardProductProps)=>{

        let updatedCart;

        if (product.quantity == 1) {
            toast.error('Daha Fazla Azaltamazsınız');  
        }else{
            if (cartPrdcts) {
                updatedCart = [...cartPrdcts];
                const existingItem = cartPrdcts.findIndex(item => item.id === product.id);
    
                if(existingItem > -1){
                    updatedCart[existingItem].quantity = --updatedCart[existingItem].quantity
                }
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                SetCartPrdcts(updatedCart); 
            }
        }

    
        
    },[cartPrdcts])


    //sepete ekleme, func sepete ekle btn tanımlıyoruz
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
            toast.success('Ürün Sepete Eklendi');

            //udpatecart'daki urunu local'a ekliyoruz
            localStorage.setItem("cart", JSON.stringify(updateCart));
            return updateCart
        })
    },[cartPrdcts])


    //sepeten urun silme, localstore guncelle
    const removeFromCart = useCallback((product: CardProductProps)=>{
        if (cartPrdcts) {
            let filteredProducts = cartPrdcts.filter(cart => cart.id != product.id)
            SetCartPrdcts(filteredProducts);
            toast.success('Ürün Sepetten silindi')
            localStorage.setItem("cart", JSON.stringify(filteredProducts));

        }
    },[cartPrdcts]) 

    //context value'lerini tanımladık
    let value={
        productCartQty,
        addToBasket,
        //sepetteki productlar burda, cartPrdcts
        cartPrdcts,
        removeFromCart,
        addToBasketIncrease,
        addToBasketDecrease
    }

  return (
    <div>
        <CartContext.Provider value={value} {...Props} />
    </div>
  )
}




//olusturdumuz contextleri disarıya gonderme, diger sayfalardan burayı cagırıcaz
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



