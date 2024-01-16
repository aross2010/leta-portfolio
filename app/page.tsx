import Intro from './components/intro'
import Projects from './components/projects'
import { Fragment } from 'react'
import About from './components/about'
import ScrollUp from './components/ui/scroll-up'

export default function Home() {
  return (
    <Fragment>
      <Intro />
      <Projects />
      <About />
    </Fragment>
  )
}
