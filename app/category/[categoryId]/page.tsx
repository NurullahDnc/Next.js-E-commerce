import { products } from '@/utils/Products'
 
import getProduct from '@/app/actions/getProduct';
import getProductsId from '@/app/actions/getProductId';
import Category from '@/app/components/home/Category';
import Heading from '@/app/components/general/Heading';
import CategoryPage from '@/app/components/categoryPage/page';
import { CiUser } from "react-icons/ci";

//parmas = url den gelen category alıyor
const CategoryProduct= async ({ params }: { params: any }) => {

    console.log(params);

  //mongodb gelen productlar
  const getProducts = await  getProduct({category: params.categoryId, search: ""});

  return (
    <div>
      
      <Heading text={` ${params.categoryId} Kategorisi`} />
      <div className='flex gap-3 md:gap-10 flex-wrap justify-center px-3 md:px-10'>
        {
            //utils altında products map ile don, ProductCart props ile gonder
            getProducts.map(product => (
                <CategoryPage key={product.id}   product={product} />
            ))
        }

       
      </div>
        
      

      
    </div>


  )
}

export default CategoryProduct
