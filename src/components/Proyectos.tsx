import data from '../data/information.json'

interface Proyecto {
  titulo: string;
  descripcion: string;
  tipo: string;
  demo?: string;
  repositorio?: string;
  tags?: string[];
}

function getTipoBadge(tipo: string) {
  switch (tipo) {
    case 'demo':
      return {
        label: 'Producto / SaaS',
        icon: 'fa-solid fa-rocket',
        className: 'badge-demo'
      };
    case 'experiencia':
      return {
        label: 'Experiencia Profesional',
        icon: 'fa-solid fa-briefcase',
        className: 'badge-experiencia'
      };
    case 'institucional':
      return {
        label: 'En Producción',
        icon: 'fa-solid fa-building-columns',
        className: 'badge-institucional'
      };
    case 'repositorio':
      return {
        label: 'Código Abierto',
        icon: 'fa-solid fa-code-branch',
        className: 'badge-repositorio'
      };
    default:
      return {
        label: 'Proyecto',
        icon: 'fa-solid fa-folder',
        className: 'badge-default'
      };
  }
}

function Proyectos() {
  const { proyectos } = data as { proyectos: Proyecto[] }

  return (
    <section className="proyectos" id="proyectos">
      <h2 className="section-title reveal">Proyectos Destacados</h2>
      
      <div className="proyectos-container container grid">
        {proyectos.map((proyecto, index) => {
          const badge = getTipoBadge(proyecto.tipo);
          const isFeatured = index === 0;
          const [nombre, ...resto] = proyecto.titulo.split(' — ');
          const subtitulo = resto.join(' — ');

          return (
            <article
              key={index}
              className={`proyecto-card ${isFeatured ? 'proyecto-card-featured' : ''} reveal reveal-delay-${(index % 3) + 1}`}
            >
              <div className="proyecto-header">
                <span className={`proyecto-badge ${badge.className}`}>
                  <i className={badge.icon}></i> {badge.label}
                </span>
                {isFeatured && (
                  <span className="proyecto-featured-tag">
                    <i className="fa-solid fa-star"></i> Proyecto Principal
                  </span>
                )}
              </div>

              <div className="proyecto-content">
                <div className="proyecto-title-group">
                  <h4 className="proyecto-nombre">{nombre}</h4>
                  {subtitulo && <span className="proyecto-subtitulo">{subtitulo}</span>}
                </div>

                <p className="proyecto-descripcion">{proyecto.descripcion}</p>
                
                {proyecto.tags && proyecto.tags.length > 0 && (
                  <div className="proyecto-tags">
                    {proyecto.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
                
                <div className="proyecto-links">
                  {proyecto.demo && (
                    <a
                      href={proyecto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-proyecto button-demo"
                    >
                      <span>Ver Demo</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                  {proyecto.repositorio && (
                    <a
                      href={proyecto.repositorio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-proyecto button-repo"
                    >
                      <i className="fa-brands fa-github"></i>
                      <span>Repositorio</span>
                    </a>
                  )}
                  {proyecto.tipo === 'experiencia' && !proyecto.demo && !proyecto.repositorio && (
                    <span className="proyecto-status">
                      <i className="fa-solid fa-lock"></i> Código propietario empresarial
                    </span>
                  )}
                  {proyecto.tipo === 'institucional' && !proyecto.demo && !proyecto.repositorio && (
                    <span className="proyecto-status">
                      <i className="fa-solid fa-lock"></i> Despliegue en red institucional
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Proyectos;
