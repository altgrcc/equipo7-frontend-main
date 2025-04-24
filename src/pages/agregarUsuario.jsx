// src/pages/agregarUsuario.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/agregarUsuario.css";
import { HiArrowNarrowLeft } from "react-icons/hi";

function AgregarUsuario() {
  const navigate = useNavigate();
  // Estados para cada campo del formulario
  const [primerNombre, setPrimerNombre] = useState("");
  const [segundoNombre, setSegundoNombre] = useState("");
  const [primerApellido, setPrimerApellido] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");
  const [matricula, setMatricula] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("Profesor");

  const handleSubmit = (evento) => {
    evento.preventDefault();
    // Aquí puedes integrar la lógica para enviar o validar la información
    console.log("Datos del usuario:", {
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      matricula,
      correo,
      contrasena,
      tipoUsuario,
    });
  };

  return (
    <div className="page-container">
      <button type="button" className="goback-button" onClick={() => navigate("/usuarios")}>
        <HiArrowNarrowLeft className="goback-icon" /> 
      </button> 
      
      <div className="agregarusuario-container">
        <h1>Agregar usuario</h1>
        <form className="agregarusuario-form" onSubmit={handleSubmit}>
          {/* Sección para nombres */}
          <div className="form-section">
            <label>Nombre(s)</label>
            <div className="nombre-inputs">
              <input
                type="text"
                placeholder="Primer nombre"
                value={primerNombre}
                onChange={(e) => setPrimerNombre(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Segundo nombre"
                value={segundoNombre}
                onChange={(e) => setSegundoNombre(e.target.value)}
              />
            </div>
          </div>

          {/* Sección para apellidos */}
          <div className="form-section">
            <label>Apellido(s)</label>
            <div className="apellido-inputs">
              <input
                type="text"
                placeholder="Primer apellido"
                value={primerApellido}
                onChange={(e) => setPrimerApellido(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Segundo apellido"
                value={segundoApellido}
                onChange={(e) => setSegundoApellido(e.target.value)}
              />
            </div>
          </div>

          {/* Matrícula */}
          <div className="form-section">
            <label>Matrícula</label>
            <input
              type="text"
              placeholder="Ingresa matrícula"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              required
            />
          </div>

          {/* Correo institucional */}
          <div className="form-section">
            <label>Correo institucional</label>
            <input
              type="email"
              placeholder="Ingresa correo institucional"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          {/* Contraseña */}
          <div className="form-section">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingresa contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>

          {/* Tipo de usuario */}
          <div className="form-section">
            <label>Tipo de usuario</label>
            <select
              value={tipoUsuario}
              onChange={(e) => setTipoUsuario(e.target.value)}
            >
              <option value="Profesor">Profesor</option>
              <option value="Coordinador">Coordinador</option>
              <option value="Director">Director</option>
              <option value="TI">TI</option>
            </select>
          </div>

          <button type="submit">Guardar</button>
        </form>
    </div>
    </div>
  );
}

export default AgregarUsuario;