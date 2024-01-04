'use client'
import React, { Fragment } from 'react'
import Link from 'next/link'
import Section from './ui/section'

import { Project } from '../lib/types'
import { projects } from '../lib/data'
import CarouselComponent from './ui/carousel'

export default function Projects() {
  const projectTemplate = (project: Project) => {
    return (
      <Fragment>
        <Link href={project.link}>
          <div
            className="relative flex w-full h-[500px] bg-cover bg-center rounded-lg cursor-pointer"
            style={{
              backgroundImage: `url(${project.image.src})`,
            }}
          >
            <h3 className="mt-auto ml-4 mb-4 text-white text-3xl font-semibold">
              {project.name}
            </h3>
          </div>
        </Link>
        <div className="mt-1"></div>
      </Fragment>
    )
  }

  return (
    <Section id="projects">
      {/* <SectionHeader>Projects</SectionHeader> */}
      <div className="w-full">
        <CarouselComponent>
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="w-full"
              >
                {projectTemplate(project)}
              </div>
            )
          })}
        </CarouselComponent>
      </div>
    </Section>
  )
}
