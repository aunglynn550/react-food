import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='footer-logo' src={assets.logo} alt="" />                
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugiat, aperiam 
            </p>
            <div className="footer-social-icons">
                <img src={assets.facebook} alt="" />
                <img src={assets.twitter} alt="" />
                <img src={assets.instagram} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h3>GET IN TOUCH</h3>
            <ul>
                <li>+1-212-456-9878</li>
                <li>contact@deliveryrk.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer copyright'>Copyright 2024 @ DeliveryRk.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
