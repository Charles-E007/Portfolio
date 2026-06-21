import Navbar      from './components/layout/Navbar'
import PageWrapper from './components/layout/PageWrapper'
import About from './sections/About/About'
import Hero from './sections/Hero/Hero'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Experience from './sections/Experience/Experience'
import Contact from './sections/Contact/Contact'

export default function App() {
  return (
    <PageWrapper>
      <Navbar />

      <main>
        <Hero />

        <About/>

        <Skills/>

        <Projects />

        <Experience />

        <Contact />

      </main>
    </PageWrapper>
  )
}