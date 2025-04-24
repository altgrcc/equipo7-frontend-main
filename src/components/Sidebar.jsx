// src/components/Sidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import LogoSHE from "./LogoSHE.jsx"; // Adjust import paths if needed
import MiniLogoSHE from "./MiniLogo.jsx";
import { HiOutlineHome , HiClipboardList, HiOutlineUserGroup , HiLogout, HiNewspaper, HiPlusCircle, HiDocumentReport, HiPaperAirplane, HiViewGrid } from "react-icons/hi";
import { HiUser } from "react-icons/hi2";

import "../styles/dashboard.css";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
    console.log("toggleSidebar function:", toggleSidebar);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>

        <button type="button" className="home-logo-button" onClick={() => navigate("/dashboard")} >
            {!isCollapsed ? ( <LogoSHE className="logo-she-img" /> ) : ( <MiniLogoSHE className="mini-logo-she-img" />)}
        </button>


      {/* Add more sidebar buttons or links here */}
        <button type="button" className="sidebar-button" >
            <div className="icon-container">
                <HiOutlineHome className="sidebar-icon" /> 
            </div>
            {!isCollapsed && <span className="button-text">Home</span>} 
        </button>


        <button type="button" className="sidebar-button" onClick={() => navigate("./usuarios")}>
            <div className="icon-container">
                <HiOutlineUserGroup className="sidebar-icon" /> 
            </div>
            {!isCollapsed && <span className="button-text">Usuarios</span>} 
        </button>        


        <button type="button" className="sidebar-button" >
            <div className="icon-container">
                <HiUser className="sidebar-icon" /> 
            </div>
            {!isCollapsed && <span className="button-text">Profesores</span>} 
        </button>  


        <button type="button" className="sidebar-button" >
            <div className="icon-container">
                <HiViewGrid className="sidebar-icon" /> 
            </div>
            {!isCollapsed && <span className="button-text">Departamentos</span>} 
        </button>          


        <button type="button" className="sidebar-button" >
            <div className="icon-container">
                <HiClipboardList className="sidebar-icon" /> 
            </div>
            {!isCollapsed && <span className="button-text">Evaluaciones</span>} 
        </button>  


        <button type="button" className="sidebar-button" >
            <div className="icon-container">
                <HiNewspaper className="sidebar-icon" /> 
            </div>
            {!isCollapsed && <span className="button-text">Histórico</span>} 
        </button>  


        <button type="button" className="sidebar-button" >
            <div className="icon-container">
                <HiPlusCircle className="sidebar-icon" /> 
            </div>
            {!isCollapsed && <span className="button-text">Nuevo Grupo</span>} 
        </button>  


        <button type="button" className="sidebar-button" >
            <div className="icon-container">
                <HiDocumentReport className="sidebar-icon" /> 
            </div>
            {!isCollapsed && <span className="button-text">Resultados</span>} 
        </button> 


        <button type="button" className="sidebar-button" onClick={() => navigate("./enviarEncuesta") }>
            <div className="icon-container">
                <HiPaperAirplane className="sidebar-icon" /> 
            </div>
            {!isCollapsed && <span className="button-text">Publicar</span>} 
        </button> 


            
    
        <div className="main-content">

            <button onClick={handleLogout} className="logout-button">
                <div className="icon-container">
                    <HiLogout className="sidebar-icon" /> 
                </div>
                {!isCollapsed && <span className="button-text">Logout</span>} 
            </button> 


        </div>
    </div>
            
        
    );
};

export default Sidebar;
