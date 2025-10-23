import data from '../data/information.json'

function SobreMi() {
  const { sobreMi } = data

  return (
    <section className="sobre-mi" id="sobre-mi">
      <h2 className="section-title reveal">Sobre Mí</h2>
      <div className="sobre-mi-container container grid">
        <div className="sobre-mi-data reveal reveal-delay-1">
          {sobreMi.parrafos.map((parrafo, index) => (
            <p key={index}>{parrafo}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
