import {React} from 'react'
import { NavLink } from 'react-router-dom'
import banner_1 from '../assets/images/banner_img_1.png'
import banner_2 from '../assets/images/banner_img_4.png'
import banner_3 from '../assets/images/banner_img_3.png'

const Banner = () => {
  return (
    <div className='
      
      flex flex-col 
      pt-5 pb-10
      sm:flex-col 
      lg:flex-row'>
      {/* The BIG BANNER */}
      {/* <div className='aspect-auto'>  */}
      {/* ASPECT RATIO: https://github.com/tailwindlabs/tailwindcss-aspect-ratio */}
      <NavLink to="/store" 
          className="
          sm:basis-1 sm:mb-5 
          lg:basis-3/4 lg:mr-5 lg:mb-2 inline-block align-middle">
        {/* xl:w-3/4 */}
        <div className='
           absolute 
           text-2xl pt-12 pl-10
           sm:text-3xl sm:pt-10 sm:pl-16
           lg:text-4xl lg:pl-20 text-white
           '>
          <div className='
              text-yellow-500 text-5xl font-normal pb-2
              sm:text-6xl
              lg:text-6xl lg:pt-16 
              '>
              APPLE</div>
          <div className=''>The Future is</div>
          <div className=''>Here!</div>
        </div>  
        
        
        <img 
          className='
           shadow-lg rounded-lg
           object-center object-cover 
           w-full h-full mb-4
           sm:w-full 
           lg:w-full lg:h-full'
          src={banner_1} alt=''/>
        
      
      </NavLink>
      <div className='
          sm:flex sm:flex-row sm:basis-1/2 sm:pb-0 sm:w-full
          lg:basis-1/4 lg:flex lg:flex-col lg:pb-2 '>
        <NavLink to="/store" className="
            h-80
            sm:mb-0 sm:w-1/2  sm:mr-4 sm:h-72
            lg:h-1/2 lg:mb-5 lg:w-auto lg:mr-0" > 
          <img 
            className='shadow-lg rounded-lg
            w-full h-full object-center object-cover 

            lg:w-full lg:h-full '
            src={banner_2} alt=''/>
        </NavLink>
        <div className='
        mb-4
        sm:mb-0
        '></div>
        <NavLink to="/store" className="
            h-80
            sm:w-1/2 sm:h-72
            lg:h-1/2 lg:w-auto" > 
          <img 
            className='shadow-lg rounded-lg
            w-full h-full object-center object-cover 
            lg:w-full lg:h-full '
            src={banner_3} alt=''/>
        </NavLink>
      </div>
        {/* min-h-60 */}
    </div>
  )
}

export default Banner
