// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './Payments.css'
import { useEffect, useState } from "react";

const Payments = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardErorr, setCardErorr] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({price}),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [])


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
            card
        })

        if (error) {
            console.log('error', error)
            setCardErorr(error.message)
        } else {
            console.log('payment', paymentMethod)
            setCardErorr('')
        }
    }


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
                disabled={!stripe || !clientSecret}>
                    Place Order
                </button>
            </form>
            {cardErorr && <p className="text-red-500 text-left mt-6">{cardErorr}</p>}
        </div>
    );
};

export default Payments;
