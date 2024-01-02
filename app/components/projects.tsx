'use client'
import React from 'react'
import Link from 'next/link'
import Section from './section'
import { Carousel } from 'primereact/carousel'
import { Project } from '../lib/types'
import { projects } from '../lib/data'
import Image from 'next/image'

export default function Projects() {
  const projectTemplate = (project: Project) => {
    return (
      <Link href={project.link}>
        <Image
          src={project.image}
          alt={project.name}
          width={1200}
          height={500}
          className="w-full max-h-[500px] h-auto object-cover"
        />
        <h5 className="inline">{project.name}</h5>{' '}
        <p className="text-sm inline mt-2 text-gray-500">
          {project.description}
        </p>
      </Link>
    )
  }

  return (
    <Section id="projects">
      {/* <SectionHeader>Projects</SectionHeader> */}
      <div className="w-full">
        {/*  new Carousel*/}
        <Carousel
          value={projects}
          numVisible={1}
          numScroll={1}
          className="custom-carousel"
          circular
          autoplayInterval={5000}
          itemTemplate={projectTemplate}
        />
      </div>
    </Section>
  )
}
