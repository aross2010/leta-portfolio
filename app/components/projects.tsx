'use client'
import React, { Fragment, useRef } from 'react'
import { motion } from 'framer-motion'
import { projectsData } from '../lib/data'

import ProjectHome from './ui/project-home'

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full max-w-[1200px] mx-auto scroll-mt-24"
    >
      <div className="flex justify-between items-center pb-2">
        <motion.h2
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="uppercase tracking-wider font-medium md:text-3xl text-2xl"
        >
          Projects
        </motion.h2>
        <motion.h4
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          className="md:text-xl text-lg text-gray-700 italic"
        >
          2023 — {new Date().getFullYear()}
        </motion.h4>
      </div>

      <motion.div
        initial={{ width: '0%' }}
        whileInView={{ width: '100%' }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="border-b-[0.5px] border-gray-400"
      />

      {projectsData.map((project, index) => {
        return (
          <ProjectHome
            key={index}
            project={project}
          />
        )
      })}
    </section>
  )
}
