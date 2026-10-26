import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
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

interface ProyectoCardProps {
  proyecto: Proyecto;
  index: number;
  isShowcase?: boolean;
}

function ProyectoCard({ proyecto, index, isShowcase = false }: ProyectoCardProps) {
  const badge = getTipoBadge(proyecto.tipo);
  const isFeatured = index === 0;
  const [nombre, ...resto] = proyecto.titulo.split(' — ');
  const subtitulo = resto.join(' — ');
  const numStr = `#${String(index + 1).padStart(2, '0')}`;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: isShowcase ? -8 : -7,
        transition: { type: 'spring', stiffness: 350, damping: 20 }
      }}
      className={`proyecto-card ${isFeatured ? 'proyecto-card-featured' : ''} ${isShowcase ? 'proyecto-card-showcase' : ''}`}
    >
      <div className="proyecto-header">
        <div className="proyecto-header-meta">
          <span className="proyecto-number">{numStr}</span>
          <span className={`proyecto-badge ${badge.className}`}>
            <i className={badge.icon}></i> {badge.label}
          </span>
        </div>
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
}

function Proyectos() {
  const { proyectos } = data as { proyectos: Proyecto[] };
  const [isDesktop, setIsDesktop] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const updateMedia = () => setIsDesktop(mediaQuery.matches);
    updateMedia();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateMedia);
    } else {
      mediaQuery.addListener(updateMedia);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateMedia);
      } else {
        mediaQuery.removeListener(updateMedia);
      }
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || !trackRef.current) return;

    const updateRange = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const paddingRight = 64;
        const range = Math.max(0, trackWidth - viewportWidth + paddingRight);
        setScrollRange(range);
      }
    };

    updateRange();

    const ro = new ResizeObserver(updateRange);
    ro.observe(trackRef.current);
    window.addEventListener('resize', updateRange);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateRange);
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return (
      <section className="proyectos section" id="proyectos">
        <h2 className="section-title reveal">Proyectos Destacados</h2>
        <motion.div
          className="proyectos-container container grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {proyectos.map((proyecto, index) => (
            <ProyectoCard
              key={index}
              proyecto={proyecto}
              index={index}
              isShowcase={false}
            />
          ))}
        </motion.div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="proyectos-showcase-section" id="proyectos">
      <div className="proyectos-sticky-window">
        {/* Header superior del showcase */}
        <div className="proyectos-showcase-header container">
          <div>
            <span className="proyectos-kicker">
              <i className="fa-solid fa-layer-group"></i> Showcase de Ingeniería
            </span>
            <h2 className="section-title">Proyectos Destacados</h2>
          </div>
          <div className="proyectos-showcase-hint">
            <i className="fa-solid fa-arrows-left-right"></i>
            <span>Scroll vertical para navegar</span>
            <span className="proyectos-counter-badge">{proyectos.length} proyectos</span>
          </div>
        </div>

        {/* Pista horizontal con tarjetas */}
        <div className="proyectos-track-viewport">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="proyectos-horizontal-track"
          >
            {proyectos.map((proyecto, index) => (
              <ProyectoCard
                key={index}
                proyecto={proyecto}
                index={index}
                isShowcase={true}
              />
            ))}
          </motion.div>
        </div>

        {/* Barra de progreso inferior */}
        <div className="proyectos-progress-track">
          <motion.div
            className="proyectos-progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
