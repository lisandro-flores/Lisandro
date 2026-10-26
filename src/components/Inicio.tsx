import { motion } from 'motion/react'
import data from '../data/information.json'

function Inicio() {
  const { personal, redes } = data
  const fotoUrl = `${import.meta.env.BASE_URL}${personal.fotoPerfil}`
  const cvUrl = `${import.meta.env.BASE_URL}${personal.cvPdf || 'CV_LisandroFlores.pdf'}`

  return (
    <section className="inicio" id="inicio">
      <div className="inicio-container container grid">
        <motion.div
          className="inicio-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 110, damping: 20, delay: 0.1 }}
        >
          <h1>Hola, soy {personal.nombre}</h1>
          <h3>{personal.titulo}</h3>
          <div className="inicio-actions">
            <motion.a
              href="#proyectos"
              className="button"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Ver proyectos <i className="fa-solid fa-arrow-down"></i>
            </motion.a>
            <motion.a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Descargar CV <i className="fa-solid fa-file-pdf"></i>
            </motion.a>
            <motion.a
              href="#contacto"
              className="button button-secondary"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Contactarme <i className="fa-solid fa-paper-plane"></i>
            </motion.a>
          </div>
          <div className="inicio-social">
            <motion.a
              href={redes.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inicio-social-icon"
              aria-label="LinkedIn"
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 450, damping: 15 }}
            >
              <i className="fa-brands fa-linkedin"></i>
            </motion.a>
            <motion.a
              href={redes.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inicio-social-icon"
              aria-label="GitHub"
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 450, damping: 15 }}
            >
              <i className="fa-brands fa-github"></i>
            </motion.a>
            <motion.a
              href={`mailto:${personal.email}`}
              className="inicio-social-icon"
              aria-label="Email"
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 450, damping: 15 }}
            >
              <i className="fa-solid fa-envelope"></i>
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          className="inicio-img"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.2 }}
        >
          <img src={fotoUrl} alt={`Foto de ${personal.nombre}`} className="inicio-foto" width={250} height={250} decoding="async" />
        </motion.div>
      </div>
    </section>
  );
}

export default Inicio;
