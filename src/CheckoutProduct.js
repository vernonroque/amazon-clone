import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title, image, price, rating,hideButton}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from the basket; we use dispatch
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })

    }
  return (
    <div className = "checkoutProduct">
        <img className = 'checkoutProduct-image' src={image} alt=''/>

        <div className = 'checkoutProduct-info'>
            <p className = 'checkoutProduct-title'>{title}
            </p>
            <p className = "checkoutProduct-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className = "checkoutProduct-rating">
                {Array(rating).fill().map((_,i)=>{
                return <p>⭐️</p>
                })}
            </div>
            {!hideButton && <button onClick={removeFromBasket}>Remove From Basket</button>}
            
        </div>


    </div>
  )
}

export default CheckoutProduct