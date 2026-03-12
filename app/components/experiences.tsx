'use client'
import React, { Fragment, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experiencesData, projectsData } from '../lib/data'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import ProjectHome from './ui/home-display'
import HomeDisplay from './ui/home-display'
import { ExperiencesData } from '../lib/types'

export default function Experiences() {
  const ref = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false)
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      setExpanded(true)
    }
  }

  const visibleProjects = expanded
    ? experiencesData
    : experiencesData.slice(0, 3)

  return (
    <section
      id="experiences"
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
          className="font-bold tracking-wider text-gray-700 md:text-3xl text-2xl"
        >
          experiences
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
          className=" md:text-lg text-gray-700 italic"
        >
          2002 — {new Date().getFullYear()}
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

      {visibleProjects.map(
        (
          { title, experienceFunction, color, thumbnailImage, path, date },
          index,
        ) => {
          return (
            <HomeDisplay
              key={index}
              type="experience"
              date={date}
              title={title}
              func={experienceFunction}
              color={color}
              thumbnail={thumbnailImage}
              path={path}
            />
          )
        },
      )}
      {experiencesData.length > 3 && (
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={() => handleToggle()}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1  tracking-wider text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors group"
          >
            <span>{expanded ? 'view less' : 'view more'}</span>
            {expanded ? (
              <FiChevronUp className="text-lg group-hover:scale-110 transition-transform" />
            ) : (
              <FiChevronDown className="text-lg group-hover:scale-110 transition-transform" />
            )}
          </motion.button>
        </div>
      )}
    </section>
  )
}
