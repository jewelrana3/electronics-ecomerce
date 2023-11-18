import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './PaymentHistory.css'
import History from './History';

const PaymentHistory = () => {
    const pay = useLoaderData();


    const [paymentData, setPaymentData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://electronics-server-nine.vercel.app/payments/ka');
                const data = await response.json();
                setPaymentData(data);
                (data)
            } catch (error) {
                console.error('Error fetching payment data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='mb-28 pt-28'>
            <div className=' text-left md:px-7 px-5 bgColor mx-auto py-5'>
                <p>Thank you <span className='uppercase'>{paymentData ? <span>{[paymentData.formData.name]} </span> : <span>Loading...</span>}</span> Your order has been received!</p>
            </div>
            <div className='mt-16 px-4 pad mx-auto py-8'>
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
                    {paymentData ? (
                        <div className='flex justify-between'>
                            <div className=''>
                                <p className='text-3xl font-bold uppercase'>{[paymentData.formData.name]}</p>
                                <p className='uppercase mt-4'>{[paymentData.formData.country]}</p>
                                <p className='uppercase'>{[paymentData.formData.city]}</p>
                                <p className='uppercase'>{[paymentData.formData.number]}</p>
                            </div>
                            <div className='mt-5'>
                                <p><span className='font-semibold'>Date</span> : {paymentData.Date}</p>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div>
                    <div className='overflow-x-auto mt-10 payment-last-div'>
                        <table className='table'>
                            <thead>
                                <tr className='text-lg font-semibold'>
                                    <th>SL</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Item Price</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {
                                    pay.map((pd, inx) => <tr key={pd._id}>
                                        <td>{inx + 1}</td>
                                        <td>{pd.title}</td>
                                        <td>1</td>
                                        <td>{pd.price}</td>
                                        <td>{pd.price}</td>
                                    </tr>)
                                }

                        
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='last-div grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mb-10'>
                    <div>
                        <h1>Payment Method</h1>
                        <p>CARD</p>
                    </div>
                    <div>
                        <h1>Shipping Cost</h1>
                        <p>$20</p>
                    </div>
                    <div>
                        <h1>Discount</h1>
                        <p>$00.0</p>
                    </div>
                    <div>
                        <h1>Total Ammount</h1>
                        <p className='text-red-500 font-bold'>$888</p>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default PaymentHistory;