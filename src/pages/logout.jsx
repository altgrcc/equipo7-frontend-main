// src/pages/logout.jsx
import React, { useEffect } from "react";
import { useNavigate , Link } from "react-router-dom";
import "../styles/login.css";
import Logo from "../components/Logo.jsx";

function Logout() {
    const navigate = useNavigate();


  // Opcional: si quieres redirigir automáticamente tras unos segundos
    useEffect(() => {
        localStorage.removeItem("token");
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000); // espera 3 segundos

        return () => clearTimeout(timer); // limpieza
    }, [navigate]);

    return (
        <div className="login-container">
            <Logo />
            <div className="login-form">
            <h2>Sesión cerrada</h2>
            <p>Has cerrado sesión correctamente.</p>
            <p>Redirigiendo al inicio de sesión...</p>
            <Link to="/">Volver ahora</Link>
            </div>
        </div>
    );
}

export default Logout;


