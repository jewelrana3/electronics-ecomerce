import React, { useState } from 'react';
import { AiFillCreditCard } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css'
import { AiOutlinePlus } from 'react-icons/ai';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Payments from '../../components/Payments';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway)

const Checkout = () => {
    const product = useLoaderData();
    const [users, setUsers] = useState(product)

    const [title, price] = users;
    const amount = users.reduce((total, product) => total + product.price, 0);
    const prices = parseFloat(amount.toFixed(2))
    console.log(prices)


    return (
        <div className='text-center mb-20'>
            <div className='header-wishlist mb-20'>
                <h2 className='text-7xl font-bold'>Checkout</h2>
                <div className='flex justify-center mt-3 gap-3'>
                    <p className='hover:text-red-500 cursor-pointer'>Home</p>
                    <span className='text-5xl -mt-7'>.</span>
                    <p>Checkout</p>
                </div>
            </div>

            <div className='flex gap-7 px-20'>
                <p className='border-b-4 border-red-500 w-1/2'></p>
                <p className='border-b-4 border-red-500 w-1/2'></p>
            </div>

            <div className='flex gap-7 px-20'>
                <div className='w-1/2'>
                    <div className='mt-4 ml-8 flex items-center gap-3'>
                        <p><AiFillCreditCard /></p>
                        <p>Returning customer? Click here to login</p>
                    </div>
                    <div className='ml-8'>
                        <h2 className='text-start  text-4xl font-bold mt-4 mb-4'>Billing Details</h2>
                        <p className='border-b-2'></p>
                        <form className='text-start'>
                            <div className='mt-4'>
                                <label className='text-gray-500 text-lg'>First Name <span className='text-red-600 font-bold'>*</span></label><br />
                                <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='First Name' />
                            </div>
                            <div className='mt-4'>
                                <label className='text-gray-500 text-lg'>Last Name <span className='text-red-600 font-bold'>*</span></label><br />
                                <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='Last Name' />
                            </div>
                            <div className='mt-4'>
                                <label className='text-gray-500 text-lg'>Your Address <span className='text-red-600 font-bold'> *</span></label><br />
                                <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='Your Address' />
                            </div>
                            <div className='mt-4'>
                                <label className='text-gray-500 text-lg'>Town / City<span className='text-red-600 font-bold'> *</span></label><br />
                                <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='Your Address' />
                            </div>
                            <div className='flex gap-6'>
                                <div className='w-1/2'>
                                    <label className='text-gray-500 text-lg'>State / Country<span className='text-red-600 font-bold'> *</span></label><br />
                                    <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='Your Address' />
                                </div>
                                <div className='w-1/2'>
                                    <label className='text-gray-500 text-lg'>Postcode<span className='text-red-600 font-bold'> *</span></label><br />
                                    <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='Your Address' />
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className='w-1/2'>
                                    <label className='text-gray-500 text-lg'>Email Address<span className='text-red-600 font-bold'> *</span></label><br />
                                    <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='Your Address' />
                                </div>
                                <div className='w-1/2'>
                                    <label className='text-gray-500 text-lg'>Phone<span className='text-red-600 font-bold'> *</span></label><br />
                                    <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='Your Address' />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='flex items-center gap-3 mt-4' style={{ marginLeft: '40px' }}>
                        <p><AiFillCreditCard /></p>
                        <p>Returning customer? Click here to login</p>
                    </div>
                    <div className='border border-gray-400 mt-7 pb-20 font-semibold'>
                        <div className='ml-8 mt-5'>
                            <h2 className='text-start  text-4xl font-bold mt-4 mb-4'>Your Product</h2>
                            <p className='border-b-2'></p>
                        </div>
                        <div className='px-10'>
                            <div>
                                <div className='flex justify-between mt-6'>
                                    <p>Product</p>
                                    <p>Total</p>
                                </div>
                                <p className='border-b-2 mt-4'></p>
                            </div>
                            <div>
                                {users.map((product) => (
                                    <div className=' mt-3 mb-3' key={product._id}>
                                        <div className='flex justify-between items-center'>
                                            <p className='font-semibold'>{product.title}</p>
                                            <p className='font-semibold'>$:{product.prices}</p>
                                        </div>
                                        <p className='border-b-2 mt-4'></p>
                                    </div>
                                ))}

                            </div>
                            <div>
                                <div className='flex justify-between mt-6'>
                                    <p>Cart Subtotal</p>
                                    <p>${amount.toFixed(2)}</p>
                                </div>
                                <p className='border-b-2 mt-4'></p>
                            </div>
                            <div>
                                <div className='flex justify-between mt-6'>
                                    <p>Shipping</p>
                                    <p>Delivery: Today Cost : $60.00</p>
                                </div>
                                <p className='border-b-2 mt-4'></p>
                            </div>
                            <div>
                                <div className='flex justify-between mt-6'>
                                    <p>Sub Total</p>
                                    <p>${amount.toFixed(2)}</p>
                                </div>
                                <p className='border-b-2 mt-4'></p>
                            </div>
                            <div>
                                <div className='flex justify-between mt-6'>
                                    <p>Shipping Cost</p>
                                    <p>$0</p>
                                </div>
                                <p className='border-b-2 mt-4'></p>
                            </div>
                            <div>
                                <div className='flex justify-between mt-6'>
                                    <p>Discount</p>
                                    <p>$0</p>
                                </div>
                                <p className='border-b-2 mt-4'></p>
                            </div>
                            <div>
                                <div className='flex justify-between mt-6'>
                                    <p>Total Order</p>
                                    <p className='text-red-600 text-xl'>${amount.toFixed(2)}</p>
                                </div>
                                <p className='border-b-2 mt-4'></p>
                            </div>
                        </div>
                        {/* bank transfer */}
                        <div className='px-10'>
                            <div className='check flex items-center justify-between gap-4 mt-4'>
                                <div className='flex items-center gap-6'>
                                    <p className='p'></p>
                                    <p>Direct Bank Transfer</p>
                                </div>
                                <div>
                                    <p><AiOutlinePlus /></p>
                                </div>
                            </div>

                        </div>
                        <div className='px-10 mt-10'>
                            <Elements stripe={stripePromise}>
                                <Payments prices={prices}></Payments>
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Checkout;