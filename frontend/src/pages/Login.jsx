import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContent';
import axios from 'axios';

const Login = () => {

  const [currState, setCurrState] = useState('Sign Up');
  // const [currState, setCurrState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [email, setEmail] = useState(''); 

  const onSubmitHandler = async (event) =>{
    event.preventDefault();
    try {
      if (currState === 'Sign Up'){
        //call sign up API
        const res = await axios.post(backendUrl + '/api/user/register', {name, email, password});
        // console.log(res.data);
        if (res.data.success){
          setToken(res.data.token);
          localStorage.setItem('token', res.data.token);
        }else{
          alert(res.data.message)
          // toast.error(res.data.message);
        }

      }else{
        //call login API
        const res = await axios.post(backendUrl + '/api/user/login', {email, password});
        if (res.data.success){
          setToken(res.data.token);
          localStorage.setItem('token', res.data.token);
        }else{
          alert(res.data.message)
        }
      }
    } catch (error) {
      console.log(error);
      alert(res.data.message)
    }
  }

  useEffect(() =>{
    if (token){
      navigate('/');
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler}
    className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 mb-32' action="">
      <div className='gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currState}</p>
        {/* <hr className='w-8 bg-gray-800'/> */}
      </div>
      {currState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' 
      placeholder='Email' required/>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' 
      placeholder='Password' required/>
      <div className='w-full flex justify-between'>
        <p className='cursor-pointer'>Forgot your Password</p>
        {
          currState === 'Login'
          ? <p onClick={()=>setCurrState('Sign Up')} className='cursor-pointer'>Create Account</p> 
          : <p onClick={()=>setCurrState('Login')} className='cursor-pointer'>Login Here</p>

        }
      </div>
      <button className='
      bg-black text-white font-light px-8
      py-2 mt-4'>
        {currState === 'Login'? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
