import React, { useState, memo, useMemo} from "react";
import { CartContext } from "../../context/cartContext";
import cart from '../../images/carts.png'
import './cart.css';


const Cart = ({counter, changeCounter}) => {
    const [name, setName] = useState('Ashraf')
    console.log('Cart component render')

    const numver = useMemo(() => {
        let res = 0
        for(let i=0; i< 500000000; i++) {
            res++
        }
        return res
    }, [])

    return (
            <div className="cart-wrapper">
                <h1>{counter}</h1>
                 <input onChange={(e) => setName(e.target.value)} value={name}/>
                 <button onClick={changeCounter}>Click change counter from children</button>
                <img src={cart} alt="cart-img" height={32}/>
            </div>
    )
}

export default memo(Cart)