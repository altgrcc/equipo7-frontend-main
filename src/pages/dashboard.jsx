// src/pages/dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);


  return (
    <div className="dashboard-container">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        {/* Your dashboard page content */}
        <h1>Welcome to the Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;

