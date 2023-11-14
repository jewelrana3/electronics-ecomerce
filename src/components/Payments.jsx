// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './Payments.css'
import { useEffect, useState } from "react";

import useAxiosSecure from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Payments = ({ prices, formData }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardErorr, setCardErorr] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [axiosSecure] = useAxiosSecure();
    const [process, setProcess] = useState(false);
    const [transactionId, setTransactionId] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        if (prices > 0) {
            axiosSecure.post('/create-payment-intent', { prices })
                .then(res => {
                    setClientSecret(res.data.clientSecret)

                })
        }
    }, [prices, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return null;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return null;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('error', error)
            setCardErorr(error.message)
        } else {
            console.log('payment', paymentMethod)
            setCardErorr('')
        }

        setProcess(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'Jenny Rosen',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }
        console.log('payment intent', paymentIntent)

        setProcess(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            navigate('/paymenthistory')
            // save to the server 
            const payments = {
                transactionId: paymentIntent.id,
                Date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                formData: formData,
            };

            axiosSecure.post('/payments', payments)
                .then(res => {
                    console.log('res', res.data)
                    if (res.data.insertedId) {
                        // display shoe
                    }
                })
        }

    }
    
    const isFormValid = () => {
        return formData.name && formData.city && formData.number && formData.country ;
        // return formData.name && formData.city && formData.phone && formData.country && formData.last_name && formData.code && formData.email && formData.address;
    };

    return (
        <div>
            <form className="" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="w-full mt-9 order py-4 border-none" type="submit"
                    disabled={!stripe || !clientSecret || process || !isFormValid()}>
                    Place Order
                </button>
            </form>
            {cardErorr && <p className="text-red-500 text-left mt-6">{cardErorr}</p>}
            {transactionId && <p className="text-green-500 text-left mt-6">Transaction Id Successfull {transactionId}</p>}

            
        </div>
    );
};

export default Payments;