import data from '../data/information.json'

function Footer() {
  const { personal, redes } = data

  return (
    <footer className="footer">
      <div className="footer-container container">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {personal.nombre}. Desarrollado con React, Vite y TypeScript.
        </p>
        <div className="footer-social">
          <a
            href={redes.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Perfil de LinkedIn de Lisandro Flores"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href={redes.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Perfil de GitHub de Lisandro Flores"
            title="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="footer-social-icon"
            aria-label="Enviar correo electrónico"
            title="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
