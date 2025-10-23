import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#inicio" className="nav-logo">Lisandro Flores</a>
        <ul className="nav-menu">
          <li className="nav-item"><a href="#sobre-mi" className="nav-link">Sobre Mí</a></li>
          <li className="nav-item"><a href="#proyectos" className="nav-link">Proyectos</a></li>
          <li className="nav-item"><a href="#formacion" className="nav-link">Formación</a></li>
          <li className="nav-item"><a href="#contacto" className="nav-link">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
