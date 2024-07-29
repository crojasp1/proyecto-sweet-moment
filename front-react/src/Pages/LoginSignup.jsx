import React, {useState} from 'react';
import "./CSS/LoginSingnup.css";

// Componente funcional LoginSignup
const LoginSignup = () => {

  const [state, setState] = useState("Iniciar sesión");
  const [formData, SetFormData] =useState({
    username:"",
    password:"",
    email:""
  });

  const changeHandler = (event) => {
    SetFormData({...formData, [event.target.name]:event.target.value })

  }

  const login = async () => {
    console.log("Funcion Iniciar sesión activada", formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method: "POST",
      headers:{
        Accept: "application/form-data",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data);

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }

  }

  const signup = async () => {
    console.log("Funcion registrarme activada", formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method: "POST",
      headers:{
        Accept: "application/form-data",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data);

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    // Contenedor principal para el formulario de inicio de sesión o registro
    <div className='loginsignup'>
      
      {/* Contenedor para el formulario de inicio de sesión o registro */}
      <div className="loginsignup-container">
        
        {/* Título del formulario */}
        <h1>{state}</h1>
        
        {/* Contenedor para los campos del formulario */}
        <div className="loginsignup-fields">
          {/* Campo para ingresar el nombre */}
          {state==="Registrarme"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Tu nombre' />:<></>}
          
          {/* Campo para ingresar la dirección de email */}
          <input name='email' value={formData.email} onChange={changeHandler} type="text" placeholder='Dirección de Email' />
          
          {/* Campo para ingresar la contraseña */}
          <input name='password' value={formData.password} onChange={changeHandler} type="text" placeholder='Contraseña' />
        </div>
        
        {/* Botón para continuar con el registro */}
        <button className='loginsignup-button' onClick={() => {state==="Registrarme"?signup():login()}}>Continuar</button>
        
        {/* Enlace para iniciar sesión si el usuario ya tiene cuenta */}
        {state==="Iniciar sesión"?<p className='loginsignup-login'>¿No tiene cuenta? <span className='login-state' onClick={()=>setState("Registrarme")}>Registrarme aqui</span></p>:<p className='loginsignup-login'>¿Ya tiene cuenta? <span className='login-state' onClick={()=>setState("Iniciar sesión")}>Acceder aqui</span></p>}
        

        
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
