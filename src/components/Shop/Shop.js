import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2 className='cart-title'>Order Summary</h2>
                <div className='order-details'>
                    <p>Selected Item: </p>
                    <p>Total Price:  </p>
                    <p>Total Shipping Charge: </p>
                    <p>Tax: </p>
                    <h3>Grand Total: </h3>
                </div>
                <button className='clear-btn'>Clear Cart</button>
                <button className='review-btn'>Review Order</button>
            </div>
        </div>
    );
};

export default Shop;