import React, {  useContext, useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminNavbar.css';
import logo from '../../assets/Admin_Assets/logo3.jpg';
import cart_icon from '../../assets/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import nav_dropdown from '../../assets/Frontend_Assets/nav_dropdown.png'
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext)
  const menuRef = useRef();
  const navigate = useNavigate();
  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
        
       <div className='nav-logo'>
       <img src={logo} alt="" id='logo-sp' />
       <p>SHOPEASY</p>  </div>      
        
        <div className='nav-login-cart'>
        <Link style={{textDecoration:"none"}} to='/'><button className='btn btn-primary'>Logout</button></Link>
        </div>
    </div>
  )
}

export default Navbar