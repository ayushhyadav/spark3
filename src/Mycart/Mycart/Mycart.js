import React, { useState } from 'react';
import './Mycart.css';

export const Mycart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Sovix Smartphone PWR20 Mini, 64GB",
            price: 2800.00,
            image: "assets/img5.webp",
            color: "Dark Grey",
            quantity: 1
        },
        //  {
        //     id: 2,
        //     name: "Sovix Smartphone PWR20 Mini, 64GB",
        //     price: 2800.00,
        //     image: "assets/img5.webp",
        //     color: "Dark Grey",
        //     quantity: 1
        // },
        //  {
        //     id: 3,
        //     name: "Sovix Smartphone PWR20 Mini, 64GB",
        //     price: 2800.00,
        //     image: "assets/img5.webp",
        //     color: "Dark Grey",
        //     quantity: 1
        // }
    ]);

    const handleQuantityChange = (id, newQuantity) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                const quantity = Math.max(1, newQuantity);
                return { ...item, quantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const removeItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    };

    return (
        <div className='container'>
            <div className='row my-cart justify-content-center'>
                <div className='col-md-9'>
                    <div className='cart-heading'>
                        <h1>My cart</h1>
                        {cartItems.length === 0 ? (
                            <p className="text-center">Cart is Empty</p>
                        ) : (
                            cartItems.map(item => (
                                <div key={item.id} className='row cart-box'>
                                    <div className='col-md-8 d-flex'>
                                        <div className='cart-img'>
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className='inercantent'>
                                        <i className="fa-solid fa-xmark" onClick={() => removeItem(item.id)}></i>
                                            <h5>{item.name}</h5>
                                            <span>₹{item.price}</span>
                                            <p>Color: {item.color}</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='price d-flex justify-content-between align-items-center'>
                                            <div className='number-count'>
                                                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                            </div>
                                            <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                                            <i className="fa-solid fa-xmark" onClick={() => removeItem(item.id)}></i>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                        <div className='note d-flex align-items-center mt-4'>
                            <svg viewBox="0 0 14 16" fill="currentColor" width="14" height="16"><g id="final-cart" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><g id="general-layout" transform="translate(-515 -839)" fill="currentColor"><g id="coupon-icon" transform="rotate(30 -1300.653 1393.349)"><path d="M1,14.0046024 C0.999339408,13.9996515 9.00460243,14 9.00460243,14 C8.99965149,14.0006606 9,5.41421356 9,5.41421356 L5,1.41421356 L1,5.41421356 L1,14.0046024 Z M-2.72848411e-12,5 L5,-4.66116035e-12 L10,5 L10,14.0046024 C10,14.5543453 9.5443356,15 9.00460243,15 L0.995397568,15 C0.445654671,15 -2.72848411e-12,14.5443356 -2.72848411e-12,14.0046024 L-2.72848411e-12,5 Z" id="Rectangle-6" fillRule="nonzero"></path><circle id="Oval-2" cx="5" cy="5" r="1"></circle></g></g></g></svg>
                            {/* <span>Enter a promo code</span>  */}
                            <input style={{padding:10,}} placeholder='Enter a promo code' ></input>
                        </div>
                        <div className='note d-flex align-items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" className="bqcF4y">
                                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                                    <g transform="translate(-515 -882)">
                                        <g transform="translate(515 882)">
                                            <path stroke="currentColor" d="M.5.5h7.778L11.5 3.737V12.5H.5V.5z"></path>
                                            <path stroke="currentColor" d="M10.793 3.5H8.5V1.207L10.793 3.5z"></path>
                                            <path fill="currentColor" d="M3 3H6V4H3z"></path>
                                            <path fill="currentColor" d="M3 6H9V7H3z"></path>
                                            <path fill="currentColor" d="M3 9H9V10H3z"></path>
                                            </g></g></g></svg>
                            <input style={{padding:10}} placeholder='Add a note' ></input>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 p-0'>
                    <div className='Order-summary'>
                        <h2>Order summary</h2>
                        {cartItems.length !== 0 && (
                            <div>
                                <div className='subtotal d-flex justify-content-between align-items-center'>
                                    <h6>Subtotal</h6>
                                    <h6>₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h6>
                                </div>
                                <a href='#'> Estimate Delivery</a>
                                <div className='Total d-flex justify-content-between align-items-center flex-wrap'>
                                    <h6>Total</h6>
                                    <h6>₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h6>
                                    <a href='#'>Checkout</a>
                                    <span><i className="fa-solid fa-lock"></i>Secure Checkout</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
