import React from 'react'
import ContactDetails from '../components/ContactDetails'

const Contact = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {/* <div className='text-2xl mt-10'>APPLE</div> */}
    {/* <div className='
    flex justify-center items-center border-solid min-h-96'> */}
    <div className='
    '>
      <div className='
            border-solid px-16  py-6 pt-8  
            rounded-lg mt-4 border-2 shadow-xl mb-20'>
      {/* <div className='
             mt-12 mb-48 py-6
            '>       */}
      {/* <div className=''>       */}
        <div className='text-3xl mb-6'>More</div>
        
        <div className='flex mb-8'>
          <div className='pr-4 border-solid  text-lg w-28'>Contact Us</div>
          <div className='pl-4'>
          <ContactDetails/>
          </div>
        </div>
        <hr className='mb-6'/>
        
        <div className='flex '>
          <div className='pr-4 border-solid  text-lg w-28'>Contact Us</div>
          <div className='pl-4'>
          <ContactDetails/>
          </div>
        </div>
      </div>
    </div>

    {/* <div className='shadow-xl
    '>
      <div className='
            border-solid px-16 mb-24 py-6 pt-8 shadow-xl
            border-t-2 '>
        <div className='flex '>
          <div className='pr-4 border-solid border-r-2 text-lg w-28'>Something Else</div>
          <div className='pl-6'>
          <ContactDetails/>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default Contact
