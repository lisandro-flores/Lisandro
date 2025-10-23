function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Habilidades</h2>
      <div className="skills-container container grid">
        
        <div className="skill-box">
          <h3>Lenguajes de Programación</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Go</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Gin</li>
            <li>Fiber</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Bases de Datos</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Firebase</li>
            <li>PostgreSQL</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Herramientas y Metodologías</h3>
          <ul>
            <li>GitHub</li>
            <li>Docker</li>
            <li>Postman</li>
            <li>Cpanel</li>
            <li>Scrum</li>
            <li>Lean Startup</li>
          </ul>
        </div>

         <div className="skill-box">
            <h3>Idiomas</h3>
            <ul>
                <li>Español (Nativo)</li>
                <li>Inglés (Básico A2)</li>
            </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
