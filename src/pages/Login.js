import React from "react";
import './Login.css';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

function Login() {

  return (
    <div className="pagina-login">
      <section className="contenedor-info">
        <div className="resumen-app">
          <h1>VoteChain</h1>
          <p>Tu voto protegido y respaladado por un sistema incorrompible.</p>
        </div>
        <div className="formulario-login">
          <h2 className="titulo-login">Ingrese sus datos</h2>
          <input type="text" placeholder="Usuario" className="input-usuario" />
          <p className="p-ejemplo-usuario">Ej: 1777222888</p>
          <input type="password" placeholder="Contraseña" className="input-contraseña" />
          <button type="submit" className="boton-iniciar">Iniciar sesión</button>
        </div>
      </section>
      <button className="boton-votantes-info">
        ¡Conoce a tus candidatos! <MdOutlineKeyboardDoubleArrowDown className="icono-bajar" />
      </button>
    </div>
  );
}

export default Login;
