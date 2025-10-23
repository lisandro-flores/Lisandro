import data from '../data/information.json'

function Inicio() {
  const { personal, redes } = data

  return (
    <section className="inicio" id="inicio">
      <div className="inicio-container container grid">
        <div className="inicio-content">
          <h1>Hola, soy {personal.nombre}</h1>
          <h3>{personal.titulo}</h3>
          <div className="inicio-social">
            <a href={redes.linkedin} target="_blank" rel="noopener noreferrer" className="inicio-social-icon" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={redes.github} target="_blank" rel="noopener noreferrer" className="inicio-social-icon" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={`mailto:${personal.email}`} className="inicio-social-icon" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="inicio-img">
          <img src={personal.fotoPerfil} alt={`Foto de ${personal.nombre}`} className="inicio-foto" width={250} height={250} />
        </div>
      </div>
    </section>
  );
}

export default Inicio;
