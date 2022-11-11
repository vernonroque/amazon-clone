import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';
//import FlipMove from 'react-flip-move';


function Checkout() {
  const [{basket,user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout-left">
            <img 
                 className = "checkout-ad"
                 src ="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61jovjd+f9L._SX3000_.jpg"
                 alt = "" />

            <div>
                <h3>Hello {user?.email}</h3>
                <h2 className = "checkout-title">Your Shopping Basket</h2>

             
                {basket.map(item=>{
                  return <CheckoutProduct
                  id={item.id}
                  title={item.title}  
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                })}
                
               
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