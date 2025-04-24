// src/pages/enviarEncuesta.jsx
import React, { useState } from "react";
import "../styles/enviarEncuesta.css";

function EnviarEncuesta() {
    const [preguntas, setPreguntas] = useState(Array(10).fill(""));
    const [periodo, setPeriodo] = useState("");

    const handleChange = (index, value) => {
        const nuevasPreguntas = [...preguntas];
        nuevasPreguntas[index] = value;
        setPreguntas(nuevasPreguntas);
    };

    const handlePublicar = () => {
        console.log("Encuesta publicada con preguntas:", preguntas);
        alert("Encuesta publicada (simulado)");
    };

    return (
        <div className="main-content">
            <div className="enviar-encuesta-container">
                <h1> Crear nueva encuesta </h1>

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
                
                    <div className="preguntas-formulario">
                        {preguntas.map((pregunta, index) => (
                        <div className="pregunta-item" key={index}>
                            <label htmlFor={`pregunta-${index}`}>Pregunta {index + 1}</label>
                            <textarea
                            id={`pregunta-${index}`}
                            value={pregunta}
                            onChange={(e) => handleChange(index, e.target.value)}
                            placeholder={`Escribe la pregunta ${index + 1}...`}
                            />
                        </div>
                        ))}

                        <button className="publicar-btn" onClick={handlePublicar}>
                        Publicar Encuesta
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default EnviarEncuesta;