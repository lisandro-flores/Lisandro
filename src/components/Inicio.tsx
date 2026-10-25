import data from '../data/information.json'

function Inicio() {
  const { personal, redes } = data
  const fotoUrl = `${import.meta.env.BASE_URL}${personal.fotoPerfil}`
  const cvUrl = `${import.meta.env.BASE_URL}${personal.cvPdf || 'CV_LisandroFlores.pdf'}`

  return (
    <section className="inicio section" id="inicio">
      <div className="inicio-container container grid">
        <div className="inicio-content">
          <div className="inicio-badge reveal">
            <span className="status-dot"></span>
            <span>{personal.disponibilidad || 'Disponible para contratación'}</span>
          </div>

          <h1 className="inicio-title reveal reveal-delay-1">
            Hola, soy <span className="highlight-text">{personal.nombre}</span>
          </h1>

          <h2 className="inicio-subtitle reveal reveal-delay-1">
            {personal.titulo}
          </h2>

          <p className="inicio-description reveal reveal-delay-2">
            Especializado en plataformas SaaS en producción, arquitecturas Offline-First resilientes y APIs REST escalables con React, Angular, Node.js, NestJS y Go.
          </p>

          <div className="inicio-actions reveal reveal-delay-2">
            <a href="#proyectos" className="button button-primary">
              Ver proyectos <i className="fa-solid fa-arrow-down"></i>
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
              aria-label="Descargar currículum en formato PDF"
            >
              Descargar CV <i className="fa-solid fa-file-pdf"></i>
            </a>
            <a href="#contacto" className="button button-tertiary">
              Contactarme <i className="fa-solid fa-paper-plane"></i>
            </a>
          </div>

          <div className="inicio-social reveal reveal-delay-3">
            <a
              href={redes.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inicio-social-icon"
              aria-label="Perfil de LinkedIn de Lisandro Flores"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href={redes.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inicio-social-icon"
              aria-label="Perfil de GitHub de Lisandro Flores"
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inicio-social-icon"
              aria-label="Enviar correo electrónico a Lisandro Flores"
              title="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="inicio-img-wrapper reveal reveal-delay-1">
          <div className="inicio-img-halo">
            <img
              src={fotoUrl}
              alt={`Foto de perfil de ${personal.nombre}`}
              className="inicio-foto"
              width={280}
              height={280}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
