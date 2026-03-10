import Intro from './components/intro'
import Projects from './components/projects'
import { Fragment } from 'react'
import About from './components/about'
import ScrollUp from './components/ui/scroll-up'
import Experiences from './components/experiences'

export default function Home() {
  return (
    <Fragment>
      <Intro />
      <Projects />
      <Experiences />
      <About />
    </Fragment>
  )
}
