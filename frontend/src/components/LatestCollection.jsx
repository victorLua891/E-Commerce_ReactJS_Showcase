import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContent.jsx'
import ProductItem from './ProductItem.jsx'

const LatestCollection = () => {

  const {products, currency} = useContext(ShopContext);
//   console.log(products);
//   console.log(currency);

  const [latestProducts, setLatestProducts] = useState([]);

  //PROBLEM....
  useEffect(()=>{
    setLatestProducts(products.slice(0,2));
  }, [products])

  return (
    <div className=' pb-5 font-normal'>
      

      {/* Render Producst */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {/* {popularProducts} */}
        {
            latestProducts.map((item, index)=>(
                <ProductItem key={index} id={item._id} image={item.image} 
                            name={item.name} price={item.price}/>
            )
          )
        }
      </div>
    </div>
  )
}

export default LatestCollection
