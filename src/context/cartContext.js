import React from "react";

export const CartContext = React.createContext();


export const CartProvider = (props) => {
    const [cartValue, setCartValue] = React.useState([])

    const addToCart = (selectedProduct) => {
        setCartValue([...cartValue, selectedProduct])
    }

      return (
          <CartContext.Provider value={{cartValue, addToCart}}>
              {props.children}
          </CartContext.Provider>
      )
}