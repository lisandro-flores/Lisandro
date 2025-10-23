function Proyectos() {
  return (
    <section className="proyectos" id="proyectos">
      <h2 className="section-title">Proyectos Destacados</h2>
      
      <div className="proyectos-container container grid">

        {/* Proyecto 1 */}
        <article className="proyecto-card">
          <div className="proyecto-content">
            <h4>Sistema de Gestión de Contenido (CMS) - UTTECAM</h4>
            <p>
              Colaboré en el diseño y construcción de una API RESTful con Node.js/Express, implementando autenticación y aplicando las 10 mejores prácticas de seguridad de OWASP. Fui responsable del despliegue backend en producción (CPanel).
            </p>
            <div className="proyecto-links">
              <a href="https://uttecam.edu.mx" target="_blank" rel="noopener noreferrer" className="button">Ver Demo <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </article>

        {/* Proyecto 2 */}
        <article className="proyecto-card">
          <div className="proyecto-content">
            <h4>Truekland - App Web de Intercambio</h4>
            <p>
              Colaboré en una aplicación web full-stack, desarrollando la interfaz con Next.js y conectándola a Firebase (Firestore/Auth). Implementé la lógica de negocio y el ciclo de usuario completo desde el frontend.
            </p>
            <div className="proyecto-links">
              <a href="https://trueklandweb.vercel.app" target="_blank" rel="noopener noreferrer" className="button">Ver Demo <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </article>

        {/* Proyecto 3 */}
        <article className="proyecto-card">
          <div className="proyecto-content">
            <h4>Análisis de Logs en Tiempo Real</h4>
            <p>
              Diseñé la arquitectura inicial para un sistema de análisis de logs, implementando un backend de alto rendimiento con Go (Gin), WebSockets para transmisión en vivo y PostgreSQL.
            </p>
            <div className="proyecto-links">
              <a href="https://github.com/lisandro-flores/realtime-logs" target="_blank" rel="noopener noreferrer" className="button">Repositorio <i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Proyectos;
