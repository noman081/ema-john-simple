import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faRightLong } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    // debugger;
    // console.log(props);
    const { cart, clearCart } = props;
    // console.log(cart);
    let price = 0;
    let shipping = 0;
    let quantity = 0;
    // console.log(cart);
    for (const product of cart) {
        quantity += product.quantity;
        price += product.price * product.quantity;
        shipping += product.shipping * product.quantity;
    }
    const tax = parseFloat((price * .1).toFixed(2));
    const total = price + shipping + tax;
    return (
        <div className='cart'>
            <h2 className='cart-title'>Order Summary</h2>
            <div className='order-details'>
                <p>Selected Item: {quantity}</p>
                <p>Total Price:  ${price}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${total}</h3>
            </div>
            <button className='clear-btn' onClick={clearCart}>
                <p>Clear Cart</p>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
            <button className='review-btn'>
                <p>Review Order</p>
                <FontAwesomeIcon icon={faRightLong}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;