import { products } from '@/utils/Products'
 
import getProduct from '@/app/actions/getProduct';
import getProductsId from '@/app/actions/getProductId';
import Category from '@/app/components/home/Category';
import Heading from '@/app/components/general/Heading';
import CategoryPage from '@/app/components/categoryCart/page';
import { CiUser } from "react-icons/ci";

//parmas = url den gelen category alıyor
const CategoryProduct= async ({ params }: { params: any }) => {

    console.log(params);

  //mongodb gelen productlar
  const getProducts = await  getProduct({category: params.categoryId, search: ""});

  return (
    <div>  
      <Heading text={` ${params.categoryId} Kategorisi`} />
      <div className='flex gap-3 md:gap-10 flex-wrap  px-3 md:px-10'>

      { /*kategori'de ürün kontrolu*/ }      
      {getProducts.length > 0 ? (
          getProducts.map((product: any) => (
            <div className='flex' key={product.id}>
              <CategoryPage product={product} />
            </div>
          ))
        ) : (
          <div>
            <h1 className='my-10 text-sm md:text-xl '>Bü Kategoride Ürünümüz Bulunmamaktadır</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryProduct
