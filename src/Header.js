import React from 'react';
import './Header.css';
import {AiFillAmazonCircle} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdOutlineShoppingBasket} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

  const [{basket}, dispatch] = useStateValue();
 

  return (
    <div className = 'header'>
      <Link to="/">
        <AiFillAmazonCircle className = 'amazon-logo'/>
      </Link>
      <div className = "header-search">
        <input
        className = "header-searchInput" type="text" />
        <AiOutlineSearch className = 'search-logo'/>
      </div>
      <div className="header-nav">
        <div className = "header-option">
          <span className = "header-optionLineOne">Hello Guest</span>
          <span className = "header-optionLineTwo">Sign In</span>

        </div>
        <div className = "header-option">
          <span className = "header-optionLineOne">Returns</span>
          <span className = "header-optionLineTwo">& Orders</span>
          
        </div>
        <div className = "header-option">
          <span className = "header-optionLineOne">Your</span>
          <span className = "header-optionLineTwo">Prime</span>
        </div>
        <Link className ="shoppingBasketLink" to = "/checkout">
        <div className = "header-optionBasket">
          <MdOutlineShoppingBasket className="basket-logo"/>
          <span className = "header-optionLineTwo header-basketCount">{basket?.length}</span>
        </div>
        </Link>
       
      </div>
    </div>
  )
}

export default Header