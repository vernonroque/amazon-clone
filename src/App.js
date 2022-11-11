//import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import{auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51M1wozHZydbvlB4cDrb8MtBGh2WGUG8ATRZ3zWhhghrmhAmuA682ao4rbZdu7qmjxgayCMNayUMe59ebrwvDWBiH00chn3j41w');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    //will only run once when the component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser);

      if(authUser){
        //the user just logged in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }
      else{
        //the user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
    {/* BEM convention */}
    <div className="app">
      
     <Switch>
      <Route path="/login">
        <Login/>
      </Route>
     <Route path="/checkout">
          <Header/>
          <Checkout/>
     </Route>
     <Route path="/payment">
          <Header/>
          <Elements stripe = {promise}>
              <Payment/>
          </Elements>
     </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
     </Switch>
    </div>
    </Router>

  );
}

export default App;
