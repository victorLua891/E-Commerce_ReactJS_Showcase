import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Collection from './pages/Collection.jsx'
import Store from './pages/Store.jsx'
import Contact from './pages/Contact'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import About from './pages/About.jsx'
import Transport from './pages/Transport.jsx';

import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';

// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    // px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]
    <div className=''>
      {/* <ToastContainer/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/transport' element={<Transport/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route exact path='/product/:productId' element={<Product/>}/>
        
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/place-order' element={<PlaceOrder/>}/>
        <Route exact path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

// export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// //import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     </>
//   )
// }

// export default App

