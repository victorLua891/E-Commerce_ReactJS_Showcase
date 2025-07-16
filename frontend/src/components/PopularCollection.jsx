import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContent.jsx'
import ProductItem from './ProductItem.jsx'

const PopularCollection = () => {

  const {products, currency} = useContext(ShopContext);
//   console.log(products);
//   console.log(currency);

  const [popularProducts, setPopularProducts] = useState([]);

  //PROBLEM....
  useEffect(()=>{
    
    const bestProduct = products.filter((item)=>(item.bestseller));
    setPopularProducts(bestProduct);
    setPopularProducts(products.slice(0,10));
  }, [products])

  console.log("Item Details");
  console.log(products);
  console.log("product cost");
  // console.log((products[0].cost)[0]);

  // popularProducts.map((item, index)=>{
  //   console.log("popular collection in map");
  //   console.log((popularProducts[index].cost)[0]); console.log(typeof(item.cost));
  
  // }
    
  // );

  return (
    <div className='
        font-normal'>
      <div className='mb-2 text-lg'>POPULAR PRODUCTS</div>

      {/* Render Producst */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {/* {popularProducts} */}
        {
            popularProducts.map((item, index)=>(
                <ProductItem key={index} id={item._id} image={item.image} 
                            name={item.name} price={item.price}/>
            )
            )
        }
      </div>
    </div>
  )
}

export default PopularCollection
