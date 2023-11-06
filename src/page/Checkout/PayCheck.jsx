import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PayCheck = () => {
    const stripe = useStripe();
    const elements = useElements();

    if (!stripe || !elements) {
        return null; 
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); 
      
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
        return null;
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default PayCheck;

