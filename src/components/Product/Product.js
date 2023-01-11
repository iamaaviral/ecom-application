import React from "react";
import './Product.css';
import {UserContext} from '../../App'

const Product = ({item})  => {
    let result = React.useContext(UserContext)
    console.log(result)
    return (
        <div className="each-item">
        <div className="img-wrapper">
            <img src={item.searchImage} alt="product-img" />
        </div>
        <div className="content-wrapper">
            <h3 className="brand-name">{item.brand}</h3>
            <h4 className="brand-desc"> {item.additionalInfo}</h4>
            <h5>
                <span className="b-d-price">Rs. {item.price}</span>
                {item.discountDisplayLabel ? <span className="b-price">Rs. {item.mrp}</span> : null}
                <span className="b-discount">{item.discountDisplayLabel}</span>
            </h5>
            <button
                className={`add-to-cart-btn`}
                // onClick={addItemToCart}
                // disabled={added}
            >Add to Cart</button>
            <h3>{result.userData.name}</h3>
            <button onClick={() => result.setUserData(null)}>
                Logout
            </button>
        </div>
    </div>   
    )
}

export default Product