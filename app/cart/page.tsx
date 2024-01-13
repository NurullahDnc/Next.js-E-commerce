"use client"
import React from 'react';
import CartClient from '../components/cart/CartClient';
import UseCart from '@/hooks/UseCart';
import { products } from '@/utils/Products';

//sepet sayfası,cartClient comps cagırıldı
const Cart = () => {
  const { cartPrdcts } = UseCart();

  // Sipariş toplamını hesapla, 
    const totalOrderAmount = cartPrdcts?.reduce((acc, item)=> acc + (item.price * item.quantity),0 )
  return (
    <div className='block md:flex  '>
      <CartClient />

      <div className=' w-[100%] md:w-[25%] mt-[55px] px-5 md:px-2  '>
        <div className='my-3 text-[19px] text-center'>Sipariş Özeti</div>
        <hr className='text-gray-100 m-auto' />
        <div className='text-[18px] justify-between my-5 mt-7 flex'>
          Sipariş Toplam : <span className='mr-10'>{totalOrderAmount} TL</span>
        </div>
        <hr className='text-gray-100 m-auto  my-5' />

        <button className='min-w-[250px] rounded-md p-3 block m-auto  bg-red-700'>
          ÖDEME
        </button>
      </div>
    </div>
  );
};

export default Cart;
