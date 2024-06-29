import React from 'react'
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Ofers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Escriba su Email aqui'/>
        <button>Subscribete</button>
      </div>
    </div>
  )
}

export default NewsLetter
