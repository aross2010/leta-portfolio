import Image from 'next/image'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <About />
      <Projects />
    </Fragment>
  )
}
