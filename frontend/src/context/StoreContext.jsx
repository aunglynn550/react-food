import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const[cartItems, setCarttems] = useState({});
    const addToCart = (itemId) =>{
        if(!cartItems[itemId]){
            setCarttems((prev)=>({...prev,[itemId]: 1}))
        }
        else{
            setCarttems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart = (itemId) => {
        setCarttems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    useEffect(()=>{
        console.log(cartItems);        
    }, [cartItems])
    const contextValue = {
        food_list,
        cartItems,
        setCarttems,
        addToCart,
        removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider