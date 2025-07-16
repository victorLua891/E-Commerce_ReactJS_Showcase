import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContent';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  const {products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    if (products.length > 0){
      const tempData = [];
      for (const items in cartItems){
        for (const item in cartItems[items]){
          if (cartItems[items][item] > 0){
            tempData.push({
              _id: items,
              storage: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products])
  
  return (
    <div className='
      border-t pt-14
      sm:px-[5vw] md:px-[7vw] lg:px-[9vw]
      '>
      <div className='text-2xl mb-3 '>
        <div>CART</div>
      </div>
      <div>
        {
          cartData.map((item, index)=>{
            const productData = products.find((product)=> product._id === item._id);
            return (
              <div key={index} className='
                grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_1.5fr_0fr] 
                items-center gap-4 py-4 border-t border-b text-gray-700 py-4 '>
                <div className='flex items-start gap-6'>
                  <img className="w-16 sm:w-20" src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      {/* {console.log("size: " + item.size)} */}
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.storage} GB</p>
                    </div>
                  </div>
                </div>
                
                
                  <input onChange=
                  {(e)=> e.target.value === '' || e.target.value === '0' ? 
                    null : updateQuantity(item._id, item.storage, Number(e.target.value))} 
                    className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                  type="number" min={1} defaultValue={item.quantity}/>

                  <button 
                  onClick={()=>updateQuantity(item._id, item.storage, 0)}
                  className='text-white 
                  bg-red-500 rounded-2xl
                  px-3 py-1 ml-8
                  '>Delete</button>
               
                
                <img className='w-4 mr-4 sm:w-5 cursor-pointer' src='' alt="" />
              </div>  
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
