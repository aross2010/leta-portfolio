import Image from 'next/image'
import Intro from './components/intro'
import Projects from './components/projects'
import { Fragment } from 'react'
import About from './components/about'

export default function Home() {
  return (
    <Fragment>
      <Intro />
      <Projects />
      <About />
    </Fragment>
  )
}
