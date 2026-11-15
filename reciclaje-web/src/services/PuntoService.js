import { API_BASE_URL } from "../config/apiconfig";

// Consultar todos los puntos de reciclaje
export const listarPuntos = async () => {
    const respuesta = await fetch(
        `${API_BASE_URL}/api/puntos`
    );
    return await respuesta.json();
};

// Registrar un nuevo punto de reciclaje
export const guardarPunto = async (punto) => {
    const respuesta = await fetch(
        `${API_BASE_URL}/api/puntos`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(punto)
        }
    );
    return await respuesta.json();
};