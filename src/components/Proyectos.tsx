import data from '../data/information.json'

function Proyectos() {
  const { proyectos } = data

  return (
    <section className="proyectos" id="proyectos">
      <h2 className="section-title reveal">Proyectos Destacados</h2>
      
      <div className="proyectos-container container grid">
        {proyectos.map((proyecto, index) => (
          <article key={index} className={`proyecto-card reveal reveal-delay-${(index % 3) + 1}`}>
            <div className="proyecto-content">
              <h4>{proyecto.titulo}</h4>
              <p>{proyecto.descripcion}</p>
              
              {proyecto.tags && proyecto.tags.length > 0 && (
                <div className="proyecto-tags">
                  {proyecto.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              )}
              
              <div className="proyecto-links">
                {proyecto.tipo === 'demo' && proyecto.demo && (
                  <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="button">
                    Ver Demo <i className="fa-solid fa-arrow-right"></i>
                  </a>
                )}
                {proyecto.tipo === 'repositorio' && proyecto.repositorio && (
                  <a href={proyecto.repositorio} target="_blank" rel="noopener noreferrer" className="button">
                    Repositorio <i className="fa-brands fa-github"></i>
                  </a>
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
