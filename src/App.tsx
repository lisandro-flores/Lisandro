import { useEffect } from 'react'
import Header from './components/Header.tsx'
import Inicio from './components/Inicio.tsx'
import SobreMi from './components/SobreMi.tsx'
import Skills from './components/Skills.tsx'
import Proyectos from './components/Proyectos.tsx'
import Formacion from './components/Formacion.tsx'
import Contacto from './components/Contacto.tsx'
import Footer from './components/Footer.tsx'

function App() {
  useEffect(() => {
    const sectionIds = ['inicio','sobre-mi','skills','proyectos','formacion','contacto']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (!id) return
        const link = document.querySelector(`.nav a[href="#${id}"]`)
        if (!link) return
        if (entry.isIntersecting) {
          document.querySelectorAll('.nav a.nav-link.active').forEach((el) => el.classList.remove('active'))
          link.classList.add('active')
        }
      })
    }

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px 0px -60% 0px',
      threshold: 0.4,
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
