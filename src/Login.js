import React,{useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from './firebase';

function Login() {
  const history = useHistory();
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    //do some fancy firebase login stuff...
    auth
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
          console.log('signIn auth', auth);
          if(auth){
            history.push('/');
          }
        })
        .catch(error => alert(error.message))

  }

  const register = e => {
    e.preventDefault();

    //do some fancy firebase register stuff...
    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
          //it successfully created a new user with email and password
          console.log(auth);

          if(auth){
            history.push('/');
          }
        })
        .catch(error => alert(error.message))

  }

  return (
    <div className = "login">

        <Link to = "/">
             <img className="login-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG13.png" alt=''/>
        </Link>

        <div className = "login-container">
            <form>
                <h1>Sign-in</h1>

                <strong>Email</strong>
                <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

                <strong>Password</strong>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                <button className = "login-signInButton" onClick={signIn}>Sign In</button>
            </form>
            <p>
                By signing in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. 
                Please see our Privacy Notice, our Cookies Notice,
                and our Interest Based Ads Notice.
            </p>
            <button className = "login-registerButton" onClick={register}>Create new Amazon Account</button>
        </div>
    </div>
  )
}

export default Login;