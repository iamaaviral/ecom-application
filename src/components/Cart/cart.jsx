import React from "react";
import { CartContext } from "../../context/cartContext";
import cart from '../../images/carts.png'
import './cart.css';


const Cart = () => {
    let value = React.useContext(CartContext)
    return (
            <div className="cart-wrapper">
                <img src={cart} alt="cart-img" />
                <span>{value.cartValue.length}</span>
            </div>
    )
}

export default Cart