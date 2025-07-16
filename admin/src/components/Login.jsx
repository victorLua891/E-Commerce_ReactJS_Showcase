import React from 'react'
import { useState } from 'react';
import { backendUrl } from '../App';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';

const Login = ({setToken}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            console.log("email & password: ");
            console.log(email, password);
            const response = await axios.post(backendUrl + 
                '/api/user/admin', {email,password});
            console.log("response:response");
            console.log(response);
            if (response.data.success){
                setToken(response.data.token);
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
  return (
    <div className='
            min-h-screen flex items-center justify-center w-full
            
            bg-gray-300'>
      <div className=' 
        sm:w-3/4 md:w-2/4 lg:w-3/4
      bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-2 p-2'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
            <div className='mb-3 min-72'>
                <p className='pb-2'>Email Address:</p>
                <input onChange={(e)=>setEmail(e.target.value)}
                value={email}
                className='
                    rounded-md w-full px-3 py-2 
                    border border-gray-300 outline-none
                ' 
                type="email" 
                placeholder='Example@gmail.com' required/>
            </div>
            <div className='mb-3 min-72'>
                <p className='pb-2'>Password:</p>
                <input onChange={(e)=>setPassword(e.target.value)}
                value={password}
                className='
                    rounded-md w-full px-3 py-2 
                    border border-gray-300 outline-none
                '  type="password" placeholder='Password' required/>
            </div>
            <button 
                className='
                rounded-full bg-red-500 px-4 py-1 
                text-white my-2
                 '
                type="submit">
                Login
            </button>
        </form>
      </div>
    </div>
  )
}

export default Login
