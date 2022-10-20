import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout-left">
            <img 
                 className = "checkout-ad"
                 src ="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61jovjd+f9L._SX3000_.jpg"
                 alt = "" />

            <div>
                <h2 className = "checkout-title">Your Shopping Basket</h2>
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
            </div>
        </div>
    <div className = "checkout-right">
        <Subtotal/>

    </div>
        
            


    </div>
  )
}

export default Checkout