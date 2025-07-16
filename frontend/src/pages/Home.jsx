import React from 'react'
import Banner from '../components/Banner'
import Store from '../components/Store'
import LatestCollection from '../components/LatestCollection.jsx'
import PopularCollection from '../components/PopularCollection.jsx'
// import { ShopContext } from '../context/ShopContent'

const Home = () => {
  return (
    <div className='bg-gray-100 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
      <Banner/>
      <div className='my-10 px-4'>
      <div className='mb-2 text-lg'>
          LATEST PRODUCTS
        </div>
        <LatestCollection/>
      </div>
        
      <div className='px-4  pb-5 '>
        <PopularCollection/>
      </div>
      
      {/* <Store/> */}
      {/* <ShopContext/> */}
    </div>
  )
}

export default Home
