// src/pages/login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook de navegación
import "../styles/login.css";
import Logo from "../components/Logo.jsx";
import LoadingVideo from "../components/LoadingVideo.jsx";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Creamos la variable para navegar
  const navigate = useNavigate();

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log("Intentando iniciar sesión con:", { email, password });
    
    // Aquí puedes agregar tu lógica de autenticación

    // Simulación de login correcto
    if (email === "admin@tec.mx" && password === "1234") {
      setIsAuthenticated(true); // Muestra el video
    } else {
        alert("Credenciales incorrectas");
    }
  };
  // Si ya está autenticado, mostramos el video en vez del login
  if (isAuthenticated) {
    return <LoadingVideo />;
  }


  return (
    <div className="login-container">
      <Logo />
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            placeholder="ejemplo@tec.mx"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(evento) => setPassword(evento.target.value)}
            required
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;