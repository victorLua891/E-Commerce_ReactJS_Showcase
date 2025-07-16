import ProductItem from '../components/ProductItem.jsx';
import { ShopContext } from '../context/ShopContent.jsx'
import Collection from './Collection.jsx'
import React, {useContext, useState} from 'react'

const Store = () => {
  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [soryType, setSortType] = useState('relevant');

  const applyFilter = () =>{
    let productsCopy = products.slice();

    if (category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
        break;  

    }
  }
  
  const toggleCategory = (e) =>{

    if (category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value));
    }else{
      setCategory(prev => [...prev,e.target.value])
    }
    
  }

  // useEffect(()=>{
  //   applyFilter();
  // }, [category])

  // useEffect(()=>{
  //   sortProduct();
  // }, [sortType])

  return (
    <div className='sm:flex px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
       <div className='mt-6 sm:basis-1/6'>
        <div className='font-medium text-xl'>FILTER BY:</div>
        <div className='mt-4 px-4 py-4 border-2 mr-4 mb-10 pr-10'>
          <div className='pb-2 '>
            CATEGORY
          </div>
          <div className='flex pb-1'>
            <input type="checkbox" value={'Phone'} onChange={toggleCategory}/>
            <div className='pl-2'>Phone</div>
          </div>
          <div className='flex pb-1'>
            <input type="checkbox" value={'Tablet'} onChange={toggleCategory}/>
            <div className='pl-2'>Tablet</div>
          </div>
          <div className='flex pb-1'>
            <input type="checkbox" value={'Headphones'} onChange={toggleCategory}/>
            <div className='pl-2'>Headphones</div>
          </div>
        </div>
      </div>
      <div className='mt-6 ml-2 sm:ml-4 sm:basis-5/6'>

        <div className='mb-2 flex justify-between w-full'>
          <div className='text-lg'>LATEST PRODUCTS</div>
          
          <select onChange={(e)=>{e.target.value}} className='mr-4'>
            <option value="relevant">Sort By: Relevance</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>
        <div>
          {/* {filterProducts.map((item, index)=>(
            <ProductItem key={index} name={item.name} 
            id={item._id} price={item.price} image={item.image[0]}/>
          ))} */}
        </div>
      </div> 
      
      
    </div>
  )
}

export default Store
