import { createContext, useState } from "react";

const CartContext = createContext();
export function CartProvider({children}){
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (name, price) =>{
        setCartItems((prevState) => [...prevState, {name, price}]);
    }
    return(
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext;