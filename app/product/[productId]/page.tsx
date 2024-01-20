import getProductsId from '@/app/actions/getProductId'
import DetailClient from '@/app/components/detail/DetailClient'
import React, { useEffect, useState } from 'react'

type DetailProps = {
    productId? : string
}

const Detail = async ({ params }: { params: DetailProps }) => {
    const { productId } = params;

    // Func urun ıd goder urun ozeliklerini donuyoer
    const product = await getProductsId({ productId });

    return (
        <div>
            <DetailClient product={product} />
        </div>
    )
}

export default Detail
