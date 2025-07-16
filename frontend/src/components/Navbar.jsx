import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from './vite.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo2.jpg'
import { ShopContext } from '../context/ShopContent';

const Navbar = () => {

  const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  }

  return (
    // py is padding top and bottom by 5rem
    // items-center: centers the item vertically

    //This one is crucial: px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]
    <div className=''>
    <div className='
              flex items-center justify-between 
              ps-3 
              bg-black text-white 
              text-lg font-sans py-4 px-6
              sm:px-[5vw] md:px-[7vw] lg:px-[9vw]
              '>
      {/* font-normal or font-normal */}
      <NavLink to='/' className=''> 
          {/* <div>
          <a href='https://vitejs.dev' target='blank'>
            <img src={viteLogo} className='logo' alt="Vite logo"/>
          </a> */}
          <div className=''>APPLE</div>
          {/* </div> */}
        </NavLink>
      

      <div className='flex items-center gap-4'>
        {/* <div className=''>Search</div> */}

        {/* <div className='text-base'> */}
        <input type="text" name="search prod" placeholder='Search Product' aria-label='search prod'
              className=" 
              font-sm
              px-3 py-2 font-light placeholder-gray-500 
              text-black rounded-2xl border-none ring-2 
              ring-gray-300 focus:ring-gray-500 focus:ring-2
              p-2 h-6 w-40"
            />
        {/* </div> */}
        {/* <form action=''>

            <input type="text" name="search prod" placeholder='Search Item' aria-label='search prod'
              class=" 
              px-3 py-2 font-semibold placeholder-gray-500 
              text-black rounded-2xl border-none ring-2 
              ring-gray-300 focus:ring-gray-500 focus:ring-2
              text-sm p-2 resize-y h-2.5"
            />
        </form> */}
        {/* <input className="text-black
                border-none rounded
                
        " type="text" placeholder='Search...'/> */}
        {/* ACCOUNT MENU */}
        <NavLink to='/cart'>Cart</NavLink>
        {/* <p>{getCartCount()}</p> */}
        {/* START OF DROPDOWN MENU */}
        <div className='pl-4 border-l group relative'>
          {/* <Link to='/login'>Username</Link> */}
          {/* <div>hello, its me</div> */}
          <Link to={'/login'}>Heelo</Link>
          <div onClick={()=> token ? null : navigate('/login')}>Guest</div>
          {/* {token && */}
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>Profile</p>
              {/* <p className='cursor-pointer hover:text-black'>Cart</p> */}
              <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Order</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
          {/* } */}
          
        </div>
        {/* END OF DROPDOWN MENU */}
      </div>
    </div>
    <div className='
        bg-gray-800 text-white font-light
        sm:px-[5vw] md:px-[7vw] lg:px-[9vw]
        flex gap-4 
        py-2 px-6'>
        {/* <div className=''>
          CATEGORIES
        </div> */}
        <div>
          <NavLink to='/' className=''>
            {/* <div className='border-l pl-4'> */}
             <div> HOME</div>
            {/* BEGIN: For text decoration */}
            {/* END: For text decoration */}
          </NavLink>
        </div>
        <div>
        {/* <NavLink to='' className='flex flex-col items-center gap-1 border-b-4'> */}
          <NavLink to='/store' className=''>
            {/* <div>STORE/ITEMS</div> */}
            <div clas>STORE</div>
          </NavLink>
        </div>
        
        <div>
          <NavLink to='/transport' className=''>
            {/* <div>TRANSPORT</div> */}
            <div>ABOUT</div>
          </NavLink>
        </div>
        <div>
          <NavLink to='/contact' className=''>
            <div>CONTACT</div>
          </NavLink>
        </div>
      </div>
  </div>
  )
}

export default Navbar
