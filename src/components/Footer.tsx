import data from '../data/information.json'

function Footer() {
  const { personal, redes } = data

  return (
    <footer className="footer">
      <div className="footer-container container">
        <p>&copy; 2025 {personal.nombre}. Todos los derechos reservados.</p>
        <div className="footer-social">
           <a href={redes.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href={redes.github} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
