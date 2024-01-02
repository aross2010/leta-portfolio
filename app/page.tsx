import Image from 'next/image'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-48 justify-center my-12">
      <About />
      <Projects />
    </main>
  )
}
