import React, { useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img className='logo' src={assets.girldev_8} alt="" />
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"? "active": ""}>home</Link>
            <a href='#expolre-menu' onClick={()=>setMenu("menu")} className={menu==="menu"? "active": ""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"? "active": ""}>mobile app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"? "active": ""}>contact us</a>
        </ul>
        <div className='navbar-right'>
            <img className='icon' src={assets.girldev_8} alt="" />
            <div className='navbar-search-icon'>
                <img className='icon' src={assets.girldev_8} alt="" />
                <div className='dot'>

                </div>
            </div>
                <button className='navbar-button'>sign in</button>
        </div>
    </div>
  )
}

export default Navbar
