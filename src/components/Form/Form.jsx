import React, { useState } from "react";

const Form = () => {
  
    const [userData, setUserData] = useState({
        nombre: "",
        apellido: "",
        telefono: ""
        
    })

    
   const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  } 

  const envioDeFormulario = (evento)=>{
    evento.preventDefault()
    // LOGIN
  
    console.log(userData)

  }
  

  return (
    <div>
      <h1>Estamos en el formulario</h1>

      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="ingresa tu nombre"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingresa tu apellido"
          name="apellido"
          value={userData.apellido}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingresa tu apellido"
          name="telefono"
          value={userData.telefono}
          onChange={handleChange}
        />

        <button type="submit">Enviar</button>
        <button type="button">cancelar</button>
      </form>
    </div>
  );
};

export default Form;
