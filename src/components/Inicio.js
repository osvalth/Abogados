import React, { useState } from 'react';
import './Inicio.css'; // Importa tus estilos CSS aquí

function Inicio() {
  const totalImagenes = 5; // Número total de imágenes
  const [imagenActual, setImagenActual] = useState(0);

  const handleAnterior = () => {
    setImagenActual((imagenActual - 1 + totalImagenes) % totalImagenes);
  };

  const handleSiguiente = () => {
    setImagenActual((imagenActual + 1) % totalImagenes);
  };

  return (
    <section id="inicio">
      <div className="carousel">
        <button id="anterior" onClick={handleAnterior}>
          <span>&#8249;</span>
        </button>
        <div className="carousel-container">
          {Array(totalImagenes)
            .fill(0)
            .map((_, index) => (
              <img
                key={index}
                src={`/img/imagen-${index + 1}.avif`}
                alt={`Consulta Legal ${index + 1}`}
                className={`carousel-image ${imagenActual === index ? 'active' : ''}`}
              />
            ))}
        </div>
        <button id="siguiente" onClick={handleSiguiente}>
          <span>&#8250;</span>
        </button>
      </div>

      <div className="carousel-overlay">
      <h3 className="overlay-title">Bienvenido a nuestro despacho legal</h3>
      <div className="overlay-description-container">
        <p className="overlay-description">
          Ofrecemos servicios legales de alta calidad para resolver tus necesidades legales. Nuestro equipo de abogados expertos está listo para ayudarte en cada paso del proceso legal.
        </p>
      </div>
      <button id="programarConsulta" className="overlay-button programar-consulta-button">
        Programa una Consulta
      </button>
    </div>

      
    </section>
  );
}

export default Inicio;
