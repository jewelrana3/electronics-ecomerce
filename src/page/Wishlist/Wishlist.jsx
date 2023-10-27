import React from 'react';
import './Wishlist.css'
import useWishlist from '../../hooks/useWishlist';
import {  FaReply } from 'react-icons/fa';

const Wishlist = () => {
    const [wish] = useWishlist();
    const iconSize = '14px'; // Set the desired size for the icon

    return (
        <div className='text-center'>
            <div className='header-wishlist mb-20'>
                <h2 className='text-7xl font-bold'>My Wishlist</h2>
                <div className='flex justify-center mt-3 gap-3'>
                    <p className='hover:text-red-500 cursor-pointer'>Home</p>
                    <span className='text-5xl -mt-7'>.</span>
                    <p>Wishlist</p>
                </div>
            </div>
            <div className='shopping-cart py-7'>
                <p className='text-start ml-6 flex gap-3'>Shopping Cart <FaReply size={iconSize} className='font-thin mt-2'/></p>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Wishlist;