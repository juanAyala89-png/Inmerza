import datosLegales from "../datosLegales.js";
import "./PaginaLegal.css";


function PaginaLegal({ titulo, children }) {
  return (
    <section className="pagina-legal">
      <a href="#inicio" className="volver-inicio">← Volver al inicio</a>

      <h1 className="titulo-legal">{titulo}</h1>
      <p className="fecha-legal">
        Última actualización: {datosLegales.ultimaActualizacion}
      </p>

      <div className="contenido-legal">{children}</div>
    </section>
  );
}

export default PaginaLegal;
