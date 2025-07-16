import React, { useContext, useState } from 'react'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContent';

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);

  const placeOrder = () => {
    ()=>navigate('/orders');
    // alert('Order Has been placed!');
  }

  return (
    <div className='flex flex-col lg:flex-row sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <div className='flex flex-col gap-0 w-full sm:max-w-[480-px] mr-8'>
        <div className='text-xl sm:text-2xl mt-6 mb-4'>
          <div>DELIVERY INFORMATION</div>
        </div>
        <div className='flex gap-3 '>
          <input className="border border-gray-300 rounded py-3.5 w-full pl-5 mb-3" type="text" placeholder='First name'/>
          <input className="border border-gray-300 rounded py-3.5 w-full pl-5 mb-3" type="text" placeholder='Last name'/>
        </div>
        <input className="border border-gray-300 rounded py-3.5 w-full pl-5 mb-3" type="text" placeholder='Email'/>
        <input className="border border-gray-300 rounded py-3.5 w-full pl-5 mb-3" type="text" placeholder='Street'/>
        <div className='flex gap-3'>
          <input className="border border-gray-300 rounded py-3.5 w-full pl-5 mb-3" type="text" placeholder='City'/>
          <input className="border border-gray-300 rounded py-3.5 w-full pl-5 mb-3" type="text" placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input className="border border-gray-300 rounded py-3.5 w-full pl-5 mb-3" type="number" placeholder='Zipcode'/>
          <input className="border border-gray-300 rounded py-3.5 w-full pl-5 mb-3" type="text" placeholder='Country'/>
        </div>
        <input className="border border-gray-300 rounded py-3.5 w-full pl-5 mb-8" type="number" placeholder='Phone'/>

      </div>
      <div className='sm:mt-6 mt-0'>
        <div className=' min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-6'>
          <div className='text-xl sm:text-2xl'>PAYMENT METHOD</div>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              {/* <img className='h-5 mx-4' src='' alt="" /> */}
              <p className='text-gray-500 text-sm mx-4'>Stripe</p>
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              {/* <img className='h-5 mx-4' src='' alt="" /> */}
              <p className=' text-gray-500 text-sm mx-4'>Razorpay</p>
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={
              // ()=>navigate('/orders')
              ()=>{
                navigate('/');
                alert('Order Has Been Placed');
              }
                
              
              } className='bg-black text-white px-16 py-3 text-sm mb-8'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
