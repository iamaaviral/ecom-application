import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Product from '../Product/Product';
import './List.css'
import productsData from '../../constants/products.json'
//context

const List = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const data = productsData
        setData(data)
        // fetch('https://demo9170788.mockable.io/products')
        // .then(res => res.json())
        // .then(data => {
        //     setData(data)
        // })
    }, [])

    return (
       
                    <div className="each-item-wrapper">
            {data && data.products.map((eachItem, index) => {
                return  <ErrorBoundary>
                            <Product item={eachItem} key={eachItem.productId} />
                        </ErrorBoundary>
            })}
        </div>
    )
}

export default List;