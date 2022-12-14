import React from 'react';
import './Header.css'

const Header = ({ count }) => {
    return (
        <div className='bg-pink-600 text-white sticky top-0'>
            <div className='flex justify-between items-center w-11/12 mx-auto h-20 '>
                <div>
                    <p className='text-4xl font-bold cursor-pointer '>Logo</p>
                </div>
                <div className='flex gap-8 text-xl cursor-pointer '>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#shop">Shop</a></p>
                    <p><a href="#cart">Cart <sup>{count}</sup></a></p>
                    <p><a href="#order">Order</a></p>
                    <p><a href="#contact">Contact</a></p>
                </div >

            </div >
        </div >
    );
};

export default Header;