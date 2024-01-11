import React from 'react'
import PageContainers from '../containers/PageContainers'

export default function DetailClient({product}: {product:any}) {
  return (
    <div>
       <PageContainers>
            {product.name}
       </PageContainers>
    </div>
  )
}
