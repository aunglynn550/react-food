import React, { useContext, useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const[menu, setMenu] = useState("home")
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
        <Link to ='/'><img className='logo' src={assets.girldev_8} alt="" /></Link> 
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"? "active": ""}>home</Link>
            <a href='#expolre-menu' onClick={()=>setMenu("menu")} className={menu==="menu"? "active": ""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"? "active": ""}>mobile app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"? "active": ""}>contact us</a>
        </ul>
        <div className='navbar-right'>
            <img className='icon' src={assets.girldev_8} alt="" />
            <div className='navbar-search-icon'>
               <Link to ='/cart'><img className='icon' src={assets.girldev_8} alt="" /></Link> 
                <div className={getTotalCartAmount()===0?"":"dot" }>

                </div>
            </div>
                <button onClick={()=>setShowLogin(true)} className='navbar-button'>sign in</button>
        </div>
    </div>
  )
}

export default Navbar
