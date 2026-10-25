import data from '../data/information.json'

function Proyectos() {
  const { proyectos } = data

  return (
    <section className="proyectos section" id="proyectos">
      <h2 className="section-title reveal">Proyectos Destacados</h2>
      
      <div className="proyectos-container container grid">
        {proyectos.map((proyecto, index) => (
          <article key={index} className={`proyecto-card reveal reveal-delay-${(index % 2) + 1}`}>
            <div className="proyecto-header">
              {proyecto.categoria && (
                <span className="proyecto-category-badge">{proyecto.categoria}</span>
              )}
              <h4>{proyecto.titulo}</h4>
            </div>

            <div className="proyecto-content">
              <p>{proyecto.descripcion}</p>
              
              {proyecto.tags && proyecto.tags.length > 0 && (
                <div className="proyecto-tags">
                  {proyecto.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>

            <div className="proyecto-footer">
              <div className="proyecto-links">
                {proyecto.demo && (
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-sm button-demo"
                    aria-label={`Ver demo en producción de ${proyecto.titulo}`}
                  >
                    Ver Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                )}
                {proyecto.repositorio && (
                  <a
                    href={proyecto.repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-sm button-secondary button-repo"
                    aria-label={`Ver repositorio de ${proyecto.titulo} en GitHub`}
                  >
                    Código <i className="fa-brands fa-github"></i>
                  </a>
                )}
                {proyecto.tipo === 'experiencia' && (
                  <span className="proyecto-status">
                    <i className="fa-solid fa-briefcase"></i> Producción empresarial (Digyto)
                  </span>
                )}
                {proyecto.tipo === 'institucional' && (
                  <span className="proyecto-status">
                    <i className="fa-solid fa-building-columns"></i> Despliegue institucional activo
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
