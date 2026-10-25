import data from '../data/information.json'

function SobreMi() {
  const { sobreMi } = data

  return (
    <section className="sobre-mi section" id="sobre-mi">
      <h2 className="section-title reveal">Sobre Mí</h2>
      <div className="sobre-mi-container container">
        <div className="sobre-mi-data reveal reveal-delay-1">
          {sobreMi.parrafos.map((parrafo, index) => (
            <p key={index}>{parrafo}</p>
          ))}
        </div>

        {sobreMi.metricas && sobreMi.metricas.length > 0 && (
          <div className="sobre-mi-metricas reveal reveal-delay-2">
            {sobreMi.metricas.map((m, index) => (
              <div key={index} className="metrica-card">
                <div className="metrica-icon">
                  <i className={m.icono}></i>
                </div>
                <div className="metrica-data">
                  <span className="metrica-valor">{m.valor}</span>
                  <h3 className="metrica-label">{m.label}</h3>
                  <span className="metrica-sublabel">{m.sublabel}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SobreMi;
