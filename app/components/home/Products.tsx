import { products } from '@/utils/Products'
import Heading from '../general/Heading'
import ProductCard from './ProductCard'


const Products = () => {
  return (
    <div>
      
      <Heading text='Tüm Ürünler' />
      <div className='flex gap-3 md:gap-10 flex-wrap justify-center px-3 md:px-10'>
        {
            //utils altında products map ile don, ProductCart props ile gonder
            products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))
        }
      </div>
    </div>
  )
}

export default Products
