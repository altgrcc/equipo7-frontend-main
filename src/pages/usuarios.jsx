// src/pages/usuarios.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/usuarios.css";
import { HiArrowNarrowLeft } from "react-icons/hi";

function Usuarios() {
  const navigate = useNavigate();

  return (
    <div> <button type="button" className="goback-button" onClick={() => navigate("/dashboard")}>
              <HiArrowNarrowLeft className="goback-icon" /></button> 
      <div className="usuarios-container">
        <h1>Usuarios</h1>
        <div className="usuarios-buttons">
          <button type="button">Administrar</button>
          <button type="button" onClick={() => navigate("/agregarusuario")}>Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;