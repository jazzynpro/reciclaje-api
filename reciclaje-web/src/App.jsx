import { useState, useEffect } from "react";

import PuntoForm from "./components/PuntoForm";

import PuntoCard from "./components/PuntoCard";

import {
  listarPuntos,
  guardarPunto
} from "./services/puntoService";

import "./App.css";

function App() {

  const [puntos, setPuntos] = useState([]);

  const [mensaje, setMensaje] = useState("");

  // Consultar los puntos de reciclaje al iniciar
  useEffect(() => {
    cargarPuntos();
  }, []);

  // Método para consultar
  const cargarPuntos = async () => {
    try {
      const datos = await listarPuntos();
      setPuntos(datos);
    } catch (error) {
      console.error(error);
      setMensaje("Error al cargar los puntos de reciclaje");
    }
  };

  // Método para registrar
  const registrarPunto = async (punto) => {
    try {
      const nuevoPunto = await guardarPunto(punto);

      // Agregar el nuevo punto al listado sin recargar la página
      setPuntos(prev => [...prev, nuevoPunto]);

      setMensaje("Punto de reciclaje registrado correctamente");
      return true;
    } catch (error) {
      console.error(error);
      setMensaje("Error al registrar el punto de reciclaje");
      return false;
    }
  };

  return (
    <div className="contenedor">

      <header className="encabezado">
        <h1>Puntos de Reciclaje</h1>
        <p>Administración de estaciones de reciclaje</p>
      </header>

      <section className="seccion-formulario">

        <h2>Registrar nuevo punto</h2>

        <PuntoForm
          onGuardar={registrarPunto}
        />

      </section>

      {mensaje && (
        <div className="mensaje">
          {mensaje}
        </div>
      )}

      <section className="seccion-listado">

        <h2>Puntos registrados</h2>

        <p>Total de puntos: {puntos.length}</p>

        <div className="grid-recursos">

          {puntos.map((punto) => (

            <PuntoCard
              key={punto.id}
              punto={punto}
            />

          ))}

        </div>

        {puntos.length === 0 && (
          <p>No existen puntos de reciclaje registrados.</p>
        )}

      </section>

    </div>
  );
}

export default App;