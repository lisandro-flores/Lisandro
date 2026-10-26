import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import data from '../data/information.json'

interface Proyecto {
  titulo: string;
  descripcion: string;
  tipo: string;
  demo?: string;
  repositorio?: string;
  tags?: string[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 130,
      damping: 18,
      mass: 0.85
    }
  }
};

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
      
      <motion.div
        className="proyectos-container container grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {proyectos.map((proyecto, index) => {
          const badge = getTipoBadge(proyecto.tipo);
          const isFeatured = index === 0;
          const [nombre, ...resto] = proyecto.titulo.split(' — ');
          const subtitulo = resto.join(' — ');

          return (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -7,
                transition: { type: 'spring', stiffness: 350, damping: 20 }
              }}
              className={`proyecto-card ${isFeatured ? 'proyecto-card-featured' : ''}`}
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
                    <motion.a
                      href={proyecto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-proyecto button-demo"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                      <span>Ver Demo</span>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </motion.a>
                  )}
                  {proyecto.repositorio && (
                    <motion.a
                      href={proyecto.repositorio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-proyecto button-repo"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                      <i className="fa-brands fa-github"></i>
                      <span>Repositorio</span>
                    </motion.a>
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
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Proyectos;
