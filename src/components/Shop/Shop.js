import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const addToCart = product => {
        console.log(cart);
        const newCart = [...cart, product];
        setCart(newCart);
        const newPrice = price + product.price;
        setPrice(newPrice);
        console.log(newCart);
        console.log(price);
    }
    const clearCart = () => {
        cart = [];
        setCart(cart);
        setPrice(0);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2 className='cart-title'>Order Summary</h2>
                <div className='order-details'>
                    <p>Selected Item: {cart.length}</p>
                    <p>Total Price:  {price}</p>
                    <p>Total Shipping Charge: </p>
                    <p>Tax: </p>
                    <h3>Grand Total: </h3>
                </div>
                <button className='clear-btn' onClick={clearCart}>Clear Cart</button>
                <button className='review-btn'>Review Order</button>
            </div>
        </div>
    );
};

export default Shop;