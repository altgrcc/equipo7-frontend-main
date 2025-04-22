// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Usuarios from "./pages/usuarios";
import AgregarUsuario from "./pages/agregarUsuario";
import Logout from "./pages/logout";
import LoadingVideo from "./components/LoadingVideo"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/intro" element={<LoadingVideo />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/agregarusuario" element={<AgregarUsuario />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;