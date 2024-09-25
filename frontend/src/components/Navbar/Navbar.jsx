import React, { useContext, useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/Admin_Assets/logo3.jpg';
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const navigate = useNavigate();

  // const dropdown_toggle = (e) => {
  //   menuRef.current.classList.toggle('nav-menu-visible');
  //   e.target.classList.toggle('open');
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search logic here, e.g., navigate to a search results page
    if (searchTerm) {
      navigate(`/${encodeURIComponent(searchTerm)}`);
      setSearchTerm(''); // Clear the input after search
    }
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" id='logo-sp' />
        <Link to="/shop" style={{ textDecoration: "none" }}><p id='shop-name'>SHOPEASY</p></Link>
      </div>
      {/* <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" /> */}
      <form className="nav-search" onSubmit={handleSearch} action="action_page.php">
  <input type="text" placeholder="Search.." name="search" value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} />
  <button type="submit"><i className="fa fa-search"></i></button>
</form>
      {/* <form className="nav-search" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <i style={{fontSize:"24px"}} className="fa">&#xf002;</i>
      </form> */}
      
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token'); navigate('/'); }}>Logout</button>
          : <Link style={{ textDecoration: "none" }} to='/login'><button>Login</button></Link>}
        
        <Link style={{ textDecoration: "none" }} to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
