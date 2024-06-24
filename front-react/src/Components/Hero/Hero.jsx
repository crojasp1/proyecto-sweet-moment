import React from "react";
import "./Hero.css";
import heroBackImage from "../Assests/heroBackImage.jpg";
import right_arrow from '../Assests/right_arrow.png';
import domi_lush from "../Assests/domi_lush.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">

        <h2>NEW ARRIVALS ONLY</h2>
        <img src={domi_lush} alt="Lush and domi image" />

        <div>
          <div className="new-product-icon">
            <p>Here all</p>

          </div>
          <p>New</p>
          <p> For U</p>
        </div>
        <div className="hero-latest-btn">
          <div>Lastest Collection</div>
          <img src={right_arrow} alt="Right Arrow icon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
