import React, { useContext, useEffect, useState } from 'react'
import Product from '../pages/Product'
import { ShopContext } from '../context/ShopContent';
import ProductItem from './ProductItem';



const RelatedProducts = ({productCategory}) => {

    //USAGE:
    //1. individual product page into relatedProducts passing the category. 
    //2. store page will use this and passing based on category or subcategory filter. 
    const {products} = useContext(ShopContext);

    const [relatedProducts, setRelatedProducts] = useState([]);


    const fetchRelatedProducts = async () => {

        let temp_arr = [];
        
        //single/individual product has to pass in its' category into indProdCat parameter. 
        products.map((item) => {
            //get productCategory from main function directly for now - our application is simple
            //when application gets bigger, we will change it based on its' requirements. 
            //Method 1: using item
            if (item.category === productCategory){
                // console.log("TEMP_PLACE");
                // console.log(item);
                //what is the difference between item and product? Both are okay.
                temp_arr.push(item); 
            }     
            
        });

        //Method 2: using filter. 
        // let productsCopy = products.slice();
        // productsCopy = productsCopy.filter((item) => category === item.category);
        //setRelatedProducts(productsCopy);

        setRelatedProducts(temp_arr);
    }

    useEffect(()=>{
        fetchRelatedProducts();
    }, [products])

  return (
    <div className='pb-20'>
      <div className='py-4  text-xl'>RELATED PRODUCTS</div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            //why is func. body like () instead of {}?
            relatedProducts.map((item, index)=>(
                <ProductItem key={index} id={item._id} image={item.image} 
                            name={item.name} price={item.price}/>
            ))
        }
      </div>
    </div>
  )
}

export default RelatedProducts
