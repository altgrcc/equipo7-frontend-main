// src/pages/login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook de navegación
import "../styles/login.css";
import Logo from "../components/Logo.jsx";
import LoadingVideo from "../components/LoadingVideo.jsx";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Creamos la variable para navegar
  const navigate = useNavigate();

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log("Intentando iniciar sesión con:", { email, password });

    if (email === "admin@tec.mx" && password === "1234") {
      localStorage.setItem("token", "loginValido"); // Puedes usar un token más real luego
      setIsLoading(true);
    } else {
      alert("Correo o contraseña incorrectos.");
    }

  };


  // Si ya está autenticado, mostramos el video en vez del login
  if (isLoading) {
    return <LoadingVideo onComplete={() => navigate("/dashboard")} />;
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
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;