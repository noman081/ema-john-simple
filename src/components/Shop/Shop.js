import React, { useEffect, useState } from 'react';
import { addToDB, getLocalStorage, removeDb } from '../../utilities/localStorageDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const storedData = getLocalStorage();
        // console.log(storedData);
        let selectedProduct = [];
        for (const id in storedData) {
            const quantity = storedData[id];
            const addedProduct = products.find(product => product.id === id);
            // console.log(addedProduct);
            if (addedProduct) {
                addedProduct.quantity = quantity;
                selectedProduct.push(addedProduct);
            }
        }
        console.log(selectedProduct);
        setCart(selectedProduct);
    }, [products]);
    const addToCart = product => {
        // console.log(cart);
        // const newCart = [...cart, product];
        // setCart(newCart);
        // console.log(newCart);
        let newCart = [];
        const exists = cart.find(cartProduct => cartProduct.id === product.id);

        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const rests = cart.filter(cartProduct => cartProduct.id !== product.id);
            exists.quantity += 1;
            newCart = [...rests, exists]
        }
        setCart(newCart);
        addToDB(product.id);

    }
    const clearCart = () => {
        cart = [];
        setCart(cart);
        removeDb();
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;