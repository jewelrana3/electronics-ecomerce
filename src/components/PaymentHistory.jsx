import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './PaymentHistory.css'

const PaymentHistory = () => {
    const pay = useLoaderData();


    const [paymentData, setPaymentData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/payments/ka');
                const data = await response.json();
                setPaymentData(data);
            } catch (error) {
                console.error('Error fetching payment data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='mb-28 '>
            <div className='mt-28 text-left px-7 bgColor mx-auto py-5'>
                <p>Thank you Juyel Haque Your order has been received!</p>
            </div>
            <div className='mt-28 px-4 pad mx-auto py-8'>
                <div>
                    <img src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg" alt="" />
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <div>
                        <p>2879 Elk Creek Road</p>
                        <p>Stone Mountain, Georgia</p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>INVOICE</h2>
                    </div>
                </div>

                <p className='border-b-2 border-solid border-white mt-5 mb-4'></p>

                <div>
                    {/* Map over the pay object and display key-value pairs */}
                    {/* {Object.values(pay).map((va, index) => (
                        <div key={index} className='mt-3'>
                            <p className='text-3xl font-bold'>{va.formData.name}</p>
                            <p className='text-xl'>{va.formData.country}</p>
                            <p>{va.formData.city}</p>
                            <p>ID: {paymentData._id}</p>
                            <p>{va.formData.number}</p>
                        </div>
                    ))} */}
                    <div>
                        {paymentData ? (
                            <div>
                         
                                <p>{[paymentData.formData.name]}</p>
                                <p>{[paymentData.formData.country]}</p>
                                <p>{[paymentData.formData.city]}</p>
                                <p>{paymentData.Date}</p>
                                {/* Display other properties as needed */}
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div>
                        {
                            pay.map((product) => (
                                <div key={product._id}>
                                    <p>{product.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );


};

export default PaymentHistory;