import React, { useState } from 'react';
import './Wishlist.css'

import { FaReply } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';


const Wishlist = () => {
    const wishs = useLoaderData();
    const [users, setUsers] = useState(wishs);
    

    const { image, title, price, classId } = users;
    const iconSize = '14px';

    const handleDelete = _id => {
        console.log('delet', _id)
        fetch(`http://localhost:5000/wishlist/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaing = users.filter(user => user._id !== _id)
                    setUsers(remaing)
                }
            })
    }

    // add btn and minus btn
    const handleQuantityChange = (productId,newQuantity) =>{
        const updateUsers = users.map(user =>{
            if(user._id === productId){
                const total = (user.price || 0) * newQuantity;
                return{...user,quantity:newQuantity,total}
            }
            return user;
        })
        setUsers(updateUsers)
    }

    console.log()

    return (
        <div className='text-center mb-20'>
            <div className='header-wishlist mb-20'>
                <h2 className='text-7xl font-bold'>My Wishlist</h2>
                <div className='flex justify-center mt-3 gap-3'>
                    <p className='hover:text-red-500 cursor-pointer'>Home</p>
                    <span className='text-5xl -mt-7'>.</span>
                    <p>Wishlist</p>
                </div>
            </div>
            <div className='shopping-cart py-3'>
                <p className='text-start ml-6 flex gap-3'>Shopping Cart <FaReply size={iconSize} className='font-thin mt-2' /></p>
            </div>
            <div className="overflow-x-auto px-32 mt-8">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg font-bold text-black text-center'>
                            <th className='border border-gray'>Image</th>
                            <th className='border border-gray'>Product</th>
                            <th className='border border-gray'>Unit Price</th>
                            <th className='border border-gray'>Quantity</th>
                            <th className='border border-gray'>Total</th>
                            <th className='border border-gray'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                            users.map(product => <tr className='text-center text-xl' key={product._id}>
                                <td className='border border-gray w-48'>
                                    <div className="image flex items-center justify-center">
                                        <img className='' src={product.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>
                                <td className='border border-gray'>{product.title}</td>
                                <td className='border border-gray'>${product.price}</td>
                                <td className='border border-gray text-2xl '>
                                    <div className='border border-gray-300 flex items-center justify-evenly'>
                                        <button onClick={()=> handleQuantityChange(product._id,(product.quantity || 1) - 1)} className='ml- '><span className='mr-4 font-bold w-7' style={{ width: '30px' }}>-</span> <span className='ml- border-r-2' ></span></button>
                                        <button>{product.quantity || 0}</button>
                                        <button onClick={()=> handleQuantityChange(product._id,(product.quantity || 0) + 1)} className='mr-2 border-l-2'><span className='ml-4 text-2xl font-bold'>+</span></button>
                                    </div>
                                </td>
                                <td className='border border-gray'>${product.total}</td>
                                <td className='border border-gray'> <AiOutlineClose onClick={() => handleDelete(product._id)} className='cursor-pointer text-center mx-auto' /></td>
                            </tr>)
                        } 
                  
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wishlist;