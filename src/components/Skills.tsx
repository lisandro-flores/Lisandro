import data from '../data/information.json'

function Skills() {
  const { habilidades } = data

  return (
    <section className="skills" id="skills">
      <h2 className="section-title reveal">Habilidades</h2>
      <div className="skills-container container grid">
        {habilidades.map((grupo, index) => (
          <div key={index} className={`skill-box reveal reveal-delay-${(index % 3) + 1}`}>
            <h3>{grupo.categoria}</h3>
            <ul>
              {grupo.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
