import Navbar      from './components/layout/Navbar'
import PageWrapper from './components/layout/PageWrapper'
import About from './sections/About/About'
import Hero from './sections/Hero/Hero'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Experience from './sections/Experience/Experience'

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

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <p className="text-[var(--color-muted)] text-xl">Contact</p>
        </section>
      </main>
    </PageWrapper>
  )
}