import React from 'react';
import "./CSS/LoginSingnup.css";

// Componente funcional LoginSignup
const LoginSignup = () => {
  return (
    // Contenedor principal para el formulario de inicio de sesión o registro
    <div className='loginsignup'>
      
      {/* Contenedor para el formulario de inicio de sesión o registro */}
      <div className="loginsignup-container">
        
        {/* Título del formulario */}
        <h1>Sign Up</h1>
        
        {/* Contenedor para los campos del formulario */}
        <div className="loginsignup-fields">
          {/* Campo para ingresar el nombre */}
          <input type="text" placeholder='Tu nombre' />
          
          {/* Campo para ingresar la dirección de email */}
          <input type="text" placeholder='Dirección de Email' />
          
          {/* Campo para ingresar la contraseña */}
          <input type="text" placeholder='Contraseña' />
        </div>
        
        {/* Botón para continuar con el registro */}
        <button>Continuar</button>
        
        {/* Enlace para iniciar sesión si el usuario ya tiene cuenta */}
        <p className='loginsignup-login'>¿Ya tiene cuenta? <span>Iniciar sesión</span></p>
        
        {/* Sección para aceptar los términos y políticas */}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Al continuar, está de acuerdo con los términos de uso y política de privacidad.</p>
        </div>
        
      </div>
    </div>
  )
}

export default LoginSignup;
