import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopUp.css'

const LoginPopUp = ({setShowLogin}) => {
    const [currentState,setCurrentState] = useState("Sign Up")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
          
          <input type="email" placeholder='Your Email' required/>
          <input type="password" placeholder='Your Password' required/>
        </div>
        <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login"
        ?<p>Create a new account?<span onClick={()=>setCurrentState("Sign Up")}>Click Here!</span></p>
        :<p>Already Have an account? <span onClick={()=>setCurrentState("Login")}>Login Here!</span> </p>
        }
      </form>
    </div>
  )
}

export default LoginPopUp
