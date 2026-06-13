import Navbar      from './components/layout/Navbar'
import PageWrapper from './components/layout/PageWrapper'
import Hero from './sections/Hero/Hero'

export default function App() {
  return (
    <PageWrapper>
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="min-h-screen flex items-center justify-center">
          <p className="text-[var(--color-muted)] text-xl">About</p>
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center">
          <p className="text-[var(--color-muted)] text-xl">Skills</p>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center">
          <p className="text-[var(--color-muted)] text-xl">Projects</p>
        </section>

        <section id="experience" className="min-h-screen flex items-center justify-center">
          <p className="text-[var(--color-muted)] text-xl">Experience</p>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <p className="text-[var(--color-muted)] text-xl">Contact</p>
        </section>
      </main>
    </PageWrapper>
  )
}