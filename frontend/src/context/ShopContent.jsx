import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {products} from "../assets/assets"
import axios from 'axios'
// import toast from 'react-toastify'

/**
 * A place to store all the common variables and state variables at one place. 
 */

//getting backendURL



export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10; //Normally depending on src -> dest.
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [cartItems, setCartItems] = useState({}); //problem
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate(); 

    const addToCart = async (itemId, storage) => {
        if (!storage){
            // toast.error('Select Product Storage');
            alert("Please select your preferred Storage");
            return;
        }

        let cartData = structuredClone(cartItems);


        console.log("cartItem");
        console.log(cartItems); //undefined. 

        console.log("itemId");
        console.log(itemId);
        // if (cartData[itemId][quantity]){
        //     console.log('Y1');
        //     cartData[itemId][quantity] += 1;
        // }

        if (cartData[itemId]){
            if (cartData[itemId][storage]){
                cartData[itemId][storage] += 1;
            }else{
                cartData[itemId][storage] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][storage] = 1;

        }
        setCartItems(cartData);

        // if (token){
        //     try {
        //         await axios.post(backendUrl + '/api/cart/add', {itemId, 
        //             // size
        //         }, {headers:{token}});

        //     } catch (error) {
        //         console.log(error);
        //         toast.error(error.message);
        //     }
        // }
    }

    const getProductsData = async () =>{
        try {
            const res = await axios.get(backendUrl + '/api/product/list');  
            if (res.data.success){
                setProducts(res.data.products)
            }else{
                // toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            // toast.error(error.message)
        }
    }

    const getCartCount = () =>{
        let totalCount = 0;
        for (const items in cartItems){
            for (const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        
        return totalCount;
    }

    const updateQuantity = async (itemId, storage, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId][storage] = quantity;
        setCartItems(cartData);

        if (token){
            try {
                await axios.post(backendUrl + '/api/cart/update', {itemId, storage, 
                quantity}, {headers:{token}})
            } catch (error) {
                console.log(error);
                // toast.error(error.message)
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            for (const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0){
                        // console.log('iteminfo: ' + itemInfo);
                        totalAmount += itemInfo.price * cartItems[items][item]
                        console.log('End: ' + cartItems[items][item]);
                    }
                } catch (error) {
                    console.log(error);
                    // toast.error(error.message)
                }
            }

        }
        return totalAmount;
    }

    const getUserCart = async (token) => {
        try {
            const res = await axios.post(backendUrl + '/api/cart/get', {}, {headers:{token}});
            if (res.data.success){
                setCartItems(res.data.cartData)
            }
        } catch (error) {
            console.log(error);
            // toast.error(error.message)
            alert(error.message)
        }
    }

    useEffect(()=>{
        getProductsData()
    }, [])

    useEffect(() => {
        console.log('cartItems')
        console.log(cartItems);
    }, [cartItems])

    useEffect(()=>{
        if (!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'));
        }
    }, [])

    //these value can be access from any component
    const value = {
        products,
        currency, delivery_fee,

        backendUrl, 
        setToken, token,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount, navigate,
        // useNavigate
    }

    return (
        //the value object is passed into the ContextProvider. 
        //then the other components can take it from here. 
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;