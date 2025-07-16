import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App';

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async ({token}) =>{
    //1. getthe list 
    try {
      const res = await axios.get(backendUrl + '/api/product/list');
      console.log("Products List");
      console.log(res.data.products);
      if (res.data.success){
        setList(res.data.products); //replaces the list, useState with occupied lst, instead of an empty array. 
      }else{
        toast.error(res.data.message);
      }

    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  }

  const removeProduct = async (id) => {
    try {
      const res = await axios.post(backendUrl + "/api/product/remove", {id}, {headers: {token}});
      if (res.data.success){
        toast.success(res.data.message);
        await fetchList();
      }else{
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  }

  useEffect(()=>{
    fetchList();
  }, []);

  return (
    <div>
      <div>Products List</div>
      <div className='flex flex-col gap-2'>
        <div className='grid-none md:grid md: grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center py-1'>
        {/* <div className='flex'> */}
          <div>Image</div>
          <div>Name</div>
          <div>Category</div>
          <div>Price</div>
          <div>Stock</div>
          <div>Action</div>
        </div>
        {
          list.map((item, index) =>(
            <div key={index}>
              <img src={item.image[0]} alt=""/>
              <div>{item.name}</div>
              <div>{item.category}</div>
              <div>{item.price}</div>
              <div>$ {item.stock}</div>
              <button onClick={()=>removeProduct(item._id)}>X</button>
            </div>
          ))
        }
        <div className='flex gap-4'>
          <img src="" alt=""/>
          <div>IPhone16X</div>
          <div>Phone</div>
          <div>RM 1345</div>
          <div>634</div>
        </div>
        <div className='flex gap-4'>
          <img src="" alt=""/>
          <div>IPhone16X</div>
          <div>Phone</div>
          <div>RM 1345</div>
          <div>634</div>
        </div>
      </div>
    </div>
  )
}

export default List
