// src/pages/historico.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/historico.css";
import { HiArrowNarrowLeft } from "react-icons/hi";

function Historico() {
    const navigate = useNavigate();

    return (
        <div> 
        <button type="button" className="goback-button" onClick={() => navigate("/dashboard")}>
            <HiArrowNarrowLeft className="goback-icon" />
        </button> 
        <div className="historico-container">
            <h1>Histórico de Evaluaciones</h1>
            <div className="historico-buttons">
            <button type="button">Ver Histórico</button>
            <button type="button" onClick={() => navigate("subirExcel")}>Subir Excel</button>
            </div>
        </div>
        </div>
    );
}

export default Historico;