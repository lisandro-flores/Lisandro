function Inicio() {
  return (
    <section className="inicio" id="inicio">
      <div className="inicio-container container grid">
        <div className="inicio-content">
          <h1>Hola, soy Lisandro Flores Ortega</h1>
          <h3>Ingeniero en Desarrollo y Gestión de Software | Backend Developer</h3>
          <div className="inicio-social">
            <a href="https://www.linkedin.com/in/lisandro-flores-73347b2b4" target="_blank" rel="noopener noreferrer" className="inicio-social-icon" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/lisandro-flores" target="_blank" rel="noopener noreferrer" className="inicio-social-icon" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:lisandroflores23027@gmail.com" className="inicio-social-icon" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="inicio-img">
          {/* La imagen se sirve desde la carpeta 'public/' */}
          <img src="/foto-perfil.jpg" alt="Foto de Lisandro Flores" className="inicio-foto" width={250} height={250} />
        </div>
      </div>
    </section>
  );
}

export default Inicio;
