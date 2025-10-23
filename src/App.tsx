import Header from './components/Header.tsx'
import Inicio from './components/Inicio.tsx'
import SobreMi from './components/SobreMi.tsx'
import Skills from './components/Skills.tsx'
import Proyectos from './components/Proyectos.tsx'
import Formacion from './components/Formacion.tsx'
import Contacto from './components/Contacto.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <>
      <Header />
      <main>
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
