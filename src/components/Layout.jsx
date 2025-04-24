// src/components/Layout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom"; // Esto se usa para renderizar las páginas hijas como Dashboard, Usuarios, etc.
import Sidebar from "./Sidebar";
import "../styles/dashboard.css"; // Asegúrate de que aquí estén tus estilos

function Layout() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="layout-container">
            <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

                <main className={`main-content ${isCollapsed ? "collapsed" : ""}`}>
                    <Outlet />
                </main>
        </div>
    );
}

export default Layout;

