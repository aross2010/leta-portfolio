import { ProjectData } from '@/app/lib/types'
import React from 'react'
import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { PiCaretRight } from 'react-icons/pi'

type ProjectHomeProps = {
  project: ProjectData
}

export default function ProjectHome({ project }: ProjectHomeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
  })

  return (
    <Link href={`/project/${project.path}`}>
      <div
        className={`py-16 relative group`}
        ref={ref}
      >
        <motion.h5
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -100,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
            type: 'spring',
            stiffness: 50,
          }}
          className="absolute uppercase tracking-wider xl:text-sm text-xs xl:text-gray-700 xl:ml-0 xl:mt-0 ml-2 mt-2 text-gray-100"
        >
          {project.projectFunction}
        </motion.h5>

        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className={`absolute top-1/2 transform -translate-y-1/2 md:text-2xl text-lg font-medium uppercase tracking-wider z-[5] xl:text-gray-950 text-gray-100 xl:ml-0 ml-2 `}
        >
          {project.title}
        </motion.h2>
        <motion.h5
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -100,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
            type: 'spring',
            stiffness: 50,
          }}
          className="absolute uppercase tracking-wider xl:text-sm text-xs bottom-0 xl:mb-16 xl:text-gray-700 mb-[4.5rem] xl:ml-0 ml-2 text-gray-100"
        >
          {project.date}
        </motion.h5>
        <motion.h5
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 100,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
            type: 'spring',
            stiffness: 50,
          }}
          className="uppercase absolute tracking-wider flex items-center gap-1 xl:text-sm text-xs right-0 bottom-0 xl:mb-16 mb-[4.5rem] xl:mr-0 mr-2 xl:text-gray-700 text-gray-100 group"
        >
          View project
          <PiCaretRight className="group-hover:translate-x-1 transition-transform" />
        </motion.h5>
        <motion.div
          className="flex justify-center"
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.75,
          }}
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
          <img
            src={project.thumbnailImage.src}
            alt={project.title}
            className="xl:h-[375px] md:h-[325px] h-auto xl:w-[750px] w-full object-center md:rounded-lg rounded-md shadow-lg object-cover xl:group-hover:scale-105 transition-all duration-300 ease-in-out z-[-1]"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ width: '0%' }}
        animate={{
          width: isInView ? '100%' : '0%',
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="border-b-[0.5px] border-gray-400"
      />
    </Link>
  )
}
