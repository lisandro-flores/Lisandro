import { useState, useEffect } from 'react'
import { MotionConfig } from 'motion/react'
import Header from './components/Header.tsx'
import Inicio from './components/Inicio.tsx'
import SobreMi from './components/SobreMi.tsx'
import Skills from './components/Skills.tsx'
import Proyectos from './components/Proyectos.tsx'
import Formacion from './components/Formacion.tsx'
import Contacto from './components/Contacto.tsx'
import Footer from './components/Footer.tsx'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal()
  const [activeSection, setActiveSection] = useState('inicio')
  
  useEffect(() => {
    const sectionIds = ['inicio', 'sobre-mi', 'skills', 'proyectos', 'formacion', 'contacto']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const callback: IntersectionObserverCallback = (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting)
      if (visibleEntries.length === 0) return

      const mostVisible = visibleEntries.reduce((prev, current) => {
        return current.intersectionRatio > prev.intersectionRatio ? current : prev
      })

      if (mostVisible.intersectionRatio > 0.25) {
        const id = mostVisible.target.getAttribute('id')
        if (id) {
          setActiveSection(id)
        }
      }
    }

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '-15% 0px -25% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    })

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main id="main">
        <Inicio />
        <SobreMi />
        <Skills />
        <Proyectos />
        <Formacion />
        <Contacto />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
