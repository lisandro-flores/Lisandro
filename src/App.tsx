import { useEffect } from 'react'
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
  
  useEffect(() => {
    const sectionIds = ['inicio','sobre-mi','skills','proyectos','formacion','contacto']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const callback: IntersectionObserverCallback = (entries) => {
      // Encontrar la sección más visible
      const visibleEntries = entries.filter(entry => entry.isIntersecting)
      
      if (visibleEntries.length === 0) return

      // Obtener la entrada con mayor ratio de intersección
      const mostVisible = visibleEntries.reduce((prev, current) => {
        return current.intersectionRatio > prev.intersectionRatio ? current : prev
      })

      if (mostVisible.intersectionRatio > 0.3) {
        const id = mostVisible.target.getAttribute('id')
        if (!id) return
        const link = document.querySelector(`.nav a[href="#${id}"]`)
        if (!link) return
        
        document.querySelectorAll('.nav a.nav-link.active').forEach((el) => el.classList.remove('active'))
        link.classList.add('active')
      }
    }

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    })

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main id="main">
        <Inicio />
        <SobreMi />
        <Skills />
        <Proyectos />
        <Formacion />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
