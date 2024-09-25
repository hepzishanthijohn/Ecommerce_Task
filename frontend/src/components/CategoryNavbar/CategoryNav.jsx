import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoryNav.css';

const CategoryNav = () => {
    const [dropdown, setDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMouseEnter = (menu) => {
        setDropdown(menu);
    };

    const handleMouseLeave = () => {
        setDropdown(null);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="catg-navbar">
            <div className="catg-toggle" onClick={toggleMobileMenu}>
                &#9776; {/* Hamburger icon */}
            </div>
            <ul className={`catg-nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
                <li 
                    onMouseEnter={() => handleMouseEnter('groceries')} 
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="/groceries">Grocery</Link>
                    {dropdown === 'groceries' && (
                        <ul className="dropdown">
                            <li><Link to="/groceries">Grocery & Gourmet Foods</Link></li>
                            <li><Link to="/groceries">Dals & Pulses</Link></li>
                            <li><Link to="/groceries">Spices & Masalas</Link></li>
                            <li><Link to="/groceries">Oils & Ghee</Link></li>
                            <li><Link to="/groceries">Snack Foods</Link></li>
                            <li><Link to="/groceries">Dishwashing Supplies</Link></li>
                            <li><Link to="/groceries">Laundry Supplies</Link></li>
                            <li><Link to="/groceries">Household Cleaners</Link></li>
                        </ul>
                    )}
                </li>

                <li 
                    onMouseEnter={() => handleMouseEnter('mobiles')} 
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="/mobiles">Mobiles</Link>
                    {dropdown === 'mobiles' && (
                        <ul className="dropdown">
        
                            <li><Link to="/mobiles">Mobile Accessories</Link></li>
                            <li><Link to="/mobiles">Mobile Broadband Devices</Link></li>
                            <li><Link to="/mobiles">SIM Cards</Link></li>
                            <li><Link to="/mobiles">Smartphones</Link></li>
                            <li><Link to="/mobiles">Basic Mobiles</Link></li>
                            <li><Link to="/mobiles">Smartwatches</Link></li>
                           
                        </ul>
                    )}
                </li>
            

                <li 
                    onMouseEnter={() => handleMouseEnter('electronics')} 
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="/electronics">Electronics</Link>
                    {dropdown === 'electronics' && (
                        <ul className="dropdown">
        
                            <li><Link to="/electronics">Camera & Photo Accessories</Link></li>
                            <li><Link to="/electronics">Car & Vehicle Electronics Accessories</Link></li>
                            <li><Link to="/electronics">Computer Accessories</Link></li>
                            <li><Link to="/electronics">Mobile Accessories</Link></li>
                            <li><Link to="/electronics">GPS & Accessories</Link></li>
                            <li><Link to="/electronics">Home Audio</Link></li>
                            <li><Link to="/electronics"> Home Theater, TV & Video</Link></li>
                            <li><Link to="/electronics">Portable Audio & Video Accessories</Link></li>
                            

                        </ul>
                    )}
                </li>
                <li 
                    onMouseEnter={() => handleMouseEnter('fashion')} 
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="/shop">Fashion</Link>
                    {dropdown === 'fashion' && (
                        <ul className="dropdown">
        
                            <li><Link to="/men">Men's Clothing</Link></li>
                            <li><Link to="/women">Women's Clothing</Link></li>
                            <li><Link to="/kids">Kid's Fashion</Link></li>
                            <li><Link to="#">Footwear</Link></li>
                            <li><Link to="#">luggage & bags</Link></li>
                            <li><Link to="#">watches</Link></li>
                            <li><Link to="#"> Beauty</Link></li>
                            <li><Link to="#">Handbags</Link></li>
                            

                        </ul>
                    )}
                </li>

                <li 
                    onMouseEnter={() => handleMouseEnter('appliances')} 
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="/appliances">Appliances</Link>
                    {dropdown === 'appliances' && (
                        <ul className="dropdown">
        
                            <li><Link to="/appliances">Home & Kitchen</Link></li>
                            <li><Link to="/appliances">Vacuums & Floor Care</Link></li>
                            
                            <li><Link to="/appliances">Kitchen Tools</Link></li>
                            <li><Link to="/appliances">Pots & Pans</Link></li>
                            <li><Link to="/appliances">Drip Coffee Machines</Link></li>
                            <li><Link to="/appliances"> Home Improvement</Link></li>
                            <li><Link to="/appliances"> Household Bucket Mops</Link></li>
                            

                        </ul>
                    )}
                </li>

                
                <li 
                    onMouseEnter={() => handleMouseEnter('furnitures')} 
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="/furnitures">Home & Furniture</Link>
                    {dropdown === 'furnitures' && (
                        <ul className="dropdown">
        
                            <li><Link to="/furnitures">Artwork</Link></li>
                            <li><Link to="/furnitures">Bath Products</Link></li>
                            
                            <li><Link to="/furnitures">Craft Materials</Link></li>
                            <li><Link to="/furnitures">Furniture</Link></li>
                            <li><Link to="/furnitures">Heating, Cooling & Air Quality</Link></li>
                            <li><Link to="/furnitures">Home & Décor</Link></li>
                            <li><Link to="/furnitures">Home Furnishing</Link></li>
                            <li><Link to="/furnitures">Home Storage & Organisation</Link></li>
                            <li><Link to="/furnitures"> Indoor Lighting</Link></li>
                            <li><Link to="/furnitures"> 
                            Kitchen & Dining</Link></li>
                            

                        </ul>
                    )}
                </li>



               
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/kids">Kids</Link></li>
            </ul>
        </nav>
    );
};

export default CategoryNav;
