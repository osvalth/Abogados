import React, {useState} from 'react';
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <div className="logo">
        <h1>Bienvenido al Bufete de Abogados XYZ</h1>
      </div>
      <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <nav className={menuOpen ? "active--Menu" : ""}>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#acerca">Acerca de Nosotros</a></li>
          <li><a href="#servicios-legales">Servicios Legales</a></li>
          <li><a href="#faq">Preguntas Frecuentes</a></li>
          <li><a href="#recursos">Recursos Legales</a></li>
          <li><a href="#contacto">Contáctanos</a></li>
          {/* Agrega más elementos de menú aquí */}
        </ul>
      </nav>
    </header>

  );
}

export default Header;
