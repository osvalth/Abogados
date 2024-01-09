import React, { useState } from 'react';
import './ServiciosLegales.css'

function ServiciosLegales() {
  const [hoveredCard, setHoveredCard] = useState(false);

  const rotateCard = (index) => {
    setHoveredCard(index);
  };

  const unrotateCard = () => {
    setHoveredCard(false);
  };

  const servicios = [
    {
      titulo: 'Civil',
      icono: 'fas fa-balance-scale',
      contenido: [
        'Compraventa',
        'Arrendamiento',
        'Contratos',
        'Recuperación y regularización de inmuebles (casas y terrenos)',
        'Escrituración',
        'Daño y responsabilidad Civil',
      ],
    },
    {
      titulo: 'Mercantil',
      icono: 'fas fa-money-bill-wave',
      contenido: [
        'Juicio mercantil',
        'Seguros y finanzas',
        'Cobro de cheques y letras de cambio',
        'Cobro de pagarés',
        'Constitución de empresas mercantiles',
        'Cobro de deudas y carteras vencidas',
      ],
    },
    {
      titulo: 'Familiar',
      icono: 'fas fa-users',
      contenido: [
        'Divorcio',
        'Testamentos',
        'Pensión Alimenticia',
        'Guarda y Custodia',
        'Adopción',
        'Cambio y corrección de nombre',
        'Cambio y reasignación de identidad',
        'Reconocimiento de paternidad',
      ],
    },
    {
      titulo: 'Penal',
      icono: 'fas fa-gavel',
      contenido: [
        'Asesoría y representación ante el MP, Juez de control y juicio',
        'Asesores jurídicos para víctimas y ofendidos en carpeta de investigación y juicio',
      ],
    },
    {
      titulo: 'Laboral',
      icono: 'fas fa-briefcase',
      contenido: [
        'Despidos',
        'Liquidaciones',
        'Pensiones',
        'Convenios de terminación laboral',
        'Defensa a trabajadores/litigio individual',
        'Defensa patronal/litigio individual y colectivo',
      ],
    },
    {
      titulo: 'Administrativo',
      icono: 'fas fa-building',
      contenido: [
        'Gestoría ante dependencias gubernamentales',
        'Recurso de inconformidad y revocación',
        'Visitas de verificación',
        'Atención a procedimientos administrativos',
        'Juicio de nulidad o juicio contencioso administrativo',
        'Trámites de pensión IMSS, ISSSTE, ISSFAM',
      ],
    },
  ];

  return (
    <section id="servicios-legales">
      <h2>Servicios Legales</h2>
      <div className="tarjetas-servicios">
        {servicios.map((servicio, index) => (
          <div
            className={`tarjeta ${hoveredCard === index ? 'rotated' : ''}`}
            onMouseEnter={() => rotateCard(index)}
            onMouseLeave={unrotateCard}
            key={index}
          >
            <div className="tarjeta-front">
              <i className={servicio.icono}></i>
              <h3>{servicio.titulo}</h3>
            </div>
            <div className="tarjeta-back">
              <ul>
                {servicio.contenido.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiciosLegales;
