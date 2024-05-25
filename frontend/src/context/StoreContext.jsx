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
   
    const getTotalCartAmount = () =>{
        let totalAmount = 0 ;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item)
                totalAmount += itemInfo.price* cartItems[item];
            }           
        }
        return totalAmount
    }
    const contextValue = {
        food_list,
        cartItems,
        setCarttems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider