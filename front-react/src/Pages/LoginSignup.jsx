import React from 'react';
import "./CSS/LoginSingnup.css";

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Tu nombre' />
          <input type="text" placeholder='Dirección de Email' />
          <input type="text" placeholder='Contraseña' />
        </div>
        <button>Continuar</button>
        <p className='loginsignup-login'>¿Ya tiene cuenta? <span>Iniciar sesión</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Al continuar, esta de acuerdo con los terminos de uso y politica de privacidad.</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignup;