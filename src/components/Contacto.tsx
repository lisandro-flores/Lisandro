import { useState, useCallback } from 'react'
import data from '../data/information.json'

function Contacto() {
  const { personal, redes } = data
  const [copied, setCopied] = useState(false)

  const copyEmail = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(personal.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }, [personal.email])

  return (
    <section className="contacto section" id="contacto">
      <h2 className="section-title reveal">Contacto</h2>
      <div className="contacto-container container reveal reveal-delay-1">
        <div className="contacto-card">
          <p className="contacto-intro">
            ¿Tienes una vacante, propuesta de software o colaboración en desarrollo web? Escríbeme directamente.
          </p>

          <div className="contacto-email-box">
            <span className="contacto-email-text">{personal.email}</span>
            <div className="contacto-actions">
              <button
                type="button"
                onClick={copyEmail}
                className="button button-sm button-secondary"
                aria-label="Copiar correo electrónico al portapapeles"
              >
                {copied ? (
                  <>
                    <i className="fa-solid fa-check"></i> ¡Copiado!
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-copy"></i> Copiar
                  </>
                )}
              </button>
              <a
                href={`mailto:${personal.email}`}
                className="button button-sm button-primary"
                aria-label="Abrir cliente de correo para enviar mensaje"
              >
                Enviar correo <i className="fa-solid fa-paper-plane"></i>
              </a>
            </div>
          </div>

          <div className="contacto-channels">
            <a
              href={redes.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-channel-link"
              aria-label="Perfil de LinkedIn de Lisandro Flores"
            >
              <i className="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href={redes.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-channel-link"
              aria-label="Perfil de GitHub de Lisandro Flores"
            >
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
            <div className="contacto-channel-badge">
              <i className="fa-solid fa-location-dot"></i>
              <span>{personal.ubicacion || 'Puebla, México · Remoto / Híbrido'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
