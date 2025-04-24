// src/pages/subirExcel.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/subirExcel.css";
import { HiArrowNarrowLeft } from "react-icons/hi";

function SubirExcel() {
    const navigate = useNavigate();
    const [archivo, setArchivo] = useState(null);
    const [year, setYear] = useState("");
    const [grupo, setGrupo] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [periodo, setPeriodo] = useState("");

    const handleArchivoChange = (e) => {
        setArchivo(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("excelFile", archivo);
        formData.append("year", year);
        formData.append("grupo", grupo);
        formData.append("departamento", departamento);
        formData.append("periodo", periodo);

        // Aquí puedes integrar la lógica para enviar el archivo al backend
        console.log("Subiendo archivo Excel:", {
        archivo,
        year,
        grupo,
        departamento,
        periodo,
        });
    };

    return (
        <div className="page-container">
        <button type="button" className="goback-button" onClick={() => navigate("/dashboard/historico")}>
            <HiArrowNarrowLeft className="goback-icon" /> 
        </button> 

        <div className="subir-excel-container">
            <h1>Subir archivo Excel</h1>
            <form className="subir-excel-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-section">
                <label>Archivo Excel</label>
                <input
                type="file"
                name="excelFile"
                accept=".xlsx"
                onChange={handleArchivoChange}
                required
                />
            </div>

            <div className="form-section">
                <label>Año</label>
                <input
                type="text"
                placeholder="Año [20XX]"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
                />
            </div>

            <div className="form-section">
                <label>Grupo</label>
                <input
                type="text"
                placeholder="Grupo [#L]"
                maxLength="2"
                value={grupo}
                onChange={(e) => setGrupo(e.target.value)}
                required
                />
            </div>


            <div className="form-section">
                <label>Departamento</label>
                <select
                value={departamento}
                onChange={(e) => setPeriodo(e.target.value)}
                required
                >
                    <option value="">Selecciona un departamento</option>
                    <option value="Laboratorista">Laboratorista</option>
                    <option value="Tutoreo">Tutoreo</option>
                    <option value="Extraacadémicas Culturales">Extraacadémicas Culturales</option>
                    <option value="Extraacadémicas Deportivas">Extraacadémicas Deportivas</option>
                    <option value="Académicas">Académicas</option>
                </select>
                    </div>

            <div className="form-section">
                <label>Periodo</label>
                <select
                value={periodo}
                onChange={(e) => setPeriodo(e.target.value)}
                required
                >
                    <option value="">Selecciona un periodo</option>
                    <option value="Ene-Jun 2024">Ene-Jun 2024</option>
                    <option value="Ago-Dic 2024">Ago-Dic 2024</option>
                    <option value="Ene-Jun 2025">Ene-Jun 2025</option>
                    <option value="Ago-Dic 2025">Ago-Dic 2025</option>
                </select>
                    </div>

            <button type="submit">Subir</button>
            </form>
        </div>
        </div>
    );
}

export default SubirExcel;
