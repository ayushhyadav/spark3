import React, { useState } from 'react'
import './MyOrders.css'
import MyAccount from '../MyAccount/MyAccount';
import MyAddresses from '../MyAddresses/MyAddresses';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [Components_name, setComponents_name] = useState('My Orders');
    return (
        <div className='bg-banner'>
            <div className='profile-bg'>
                <img src='assets/bg-my-oder.jpg' />
                <i class="fa-solid fa-camera"></i>
            </div>
            <div className=' g-banner-icon d-md-flex align-items-center'>
                <img src='assets/user.png' />
                <h2>User Name</h2>
            </div>
            <div className='nav-top-bar'>
                <header>
                    <div class="navbat-controler">
                    <button 
                            onClick={() => setComponents_name('My Orders')}
                            target="_self"
                            className={Components_name === 'My Orders' ? "active text-lime-800 border-t-12 border-lime-800" : "text-black border-t-10 border-lime-800"}
                        >
                            <b>My Orders</b>
                        </button>
                        <button 
                            onClick={() => setComponents_name('My Addresses')}
                            target="_self"
                            className={Components_name === 'My Addresses' ? "active text-lime-800 border-t-12 border-lime-800" : "text-black border-t-10 border-lime-800"}
                        >
                            <b>My Addresses</b>
                        </button>
                        <button 
                            onClick={() => setComponents_name('My Account')}
                            target="_self"
                            className={Components_name === 'My Account' ? "active text-lime-800 border-t-12 border-lime-800" : "text-black border-t-10 border-lime-800"}
                        >
                            <b>My Account</b>
                        </button>

                    </div>
                    {Components_name === 'My Orders' ? <MyOrder /> : null}
                    {Components_name === 'My Addresses' ? <MyAddresses /> : null}
                    {Components_name === 'My Account' ? <MyAccount /> : null}
                </header>
            </div>
        </div>
    )
}

export default MyOrders
