// src/pages/dashboard.jsx
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import LogoSHE from "../components/LogoSHE.jsx";
import { HiOutlineHome , HiClipboardList, HiOutlineUserGroup , HiLogout, HiNewspaper, HiPlusCircle, HiDocumentReport, HiPaperAirplane, HiViewGrid} from "react-icons/hi";
import { HiUser } from "react-icons/hi2";

function Dashboard() {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleToggleSidebar = () => { setIsCollapsed(!isCollapsed); };


  return (
      <div className="dashboard-container"> 
        <div collapsed={isCollapsed.toString()} className="sidebar">
            
            <LogoSHE />

            <button onClick={handleToggleSidebar}> {isCollapsed ? "➕" : "➖"} </button>

            <button type="button" className="sidebar-button" >
                <HiOutlineHome className="sidebar-icon" /> {!isCollapsed && <span>Home</span>} </button>

            <button type="button" className="sidebar-button" onClick={() => navigate("/usuarios")}>
                <HiOutlineUserGroup className="sidebar-icon" /> {!isCollapsed && <span>Usuarios</span>} </button>

            <button type="button" className="sidebar-button" >
                <HiUser className="sidebar-icon" /> {!isCollapsed && <span>Profesores</span>} </button>    

            <button type="button" className="sidebar-button" >
                <HiViewGrid className="sidebar-icon" /> {!isCollapsed && <span>Departamentos</span>} </button>            

            <button type="button" className="sidebar-button" >
                <HiClipboardList className="sidebar-icon" /> {!isCollapsed && <span>Evaluaciones</span>} </button>

            <button type="button" className="sidebar-button" >
                <HiNewspaper className="sidebar-icon" /> {!isCollapsed && <span>Histórico</span>} </button>

            <button type="button" className="sidebar-button" >
                <HiPlusCircle className="sidebar-icon" /> {!isCollapsed && <span>Nuevo Grupo</span>} </button>

            <button type="button" className="sidebar-button" >
                <HiDocumentReport className="sidebar-icon" /> {!isCollapsed && <span>Resultados</span>} </button>

            <button type="button" className="sidebar-button" >
                <HiPaperAirplane className="sidebar-icon" /> {!isCollapsed && <span>Publicar</span>} </button>

        </div >

        <div className="main-content">
        {/* Aquí se renderiza Usuarios, AgregarUsuario, etc. */}
        <button onClick={() => { localStorage.removeItem("token"); navigate("/logout"); }} className="logout-button" >
            <HiLogout className="sidebar-icon" /> <span>Logout</span> </button>
        </div>

      </div>
  );
}

export default Dashboard;

