import data from '../data/information.json'

function Contacto() {
  const { personal } = data

  return (
    <section className="contacto" id="contacto">
      <h2 className="section-title reveal">Contacto</h2>
      <div className="contacto-container container reveal reveal-delay-1">
        <p>¡Hablemos! Siempre estoy abierto a nuevas oportunidades y colaboraciones.</p>
        <a href={`mailto:${personal.email}`} className="button button-contact">
          Envíame un Email <i className="fa-solid fa-paper-plane"></i>
        </a>
      </div>
    </section>
  );
}

export default Contacto;
