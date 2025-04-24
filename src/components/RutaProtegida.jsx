// src/components/RutaProtegida.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const RutaProtegida = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/dashboard" />;
};

export default RutaProtegida;
