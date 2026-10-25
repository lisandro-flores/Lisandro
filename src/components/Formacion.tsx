import data from '../data/information.json'

function Formacion() {
  const { formacion } = data

  return (
    <section className="formacion section" id="formacion">
      <h2 className="section-title reveal">Educación</h2>
      <div className="formacion-container container">
        {formacion.map((item, index) => (
          <div key={index} className={`formacion-item reveal reveal-delay-${index + 1}`}>
            <div className="formacion-header">
              <div className="formacion-icon" aria-hidden="true">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="formacion-titles">
                <h4>{item.titulo}</h4>
                <p className="formacion-institucion">
                  <i className="fa-solid fa-building-columns"></i> {item.institucion}
                </p>
              </div>
            </div>

            <div className="formacion-periodo">
              <i className="fa-regular fa-calendar"></i> {item.periodo}
            </div>

            {item.detalles && item.detalles.length > 0 && (
              <div className="formacion-badges">
                {item.detalles.map((detalle, dIdx) => (
                  <span key={dIdx} className="formacion-badge">
                    <i className="fa-solid fa-circle-check"></i> {detalle}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Formacion;
