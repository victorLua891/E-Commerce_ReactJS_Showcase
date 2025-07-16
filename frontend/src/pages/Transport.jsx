import React from 'react'
import img_1 from '../assets/images/banner_img_5.png'

const Transport = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]
       pt-5 pb-10'>
      {/* <div className='text-3xl '>APPLE</div> */}
      <div className='xl:flex xl:border-2 xl:rounded-xl '>
        <div className='
             
              pt-4 pl-5 pb-6 pr-6
              border-2 rounded-xl
              
              xl:border-none
              xl:w-1/2 pt-4 pl-5 pb-6'>
          <div className='text-xl pb-3 '>About Us</div>
          <p className='pb-5'>
          Welcome to APPLE, your premier online destination for all things Apple. We're a team of Apple enthusiasts dedicated to bringing you the best selection of Apple products and accessories.

We understand the importance of quality and innovation, which is why we only source genuine Apple products from trusted suppliers. Our commitment to customer satisfaction extends beyond just delivering your order. We provide:
<ul className='list-disc pl-8 py-2'>
  <li>Competitive Pricing: Enjoy great deals and frequent promotions on the latest Apple devices.</li>
  <li>Fast & Reliable Shipping: Get your order delivered quickly and safely to your doorstep.
  </li>
  <li>Easy Returns: Hassle-free returns and exchanges for your peace of mind.
  </li>
  <li>Excellent Customer Support: Our knowledgeable team is always ready to assist you with any questions or concerns.
  </li>
</ul>




Whether you're a seasoned Apple user or just starting your Apple journey, we're here to help you find the perfect products to enhance your digital life.
          </p>
          {/* <hr className='pb-5 '/> */}
          <p className='pb-5 border-t-2 pt-5'>
          At APPLE, we're more than just an online store. We're a team of Apple experts who are passionate about helping you make informed decisions.

We provide detailed product information, expert reviews, and helpful comparisons to guide you in finding the right Apple device for your needs. Our goal is to empower you with the knowledge to make confident purchasing decisions.

Explore our collection of iPhones, iPads, MacBooks, Apple Watches, AirPods, and more. Experience the difference of shopping with APPLE – where passion meets expertise.
          </p>
        
        </div>
        <img className="
          rounded-xl 
        w-screen
        xl:pl-5 xl:w-1/2 xl:object-cover" src={img_1} alt=""/>
      </div>
      {/* This is transport! */}
    </div>
  )
}

export default Transport
