import React from 'react';
import './Offers.css';
import hero_model from '../Assests/hero_model.png'


const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={hero_model} alt="Girl showing the product" />
      </div>
    </div>
  )
}

export default Offers
