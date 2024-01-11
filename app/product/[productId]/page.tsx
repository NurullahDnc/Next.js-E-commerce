import DetailClient from '@/app/components/detail/DetailClient'
import {products} from '@/utils/Products'
import React from 'react'

type DetailProps = {
    productId? : string
}

//params ile url'den gelen ıd alıyoruz

const Detail = ({params}: {params: DetailProps}) => {
  //paramsdan gelen ıd productıd at
  const {productId} = params

  //products ile url den gelen id esit olan product godner
  const product = products.find(product => product.id == productId  )

  return (
    <div>
      <DetailClient product={product} />
    </div>
  )
}

export default Detail

