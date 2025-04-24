// src/pages/dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);


  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="welcome-title">Bienvenido</h1>
      </div>
    </div>
  );
};

export default Dashboard;

