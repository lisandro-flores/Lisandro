import data from '../data/information.json'

function Skills() {
  const { habilidades } = data

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title reveal">Habilidades Técnicas</h2>
      <div className="skills-container container grid">
        {habilidades.map((grupo, index) => (
          <div key={index} className={`skill-box reveal reveal-delay-${(index % 3) + 1}`}>
            <div className="skill-box-header">
              {grupo.icono && (
                <div className="skill-box-icon" aria-hidden="true">
                  <i className={grupo.icono}></i>
                </div>
              )}
              <h3>{grupo.categoria}</h3>
            </div>
            <div className="skill-chips">
              {grupo.items.map((item, itemIndex) => (
                <span key={itemIndex} className="skill-chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
