function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <p>&copy; 2025 Lisandro Flores Ortega. Todos los derechos reservados.</p>
        <div className="footer-social">
           <a href="https://www.linkedin.com/in/lisandro-flores-73347b2b4" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/lisandro-flores" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
