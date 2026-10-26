import data from '../data/information.json'

interface HabilidadGrupo {
  categoria: string;
  items: string[];
}

function getCategoryIcon(categoria: string): string {
  const cat = categoria.toLowerCase();
  if (cat.includes('lenguajes')) return 'fa-solid fa-code';
  if (cat.includes('backend')) return 'fa-solid fa-server';
  if (cat.includes('frontend')) return 'fa-solid fa-laptop-code';
  if (cat.includes('bases de datos')) return 'fa-solid fa-database';
  if (cat.includes('calidad') || cat.includes('herramientas')) return 'fa-solid fa-screwdriver-wrench';
  if (cat.includes('idiomas')) return 'fa-solid fa-language';
  return 'fa-solid fa-layer-group';
}

function getSkillIcon(item: string): string {
  const name = item.toLowerCase();
  if (name.includes('react query')) return 'fa-solid fa-arrows-spin';
  if (name.includes('react')) return 'fa-brands fa-react';
  if (name.includes('angular')) return 'fa-brands fa-angular';
  if (name.includes('node')) return 'fa-brands fa-node-js';
  if (name.includes('javascript')) return 'fa-brands fa-js';
  if (name.includes('typescript')) return 'fa-solid fa-code';
  if (name === 'go' || name.startsWith('go ') || name.endsWith(' go')) return 'fa-brands fa-golang';
  if (name.includes('html')) return 'fa-brands fa-html5';
  if (name.includes('css') && !name.includes('tailwind')) return 'fa-brands fa-css3-alt';
  if (name.includes('tailwind')) return 'fa-solid fa-wind';
  if (name.includes('astro')) return 'fa-solid fa-rocket';
  if (name.includes('vite') && !name.includes('vitest')) return 'fa-solid fa-bolt-lightning';
  if (name.includes('next')) return 'fa-solid fa-layer-group';
  if (name.includes('docker')) return 'fa-brands fa-docker';
  if (name.includes('linux')) return 'fa-brands fa-linux';
  if (name.includes('git')) return 'fa-brands fa-git-alt';
  if (name.includes('postgres') || name.includes('mysql') || name.includes('sql')) return 'fa-solid fa-database';
  if (name.includes('redis')) return 'fa-solid fa-cubes';
  if (name.includes('mongodb')) return 'fa-solid fa-leaf';
  if (name.includes('supabase')) return 'fa-solid fa-bolt-lightning';
  if (name.includes('prisma')) return 'fa-solid fa-gem';
  if (name.includes('sequelize')) return 'fa-solid fa-diagram-project';
  if (name.includes('websocket')) return 'fa-solid fa-arrows-rotate';
  if (name.includes('webhook')) return 'fa-solid fa-plug';
  if (name.includes('jwt') || name.includes('rbac')) return 'fa-solid fa-shield-halved';
  if (name.includes('rest')) return 'fa-solid fa-network-wired';
  if (name.includes('jest') || name.includes('vitest') || name.includes('supertest')) return 'fa-solid fa-vial';
  if (name.includes('cypress') || name.includes('playwright')) return 'fa-solid fa-flask-vial';
  if (name.includes('ci/cd')) return 'fa-solid fa-gears';
  if (name.includes('sentry') || name.includes('prometheus') || name.includes('grafana')) return 'fa-solid fa-chart-line';
  if (name.includes('cloud') || name.includes('traefik')) return 'fa-solid fa-cloud';
  if (name.includes('indexeddb') || name.includes('dexie')) return 'fa-solid fa-hard-drive';
  if (name.includes('capacitor')) return 'fa-solid fa-mobile-screen';
  if (name.includes('scrum')) return 'fa-solid fa-people-group';
  if (name.includes('español')) return 'fa-solid fa-earth-americas';
  if (name.includes('inglés')) return 'fa-solid fa-globe';
  return 'fa-solid fa-check';
}

function Skills() {
  const { habilidades } = data as { habilidades: HabilidadGrupo[] }

  return (
    <section className="skills" id="skills">
      <h2 className="section-title reveal">Habilidades</h2>
      <div className="skills-container container grid">
        {habilidades.map((grupo, index) => (
          <div key={index} className={`skill-box reveal reveal-delay-${(index % 3) + 1}`}>
            <div className="skill-box-header">
              <span className="skill-box-icon">
                <i className={getCategoryIcon(grupo.categoria)}></i>
              </span>
              <h3>{grupo.categoria}</h3>
            </div>
            <ul className="skill-list">
              {grupo.items.map((item, itemIndex) => (
                <li key={itemIndex} className="skill-item">
                  <i className={`${getSkillIcon(item)} skill-item-icon`}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
