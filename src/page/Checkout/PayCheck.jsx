import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PayCheck = () => {
    const stripe = useStripe();
    const elements = useElements();

    if (!stripe || !elements) {
        return null; // You can return an error message or null here
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // Fixed the typo here
        // Add your payment logic here
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
        return null; // You can return an error message or null here
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
