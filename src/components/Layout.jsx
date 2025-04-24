// src/components/Layout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom"; // Esto se usa para renderizar las páginas hijas como Dashboard, Usuarios, etc.
import Sidebar from "./Sidebar";
import "../styles/dashboard.css"; // Asegúrate de que aquí estén tus estilos
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; // Asegúrate de que estos iconos estén instalados


function Layout() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
        console.log("Sidebar collapsed:", !isCollapsed);
    };

    return (
        <div className="layout-container">
            <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        
            <button className="collapse-button" onClick={toggleSidebar}>
                {isCollapsed ? <HiChevronRight className="collapse-icon" /> : <HiChevronLeft className="collapse-icon" />}
            </button>

            <main className={`main-content ${isCollapsed ? "collapsed" : ""}`}>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;

