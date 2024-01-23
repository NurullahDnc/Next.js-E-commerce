import { products } from '@/utils/Products'
import Heading from '../general/Heading'
import ProductCard from './ProductCard'
import getProduct from '@/app/actions/getProduct';
import getProductsId from '@/app/actions/getProductId';
import Category from '@/app/category/[categoryId]/page';
import { Button } from '@mui/material';


const Products = async () => {
 
  //mongodb gelen productlar
  const getProducts = await  getProduct({category: "", search: ""});

  
  return (
    <div className=''>
      <Heading text='Tüm Ürünler' />
      <div className='flex max-h-[1300px] md:max-h-[795px] overflow-hidden justify-center gap-3 md:gap-6 flex-wrap mx-0 md:mx-7'>
        {
            //utils altında products map ile don, ProductCart props ile gonder
            getProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))
        }

       
      </div>
      <div className=' flex justify-center items-center ' >
        <button className=' w-[150px] text-sm mt-7 md:w-[200px] h-[45px] bg-blacks text-yellows flex justify-center items-center rounded-md ' >
        Daha Fazlası
        </button>

      </div>
      <hr className='mt-3' />
    </div>
  )
}

export default Products
