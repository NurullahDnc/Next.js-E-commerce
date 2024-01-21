import { useState, useEffect } from 'react';
import getProduct from '@/app/actions/getProduct';
import Heading from '@/app/components/general/Heading';
import CategoryPage from '@/app/components/categoryPage/page';
import { CiUser } from 'react-icons/ci';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);

  const categoryList = [
    { id: 1, name: 'Ayakkabı', value: 'Ayakkabı', icon: CiUser },
    { id: 2, name: 'Bilgisayar', value: 'Bilgisayar', icon: CiUser },
    { id: 3, name: 'Telefon', value: 'Telefon', icon: CiUser },
    { id: 4, name: 'Mont', value: 'Mont', icon: CiUser },
    { id: 5, name: 'kazak', value: 'kazak', icon: CiUser },
    { id: 6, name: 'bot', value: 'kazak', icon: CiUser },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProduct({ category: selectedCategory, search: '' });
      setProducts(fetchedProducts);
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <div>
      <Heading text='Tüm Ürünler' />
      <div className='flex gap-3 md:gap-10 flex-wrap justify-center px-3 md:px-10'>
        {products.map((product) => (
          <CategoryPage key={product.id} product={product} />
        ))}

        {categoryList.map((category, index) => (
          <div
            key={index}
            className='border text-slate-800 rounded-full min-w-[100px] justify-center items-center flex flex-1 px-4 py-2 cursor-pointer'
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
