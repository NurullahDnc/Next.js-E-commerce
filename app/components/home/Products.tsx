import { products } from '@/utils/Products'
import Heading from '../general/Heading'
import ProductCard from './ProductCard'
import getProduct from '@/app/actions/getProduct';
import getProductsId from '@/app/actions/getProductId';
import Category from '@/app/category/[categoryId]/page';


const Products = async () => {
 
  //mongodb gelen productlar
  const getProducts = await  getProduct({category: "", search: ""});

  
  return (
    <div>
      
      <Heading text='Tüm Ürünler' />
      <div className='flex gap-3 md:gap-10 flex-wrap justify-center px-3 md:px-10'>
        {
            //utils altında products map ile don, ProductCart props ile gonder
            getProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))
        }

       
      </div>
    </div>
  )
}

export default Products
