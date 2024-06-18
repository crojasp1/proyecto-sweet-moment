import React from "react";
import "./Hero.css";
import heroBackImage from "../Assests/heroBackImage.jpg";
import heroArrow from "../Assests/heroArrow.png";
import heroHand from "../Assests/heroHand.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>New</p>
            <img src={heroHand} alt="Hand greeting icon" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Lastest Collection</div>
          <img src={heroArrow} alt="Arrow icon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
