import React,{useState,useEffect} from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {useHistory} from 'react-router-dom';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    console.log( console.log('This is the basket!!!', basket))
    const history = useHistory();

    const [sum,setSum] = useState('');
    

    useEffect(()=>{

        basket.map(element=>{
            console.log('current sum',sum);
            console.log(sum +element.price);
            return setSum(sum+element.price);
            // console.log(sum);
            // console.log(element.price);
        });


    },[basket])

    // console.log('the total sum',sum);
    
  return (
    <div className = "subtotal">
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
         <button onClick = {e => history.push('/payment')}> Proceed to Checkout</button>
    
    
    </div>
  )
}

export default Subtotal