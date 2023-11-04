import React from 'react';
import { AiFillCreditCard } from 'react-icons/ai';

const Checkout = () => {
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
                                <label className='text-gray-500 text-lg'>Your Address <span className='text-red-600 font-bold'>*</span></label><br />
                                <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='Your Address' />
                            </div>
                            <div className='mt-4'>
                                <label className='text-gray-500 text-lg'>Town / City<span className='text-red-600 font-bold'>*</span></label><br />
                                <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='Your Address' />
                            </div>
                            <div className='flex gap-6'>
                                <div className='w-1/2'>
                                    <label className='text-gray-500 text-lg'>Town / City<span className='text-red-600 font-bold'>*</span></label><br />
                                    <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='Your Address' />
                                </div>
                                <div className='w-1/2'>
                                    <label className='text-gray-500 text-lg'>Town / City<span className='text-red-600 font-bold'>*</span></label><br />
                                    <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='Your Address' />
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className='w-1/2'>
                                    <label className='text-gray-500 text-lg'>Town / City<span className='text-red-600 font-bold'>*</span></label><br />
                                    <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='Your Address' />
                                </div>
                                <div className='w-1/2'>
                                    <label className='text-gray-500 text-lg'>Town / City<span className='text-red-600 font-bold'>*</span></label><br />
                                    <input className='w-full h-12 border mt-2 pl-5' type="text" placeholder='Your Address' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='flex items-center gap-3 mt-4' style={{ marginLeft: '360px' }}>
                        <p><AiFillCreditCard /></p>
                        <p>Returning customer? Click here to login</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;