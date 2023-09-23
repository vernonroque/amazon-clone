import React,{useState, useEffect} from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import {useStateValue} from './StateProvider';
import {Link, useHistory} from 'react-router-dom';
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
// import CurrencyFormat from "react-currency-format";
import currency from 'currency.js';
import {getBasketTotal} from "./reducer";
import axios from './axios';
import { db } from './firebase';
//import instance from './axios';




function Payment() {

    const [{basket,user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();
    
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState('');
    const [readyToSubmit, setReadyToSubmit] =useState(false);

    // function handlePurchase(){

    //     setFormSubmit(true);
    // }

    useEffect(() => {
        //generate the special stripe secret which allows us 
        //to charge a customer
        if(basket)                      //had to put this condition to resolve Axios Network Error
            setReadyToSubmit(true); 

        const getClientSecret = async () => {
           // console.log('The basket length>>>', basket.length );
            //console.log("ITEMS IN THE BASKET >>>", basket);
        
            try{
                const response = await axios({
                    method: 'post',
                    url: `/payments/create?total=${getBasketTotal(basket)*100}` //Stripe expects the total in a currency's subunit
                });
    
                // if(response){
                //     //console.log("THIS IS THE RESPONSE", response);
                //     setClientSecret(response.data.clientSecret);

                // }

                setClientSecret(response.data.clientSecret);
                
                }catch(error){
                console.log("THE ERROR >>>", error);
            }
        }
        
            if(readyToSubmit)   //had to put this condition to resolve Axios Network Error
             getClientSecret();   

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[basket,readyToSubmit]);

    if(basket){
        console.log('THE CLIENT SECRET >>>', clientSecret);
    }
    
    console.log("THE USER >>>", user);

    const handleSubmit = async (e) => {
      
        e.preventDefault();
        // fancy stripe stuff
        if(!user){
            alert('Please sign in before purchasing');
            return;
        }
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret , {
            payment_method: {
                card: elements.getElement(CardElement) 
            }
            }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation
            //the piece of code above is how Stripe gets the information and gives us the clientSecret for the order
                console.log('payment intent id', paymentIntent.id);
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

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
                    {basket.map(item => {
                        return <CheckoutProduct
                        //key = {i} //added key for each product
                        id={item.id}
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
                        <>
                         <p>
                           {/* Part of hw */}
                                     Subtotal ({basket?.length} items):<strong>{currency(getBasketTotal(basket)).format()}</strong>
                                 </p>
                            
                                 <small className = "subtotal-gift">
                                     <input type="checkbox"/> This order contains a gift
                                 </small>
                             </>
                        
                           
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

// hello world
// <CurrencyFormat
// renderText = {(value) => (
//     <>
//         <p>
//             {/* Part of hw */}
//             Subtotal ({basket?.length} items):<strong>{value}</strong>
//         </p>
    
//         <small className = "subtotal-gift">
//             <input type="checkbox"/> This order contains a gift
//         </small>
//     </>
// )} 
// decimalScale={2}
// value={getBasketTotal(basket)} //part of hw
// displayType={"text"}
// thousandSeperator={true}
// prefix={"$"}
// />
// hello world
export default Payment