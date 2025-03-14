import { createContext } from "react";
import { products } from "../assets/assets";

// creating context API
export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const currency='$';
    const delivery_fee=10;


    const value={
         currency,
         delivery_fee,
         products,

    }
    return(
        <ShopContext.Provider value={value}>
          {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;