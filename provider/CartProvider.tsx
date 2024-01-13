import { CardContextProvider } from '@/hooks/UseCart'; 
import React from 'react'

//context sarmalama islemi yapıcaz, tip belirlemesi yaptık
const CartProvider = ({children}: {children:React.ReactNode}) => {
  return (

    //olsuturdumuz context ile sarmalıyoruz, sonra da Layout sayfasını sarmalayacaz
    <CardContextProvider>
      {children}
    </CardContextProvider>
  )
}

export default CartProvider
