// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Usuarios from "./pages/usuarios";
import AgregarUsuario from "./pages/agregarUsuario";
import Logout from "./pages/logout";
import RutaProtegida from "./components/RutaProtegida";
import Layout from "./components/Layout"; 
import EnviarEncuesta from "./pages/enviarEncuesta";
import Historico from "./pages/historico";
import SubirExcel from "./pages/subirExcel";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'light', // o 'dark'
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<RutaProtegida><Layout /></RutaProtegida>}>
            <Route index element={<Dashboard />} />
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="usuarios/agregarusuario" element={<AgregarUsuario />} />
            <Route path="historico" element={<Historico />} />
            <Route path="historico/subirExcel" element={<SubirExcel />} />
            <Route path="enviarEncuesta" element={<EnviarEncuesta />} />

          </Route>
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

