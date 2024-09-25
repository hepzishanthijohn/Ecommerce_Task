import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import './NavbarIntro.css'
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">SHOPEASY</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
          <div>
          
          </div>
          </div>
          <div >
          <Link to="/shop"><button className="menuBtn">EXPLORE YOUR PRODUCT</button></Link>
          
         
          </div>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
