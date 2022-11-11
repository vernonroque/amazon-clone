import React,{useState, useEffect} from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import {useStateValue} from './StateProvider';
import {Link, useHistory} from 'react-router-dom';
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer";
import axios from './axios';




function Payment() {

    const history = useHistory();
    const [{basket,user}, dispatch] = useStateValue();
    // console.log('USER EMAIL >>>>', user?.email);
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret,setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        //generate the special stripe secret which allows us 
        //to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currency's subunit
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret);

        }

        getClientSecret();

    },[basket]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // fancy stripe stuff
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret , {
            payment_method: {
                card: elements.getElement(CardElement)
            }
            }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders');

        })
    }

    const handleChange = e =>{
        //Listen for changes in the CardElement
        //and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

  return (
    <div className = 'payment'>
        <div className = 'payment-container'>
            {/* Payment section - delivery address */}
            <h1>
                Checkout(
                    <Link to = '/checkout'>{basket?.length} items</Link>
                )
            </h1>
            <div className = 'payment-section'>
                <div className = 'payment-title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className = 'payment-address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, California 91506</p>
                </div>
            </div>

            {/* Payment section - Review Items */}
            <div className = 'payment-section'>
                <div className = 'payment-title'>
                        <h3>Review Items and Delivery</h3>
                </div>
                <div className = 'payment-items'>
                    {basket.map((item,i) => {
                        return <CheckoutProduct
                        key = {i} //added key for each product
                        item={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    })}
                </div>
            </div>
            {/* Payment section - Payment method */}
            <div className = "payment-section">
                <div className = "payment-title">
                    <h3>Payment Method</h3>
                </div>
                <div className = "payment-details">
                    {/* Stripe magic will go */}
                    <form onSubmit = {handleSubmit}>
                        <CardElement onChange = {handleChange}/>
                        <div className = "payment-priceContainer">
                            <CurrencyFormat
                                renderText = {(value) => (
                                    <>
                                        <p>
                                            {/* Part of hw */}
                                            Subtotal ({basket?.length} items):<strong>{value}</strong>
                                        </p>
                                    
                                        <small className = "subtotal-gift">
                                            <input type="checkbox"/> This order contains a gift
                                        </small>
                                    </>
                                )} 
                                decimalScale={2}
                                value={getBasketTotal(basket)} //part of hw
                                displayType={"text"}
                                thousandSeperator={true}
                                prefix={"$"}
                            />
                            <button disabled = {processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {/* Error */}
                        {error && <div>{error}</div>}

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment