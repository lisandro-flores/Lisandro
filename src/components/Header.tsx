import { useState, useCallback, useEffect } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'dark'
  )

  const toggleMenu = useCallback(() => setOpen((v) => !v), [])
  const closeMenu = useCallback(() => setOpen(false), [])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
    setTheme(next)
  }, [theme])

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (saved) {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
    }
  }, [])

  return (
    <>
      {/* Overlay oscuro cuando el sidebar está abierto */}
      {open && <div className="sidebar-overlay" onClick={closeMenu} />}

      <header className="header">
        <nav className="nav container">
          <a href="#inicio" className="nav-logo" onClick={closeMenu}>Lisandro Flores</a>

          <div className="nav-actions">
            <button
              className="nav-toggle"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-controls="primary-menu"
              aria-expanded={open}
              onClick={toggleMenu}
            >
              <span className="sr-only">Menú</span>
              <i className={`fa-solid ${open ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            <button
              className="theme-toggle"
              aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
              aria-pressed={theme === 'dark' ? 'true' : 'false'}
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Tema: oscuro' : 'Tema: claro'}
            >
              {theme === 'dark' ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-sun"></i>
              )}
            </button>
          </div>

          <ul id="primary-menu" className={`nav-menu ${open ? 'open' : ''}`}>
            <li className="nav-item">
              <a href="#sobre-mi" className="nav-link" onClick={closeMenu}>
                <i className="fa-solid fa-user nav-icon"></i>
                <span className="nav-text">Sobre Mí</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#proyectos" className="nav-link" onClick={closeMenu}>
                <i className="fa-solid fa-code nav-icon"></i>
                <span className="nav-text">Proyectos</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#formacion" className="nav-link" onClick={closeMenu}>
                <i className="fa-solid fa-graduation-cap nav-icon"></i>
                <span className="nav-text">Formación</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacto" className="nav-link" onClick={closeMenu}>
                <i className="fa-solid fa-envelope nav-icon"></i>
                <span className="nav-text">Contacto</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
