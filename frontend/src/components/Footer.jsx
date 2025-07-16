import React from 'react'
// import Contact from '../pages/Contact'
import Categories from './Categories'
import ContactDetails from './ContactDetails'

const Footer = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]
            bg-gray-800 text-white py-8 text-sm
            '>
        <div className='font-normal text-xl mb-4'>APPLE</div>
        <div className='flex justify-between'>
        <div>
            <ul>
                <li className='text-base font-medium mb-1'>Phone</li>
                <li>IPhone X</li>
                <li>IPhone X</li>
                <li>IPhone X</li>
                <li>IPhone X</li>
                <li>IPhone X</li>
                <li>IPhone X</li>
                <li>IPhone X</li>
                <li>IPhone X</li>
            </ul>
            </div>
            {/* <div>Tablet</div> */}
            <div>
            <ul>
                <li className='text-base font-medium mb-1'>Tablet</li>
                <li>IPad X</li>
                <li>IPad X</li>
                <li>IPad X</li>
                <li>IPad X</li>
                <li>IPad X</li>
                <li>IPad X</li>
                <li>IPad X</li>
                <li>IPad X</li>
                <li>IPad X</li>
                <li>IPad X</li>
            </ul>
            </div>
            {/* <div>Electronics</div> */}
            <div>
            <ul>
                <li className='text-base font-medium mb-1'>Electronics</li>
                <li>Apple Earphones</li>
                <li>Apple Headphones</li>
                <li>Others</li>
                <li>Others</li>

            </ul>
        </div>
        <div>
            <div className='text-base font-medium mb-1'>Contact Us</div>
            <ContactDetails/>
        </div>
        </div>
    </div>
  )
}

export default Footer
