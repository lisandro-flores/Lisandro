import { useState, useCallback, useEffect } from 'react'
import { motion } from 'motion/react'

interface HeaderProps {
  activeSection?: string;
  setActiveSection?: (id: string) => void;
}

const navItems = [
  { id: 'sobre-mi', label: 'Sobre Mí', icon: 'fa-solid fa-user' },
  { id: 'skills', label: 'Habilidades', icon: 'fa-solid fa-layer-group' },
  { id: 'proyectos', label: 'Proyectos', icon: 'fa-solid fa-code' },
  { id: 'formacion', label: 'Formación', icon: 'fa-solid fa-graduation-cap' },
  { id: 'contacto', label: 'Contacto', icon: 'fa-solid fa-envelope' },
]

function Header({ activeSection = 'inicio', setActiveSection }: HeaderProps) {
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
      {open && <div className="sidebar-overlay" onClick={closeMenu} aria-hidden="true" />}

      <header className="header">
        <nav className="nav container">
          <a
            href="#inicio"
            className="nav-logo"
            onClick={() => {
              setActiveSection?.('inicio')
              closeMenu()
            }}
          >
            Lisandro Flores
          </a>

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
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setActiveSection?.(item.id)
                      closeMenu()
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="nav-active-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      />
                    )}
                    <i className={`${item.icon} nav-icon`}></i>
                    <span className="nav-text">{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
