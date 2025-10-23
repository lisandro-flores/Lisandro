import data from '../data/information.json'

function Formacion() {
  const { formacion } = data

  return (
    <section className="formacion" id="formacion">
      <h2 className="section-title reveal">Educación</h2>
      <div className="formacion-container container">
        {formacion.map((item, index) => (
          <div key={index} className={`formacion-item reveal reveal-delay-${index + 1}`}>
            <h4>{item.titulo}</h4>
            <p>{item.periodo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Formacion;
