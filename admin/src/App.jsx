import { useState, React } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import Orders from './pages/Orders.jsx'
import Login from './components/Login.jsx'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'

export const backendUrl = import.meta.env.VITE_BACKEND_URL


const App = () => {

  const [token, setToken] = 
  useState(localStorage.getItem('token')
  ?localStorage.getItem('token')
  :'');

  useEffect(()=>{
    localStorage.setItem('token', token)
  }, [token])


  return (
    <div>
      <ToastContainer/>
      { token === ""
      ? <Login setToken={setToken}/>
      : <>
          <Navbar setToken={setToken}/>
          <div className='flex'>
          <Sidebar/>
            
            <Routes>
              <Route path='/add' element={<Add token={token}/>}/>
              <Route path='/list' element={<List token={token}/>}/>
              <Route path='/orders' element={<Orders token={token}/>}/>
            </Routes>
          </div>
        </>
      }
    </div>

  )
}

export default App
