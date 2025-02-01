import React, {createContext, useState} from 'react';

export const cartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (name,price) => {
        const newItem = {name, price};
        setCart((prevItems) => [...prevItems , newItem]);
        alert(`${name} ($${price}) added to the cart`);

    };
    return (
        <cartContext.Provider value={{ cart, addToCart }}>
          {children}
        </cartContext.Provider>
      );
}
