import { useState } from "react";

function PuntoForm({ onGuardar }) {

    const [formulario, setFormulario] = useState({
        nombre: "",
        sector: "",
        material: "",
        capacidad: ""
    });

    // Capturar cambios de los campos
    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    // Enviar formulario
    const manejarEnvio = async (e) => {
        e.preventDefault();
        const guardado = await onGuardar({
            ...formulario,
            capacidad: Number(formulario.capacidad)
        });

        // Limpiar solamente si se guardó correctamente
        if (guardado) {
            setFormulario({
                nombre: "",
                sector: "",
                material: "",
                capacidad: ""
            });
        }
    };

    return (
        <form onSubmit={manejarEnvio}>
            <label>Nombre del Punto</label>
            <input
                type="text"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
                placeholder="Ej. Punto de Reciclaje 1"
                required
            />

            <label>Sector</label>
            <select
                name="sector"
                value={formulario.sector}
                onChange={manejarCambio}
                required
            >
                <option value="">Seleccione un sector</option>
                <option value="Norte">Norte</option>
                <option value="Centro Norte">CentroNorte</option>
                <option value="Centro">Centro</option>
                <option value="Centro Sur">CentroSur</option>
                <option value="Sur">Sur</option>
            </select>

            <label>Material</label>

            <select
                name="material"
                value={formulario.material}
                onChange={manejarCambio}
                required
            >
                <option value="">Seleccione un material</option>
                <option value="Plástico">Plástico</option>
                <option value="Papel / Cartón">Papel / Cartón</option>
                <option value="Vidrio">Vidrio</option>
                <option value="Metal">Metal</option>
            </select>

            <label>Capacidad</label>

            <input
                type="number"
                name="capacidad"
                value={formulario.capacidad}
                onChange={manejarCambio}
                placeholder="Ingrese capacidad"
                min="1"
                required
            />

            <button type="submit">
                Guardar Punto de Reciclaje
            </button>

        </form>
    );
}

export default PuntoForm;