// import React, {  useContext, useState } from 'react';
// import { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CategoryNav.css';
// import logo from '../Assets/Admin_Assets/logo3.jpg';
// import cart_icon from '../Assets/Frontend_Assets/cart_icon.png';
// import { Link } from 'react-router-dom';
// import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png'
// import { ShopContext } from '../../context/ShopContext';

// const CategoryNav = () => {
//   const [menu, setMenu] = useState("shop");
//   const {getTotalCartItems} = useContext(ShopContext)
//   const menuRef = useRef();
//   const navigate = useNavigate();
//   const dropdown_toggle = (e) =>{
//     menuRef.current.classList.toggle('nav-menu-visible');
//     e.target.classList.toggle('open');
//   }
//   return (
//     <div className='catg-navbar'>
        
//         <img className='catg-nav-dropdown' onClick={dropdown_toggle}  alt="" />
//         <ul ref={menuRef} className="catg-nav-menu">
//         <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none",color:"white"}} to='/shop'>Grocery</Link>{menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none",color:"white"}} to='/shop'>Mobiles</Link>{menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none",color:"white"}} to='/shop'>Fashion</Link>{menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none",color:"white"}} to='/shop'>Electronics</Link>{menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none",color:"white"}} to='/shop'>Home & Furniture</Link>{menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none",color:"white"}} to='/shop'>Appliances</Link>{menu==="shop"?<hr/>:<></>}</li>
//           <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none",color:"white"}} to='/shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//           <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none",color:"white"}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
//           <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none",color:"white"}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
//           <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color:"white"}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
//         </ul>
        
//     </div>
//   )
// }

// export default CategoryNav 

import React, {  useContext, useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { ShopContext } from '../../context/ShopContext';

import './CategoryNav.css';

const CategoryNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const [menu, setMenu] = useState("shop");
  
  const menuRef = useRef();
  const navigate = useNavigate();
  
    return (
        <nav className="catg-navbar">
            <div className="catg-toggle" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`catg-nav-links ${isOpen ? 'show' : ''}`}>
            <li onClick={()=>{setMenu("groceries")}}><Link style={{textDecoration:"none",color:"white"}} to='/groceries'>Grocery</Link>{menu==="shop"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("mobiles")}}><Link style={{textDecoration:"none",color:"white"}} to='/mobiles'>Mobiles</Link>{menu==="mobiles"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("electronics")}}><Link style={{textDecoration:"none",color:"white"}} to='/electronics'>Electronics</Link>{menu==="shop"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none",color:"white"}} to='/shop'>Fashion</Link>{menu==="shop"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("home&furniture")}}><Link style={{textDecoration:"none",color:"white"}} to='/furnitures'>Home & Furniture</Link>{menu==="shop"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("appliances")}}><Link style={{textDecoration:"none",color:"white"}} to='/appliances'>Appliances</Link>{menu==="shop"?<hr/>:<></>}</li>
           
           <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none",color:"white"}} to='/men'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none",color:"white"}} to='/women'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color:"white"}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
        </nav>
    );
};

export default CategoryNav;
