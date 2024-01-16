import React from 'react'
import { Section } from '@/app/lib/types'
import ProjectCarousel from './project-carousel'
import { motion } from 'framer-motion'

type ProjectSectionProps = {
  section: Section
  secondaryColorText: string
  secondaryColorBorder: string
}

export default function ProjectSection({
  section,
  secondaryColorBorder,
  secondaryColorText,
}: ProjectSectionProps) {
  return (
    <div className={`flex flex-col`}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
          type: 'spring',
          stiffness: 50,
        }}
      >
        <h2
          className={`uppercase tracking-wider font-medium text-2xl pb-2 ${secondaryColorText}`}
        >
          {section.title}
        </h2>
      </motion.div>

      <motion.div
        className={`border-b ${secondaryColorBorder} mb-12`}
        initial={{ width: '0%' }}
        whileInView={{ width: '100%' }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      />
      <motion.div
        className="w-full mb-6 border rounded-lg shadow-lg "
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: 'spring',
          stiffness: 50,
        }}
      >
        <ProjectCarousel
          section={section}
          bgWhite={
            section.title === 'Technical Drawings' ||
            section.title === 'Development'
          }
        />
      </motion.div>
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.25,
        }}
      >
        <p className="text-sm whitespace-pre-line rounded-lg">
          {section.description}
        </p>
      </motion.div>
    </div>
  )
}
