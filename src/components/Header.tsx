import { useState, useCallback } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  const toggleMenu = useCallback(() => setOpen((v) => !v), [])
  const closeMenu = useCallback(() => setOpen(false), [])

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#inicio" className="nav-logo" onClick={closeMenu}>Lisandro Flores</a>

        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          aria-controls="primary-menu"
          aria-expanded={open}
          onClick={toggleMenu}
        >
          <span className="sr-only">Menú</span>
          <i className="fa-solid fa-bars"></i>
        </button>

        <ul id="primary-menu" className={`nav-menu ${open ? 'open' : ''}`}>
          <li className="nav-item"><a href="#sobre-mi" className="nav-link" onClick={closeMenu}>Sobre Mí</a></li>
          <li className="nav-item"><a href="#proyectos" className="nav-link" onClick={closeMenu}>Proyectos</a></li>
          <li className="nav-item"><a href="#formacion" className="nav-link" onClick={closeMenu}>Formación</a></li>
          <li className="nav-item"><a href="#contacto" className="nav-link" onClick={closeMenu}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
