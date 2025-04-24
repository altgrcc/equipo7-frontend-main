// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Usuarios from "./pages/usuarios";
import AgregarUsuario from "./pages/agregarUsuario";
import Logout from "./pages/logout";
import LoadingVideo from "./components/LoadingVideo"; 
import RutaProtegida from "./components/RutaProtegida";
import Layout from "./components/Layout"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<RutaProtegida><Layout /></RutaProtegida>}>
          <Route index element={<Dashboard />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="usuarios/agregarusuario" element={<AgregarUsuario />} />

        </Route>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

