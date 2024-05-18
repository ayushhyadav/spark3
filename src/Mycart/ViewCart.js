import React,{useState} from 'react';
import './ViewCart.css';
import { NavLink } from 'react-router-dom';

export const ViewCart = ({ onClose }) => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Sovix Smartphone PWR20 Mini, 64GB",
            price: 2800.00,
            image: "assets/img5.webp",
            color: "Dark Grey",
            quantity: 1
        },])
        const handleButtonClick = () => {
            onClose(); // Call the onClose function passed from Header component
          };

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
        <div className='max-container'>
            <header className='cart-header d-flex justify-content-center align-items-center'>
                <i onClick={handleButtonClick} className="fa-solid fa-angle-right"></i>
                <h3>Cart</h3>
            </header>
            <div className='sidewar'>
            {cartItems.length === 0 ? (
                            <p className="text-center">Cart is Empty</p>
                        ) : (cartItems.map(item => (
                    <div className='viewcart-img d-flex mt-5' key={item.id}>
                        <img src={item.image} alt='Product' />
                        <div className='view-inercantent'>
                            <h5>{item.name}</h5>
                            <span>{item.price}</span>
                            {/* <p>Color: {item.color}</p> */}
                            <div className='viewnumber-count'>
                                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                <label>{item.quantity}</label>
                                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                            </div>
                        </div>
                    </div>
                        ))
                )}

{cartItems.length !== 0 && (
                <div className='subtotal2'>
                    <h5>Subtotal</h5>
                    <p>₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
                    <NavLink onClick={handleButtonClick} to='/mycart'>View Cart</NavLink>
                </div>
                     )}
            </div>
        </div>
    );
};
