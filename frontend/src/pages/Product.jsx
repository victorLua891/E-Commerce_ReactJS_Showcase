import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContent';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productsData, setProductsData] = useState(false);
  const [image, setImage] = useState("");
  const [storage, setStorage] = useState('');

  const fetchProductData = async () => {
    products.map((item)=>{
      if (item._id === productId){
        // console.log("HELLOWSDFDSFDSFSDFDSF");
        setProductsData(item);
        // console.log(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  }, [productId, products])

  return productsData ? (
    <div className='
            sm:px-[5vw] md:px-[7vw] 
            lg:px-[9vw] mt-4 
            '>
            {/*flex justify-between*/}
      {/* h-96 */}
      {/* flex items-center */}
      <div className=''>
      <h1 className=' text-4xl mt-6'>{productsData.name}</h1>
      <div className=' flex my-3 mb-5'>
            <div className='font-normal text-xl pr-2'>Price: </div>
            {/* {console.log(productsData.price)} */}
            <div className='text-3xl font-medium'>{currency}{productsData.price}</div>
          </div>
        <div className=''>
          <div className=' 
            flex align-items
            justify-center rounded-3xl bg-gray-100
            text-center border border-gray-300 w-[90w] items-center'>
            <img className=' h-lvh' src={image} alt="" />
          
          
          </div>
          
          <div className='flex w-[25%] mt-5'>
            {
               productsData.image.map((item, index)=>(
                 <img 
                  onClick={()=>setImage(item)} src={item} key={index} 
                  className='mr-5 rounded-2xl' alt="" />
              ))
             }</div>
        </div>
        <div className=''>
        {/* inline-block align-middle */}
          
            <div className='flex items-center gap-1'>
              <img src="" alt="" />
            </div>
            {/* <div className='mt-6 text-2xl'>Description:</div>
        <p className='mt-auto text-gray-500 md:w-4/5 pb-32 text-xl'>{productsData.description}</p>
           */}
          <div className='text-2xl font-light mt-4'>Color</div>
          <div className='flex'>
            <p className='w-10 bg-red-500 p-5 h-10 rounded-3xl ml-2 mt-3'> </p>
            <p className='w-10 bg-green-400 p-5 h-10 rounded-3xl ml-2 mt-3'> </p>
            <p className='w-10 bg-gray-100 p-5 h-10 rounded-3xl ml-2 mt-3'> </p>
            <p className='w-10 bg-gray-900 p-5 h-10 rounded-3xl ml-2 mt-3'> </p>
            <p className='w-10 bg-red-100 p-5 h-10 rounded-3xl ml-2 mt-3'> </p>
            <p className='w-10 bg-blue-300 p-5 h-10 rounded-3xl ml-2 mt-3'> </p>
          </div>
          <div className=' pt-4 text-2xl mb-4 font-normal'>Storage</div>
          <div>
            {/* <div>hello</div> */}
            {/* {
              productsData.storage.map((item, index) => (
                <button onClick={()=>{
                  // setStorage(item); console.log('item 2nd: ' + item)
                  }} className='px-3 py-4 rounded-2xl border  border-gray-400 text-xl mb-4' key={index}>
                  {item}
                </button>
              )
                
              )
            } */}
            <div>{console.log('prodsData: ' + productsData.storage)}</div>
            {/* <div> */}
              {
                productsData.storage.map((item, index)=>(
                  <button onClick={()=>setStorage(item)} 
                  className={`${item === storage ? 'border-orange-500' : ''} 
                    w-full px-3 py-4 rounded-2xl border 
                    border-gray-400 text-xl mb-4 text-left
                    `}>
                    {item} GB
                  </button>
                ))
              }
            {/* </div> */}
            {/* <div className='px-3 py-4 rounded-2xl border  border-gray-400 text-xl mb-4'>128GB</div>
            <div className='px-3 py-4 rounded-2xl border  border-gray-400 text-xl mb-4'>256GB</div>
            <div className='px-3 py-4 rounded-2xl border  border-gray-400 text-xl mb-4'>512GB</div> */}
          </div>
          <div className='
          px-3 py-4 rounded-2xl border bg-gray-100 text-normal
          '>
            <div className='font-medium'>Not Sure How much Storage to get?</div>
            <div className='text-gray-400'>Get a better understanding of the Space you Need.</div>
          </div>


          <div className='w-full flex content-center'>
          <button 
          onClick={() => {
            addToCart(productsData._id, storage)
          }}
          className='
          px-10 py-2 rounded-3xl border  
          bg-gray-900 text-white
          border-gray-400 text-xl my-4 mb-10
          '>Add To Cart</button>
          </div>
        </div>
      </div>
      <hr className='border-gray-300'/>
      <div>
        <RelatedProducts productCategory={productsData.category}/>
      </div>
      <div>
      </div>
    </div>
    
  ): <div className='opacity-0'></div>
}

export default Product
