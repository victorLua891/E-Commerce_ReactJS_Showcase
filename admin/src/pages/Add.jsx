// import {assets} from '../assets/assets'
import upload_img from '../assets/upload_img.png'
import axios from 'axios'
import {backendUrl} from '../App.jsx'


import { useState, React } from 'react'

const Add = ({token}) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Phone");
  const [bestseller, setBestseller] = useState("");
  const [stock, setStock] = useState("");
  const [storage, setStorage] = useState("");

  // const onSubmitHandler = async (e) =>{
  const onSubmitHandler = async (e) =>{
    e.preventDefault();

    try {
      console.log("First "); console.log("Loading...");
      // const timeoutId = setTimeout(() => {
      //   setMessage("Delay One")
      // }, 10000);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("bestseller", bestseller);
      formData.append("stock", stock);
      formData.append("storage", JSON.stringify(storage));

      formData.append("date", new Date());

      console.log("Second "); console.log("Loading...");
      // const timeoutId2 = setTimeout(() => {
      //   setMessage("Delay Two")
      // }, 2000)

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      // console.log("Third "); console.log("Loading...");
      // const timeoutId3 = setTimeout(() => {
      //   setMessage("Delay Three")
      // }, 2000)

      console.log("FormData + Storages");
      console.log(storage);
      console.log(formData);

      //after this line executes: error..
      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}})
      

      //from here on out does not execute. 
      // console.log("Fourth "); console.log("Loading...");
      // const timeoutId4 = setTimeout(() => {
      //   setMessage("Delay Four")
      // }, 2000)
      console.log("URL " + response);
      console.log("Success");
      console.log(response.data);

      if (response.data.success){
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setImage1(false); setImage2(false); setImage3(false); setImage4(false);
        setPrice('');
        setStock('');
        setStorage('');
      }else{
        toast.error(response.data.message)
      }

    } catch (error) {
      // console.log("URL " + response);
      console.log("response data error");
      console.log(error.message);
    }
  }

  return (
    <form 
    onSubmit={onSubmitHandler}
    
    className='
        
        items-start gap-3 py-6 px-12'>
      {/* START OF IMAGES FIELDS */}
      <div>

        <div className='mb-3 ml-1 '>Upload Images:</div> 
        <div className='
            grid gap-x-1 gap-y-3
            grid-cols-2 grid-rows-2
            sm:grid-cols-3 sm:grid-rows-2
            md:grid-cols-4 md:grid-rows-1'>
            <label htmlFor="image1" className='flex justify-center'>
              <img className='
                min-w-32 max-w-32 cursor-pointer
                mb-2
                object-cover items-center text-center
                w-32 h-32 border-4 border-dashed rounded-xl mr-2' 
                src={!image1 ? upload_img : URL.createObjectURL(image1)} alt=""/>
                <input onChange={
                  (e)=>setImage1(e.target.files[0])} type="file" id="image1"
                  // className='p-2 bg-gray-800'
                  hidden
                  required/>
            </label>
          <label htmlFor="image2">
            <img className='
              min-w-32 max-w-32 cursor-pointer
              mb-2 object-cover  items-center text-center
              w-32 h-32 border-4 border-dashed rounded-xl mr-2' 
              src={!image2 ? upload_img : URL.createObjectURL(image2)} alt=""/>
              <input onChange={
                (e)=>setImage2(e.target.files[0])} type="file" id="image2"
                // className='p-2 bg-gray-800'
                hidden
                />
          </label>
          <label htmlFor="image3">
            <img className='
              min-w-32 max-w-32 cursor-pointer
              mb-2 object-cover  items-center text-center
              w-32 h-32 border-4 border-dashed rounded-xl mr-2' 
              src={!image3 ? upload_img : URL.createObjectURL(image3)} alt=""/>
              <input onChange={
                (e)=>setImage3(e.target.files[0])} type="file" id="image3"
                // className='p-2 bg-gray-800'
                hidden
                />
          </label>
          <label htmlFor="image4">
            <img className='
              min-w-32 max-w-32 cursor-pointer
              mb-2 object-cover  items-center text-center
              w-32 h-32 border-4 border-dashed rounded-xl mr-2' 
              src={!image4 ? upload_img : URL.createObjectURL(image4)} alt=""/>
              <input onChange={
                (e)=>setImage4(e.target.files[0])} type="file" id="image4"
                // className='p-2 bg-gray-800'
                hidden
                />
          </label>
        </div>
      </div>
      {/* END OF IMAGES FIELDS */}
      {/* Other fields */}
      <div className='w-full'>
        <p className='mb-2 ml-1'>Product Name:</p>
        <input 
          onChange={(e)=>setName(e.target.value)} value={name}
          className="w-3/4 max-w-[500px] px-2 py-1 rounded-xl" 

        type="text" placeholder='Type here' 
        required/>
      </div>
      <div className='w-full'>
        <p className='mb-2 ml-1'>Product Description:</p>
        <textarea 
        onChange={(e)=>setDescription(e.target.value)} value={description}
        className="w-3/4 min-h-[120px] max-w-[500px] px-2 py-1 rounded-xl" 

        type="text" placeholder='Write Description Here...' 
        required/>
      </div>
      <div>
        <div>
          <p className='ml-1 mb-2'>Product category</p>
          <select 
            onChange={(e)=>setCategory(e.target.value)}
            className='px-2 py-1 rounded-xl' required>
            <option value="Phone">Phone</option>
            <option value="Tablet">Tablet</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>
      {/* 8.40: setVariations (sizes)*/}
      <div>
        <p className='mb-2 ml-1'>Product Price: </p>
        <input 
        onChange={(e)=>setPrice(e.target.value)} value={price}
        className='px-2 py-1 rounded-xl'
        type="Number" placeholder='100.00' required/>
      </div>
      <div>
        <p className='mb-2 ml-1'>Stock: </p>
        <input 
        onChange={(e)=>setStock(e.target.value)} value={stock}
        className='px-2 py-1 rounded-xl'
        type="Number" placeholder='45' required/>
      </div>
      <div>
        {/* Sizes */}
        <div className='mt-2'>Storage Sizes:</div>
        <div className='flex mt-2'>
          <div onClick={()=>setStorage(prev => prev.includes("128") ? prev.filter(item => item !== '128') : [...prev, '128'])}>
            <p className={`${storage.includes('128') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>128GB</p>
          </div>
          <div onClick={()=>setStorage(prev => prev.includes("256") ? prev.filter(item => item !== '256') : [...prev, '256'])}>
            <p className={`${storage.includes('256') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>256GB</p>
          </div>
          <div onClick={()=>setStorage(prev => prev.includes("512") ? prev.filter(item => item !== '512') : [...prev, '512'])}>
            <p className={`${storage.includes('512') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>512GB</p>
          </div>






          {/* <div 
            className='px-2 py-1 rounded-2xl border bg-gray-900 text-white mr-1'
            onClick={()=>setStorages(prev=> prev.includes('256') ? prev.filter(item => item !== '256') : [...prev, '256'])}>
            <p 
            className={`${storages.includes('256') ? 'bg-pink-100' : 'bg-gray-800'} 
            `}
            // className='px-2 py-1 rounded-2xl border bg-gray-900 text-white mr-1'
            >256GB</p></div>
          <div 
            className='px-2 py-1 rounded-2xl border bg-gray-900 text-white mr-1'
            onClick={()=>setStorages(prev=> prev.includes('512') ? prev.filter(item => item !== '512') : [...prev, '512'])} >
            <p className={`${storages.includes('512') ? 'bg-pink-100' : 'bg-gray-800'} 
            `}
            // className='px-2 py-1 rounded-2xl border bg-gray-900 text-white mr-1'
            > 512GB</p></div> */}
        </div>
        
      </div>
      <div className='flex items-center my-4'>
        <input 
        onChange={()=>setBestseller(prev => !prev)} 
        checked={bestseller}
        className="ml-2 mr-2" type="checkbox" id='bestseller' />
        <label htmlFor="bestseller">Add to bestseller</label>
      </div>
      <button type="submit" className='py-2 px-3 text-white bg-red-500 rounded-lg'>ADD PRODUCT</button>
    </form>
  )
}

export default Add;
