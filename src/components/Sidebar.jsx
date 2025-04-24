// src/components/Sidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import LogoSHE from "./LogoSHE.jsx"; // Adjust import paths if needed
import MiniLogoSHE from "./MiniLogo.jsx";
import { HiOutlineHome , HiClipboardList, HiOutlineUserGroup , HiLogout, HiNewspaper, HiPlusCircle, HiDocumentReport, HiPaperAirplane, HiViewGrid, HiChevronRight, HiChevronLeft} from "react-icons/hi";
import { HiUser } from "react-icons/hi2";

import "../styles/dashboard.css";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
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


            <button className="collapse-button" onClick={toggleSidebar} > 
                {isCollapsed ? <HiChevronRight className="collapse-icon" /> : <HiChevronLeft className="collapse-icon" />}
            </button>
    
        <div className="main-content">
            <button onClick={handleLogout} className="logout-button">
                <HiLogout className="sidebar-icon" /> <span>Logout</span>
            </button>
        </div>
    </div>
            
        
    );
};

export default Sidebar;
