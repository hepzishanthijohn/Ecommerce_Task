import React from "react";
import Navbar from "../NavbarIntro/NavbarIntro";
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">SHOPeasy</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./shopingGirl1.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Discover</h1>
                <h1 className="title dishes_title"></h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="./famms.png" alt="hero" />
          </div>
          <h3 className="title dishes_title">Amazing Deals</h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
