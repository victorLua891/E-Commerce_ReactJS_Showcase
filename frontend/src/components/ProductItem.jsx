import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContent'
import { Link } from 'react-router-dom';
import img_1 from '../assets/images/banner_img_1.png';

const ProductItem = ({id, image, 
                        name, price}) => {

    const {currency} = useContext(ShopContext);

    // console.log(" productItem ind. class");
    // console.log(typeof(price));

  return (
    <Link to={`/product/${id}`} 
    // <Link to={`/product/67765bf6c4f7c75b7a2572b2`} 
        className="border-solid border-2 border-gray-400 
          flex flex-col items-center justify-center
          p-r-3 basis-2/3 rounded-xl
          mr-2 min-h-60 " >
      <div className=" overflow-hidden h-4/6 flex justify-center items-center">
        <img className="pt-8 " src={image[0]} alt=""/>
        {/* <img className="" src={img_1} alt=""/> */}
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
