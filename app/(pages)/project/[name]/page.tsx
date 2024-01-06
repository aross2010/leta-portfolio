'use client'
import React, { Fragment } from 'react'
import { projectsData } from '@/app/lib/data'
import { CarouselData } from '@/app/lib/types'
import CarouselComponent from '@/app/components/ui/carousel'
import { motion, AnimatePresence } from 'framer-motion'

import { HiDownload } from 'react-icons/hi'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import ProjectCarousel from '@/app/components/ui/project-carousel'

export default function Project({ params }: { params: { name: string } }) {
  const index = projectsData.findIndex((project) => {
    return project.path === params.name
  })

  if (index === -1) {
    return redirect('/')
  }

  const {
    title,
    headers,
    brief,
    sections,
    icons,
    headerImage,
    pdf,
    primaryColorText,
    secondaryColorText,
    secondaryColorBorder,
  } = projectsData[index]

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index, // stagger the animations by 0.05s
      },
    }),
  }

  const projectIcons = (
    <ul className={`${secondaryColorText} flex items-center text-[20px] gap-2`}>
      {' '}
      {icons.map((icon, index) => {
        return (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            whileInView="animate"
            viewport={{
              once: true,
            }}
            initial="initial"
            custom={index}
          >
            {icon}
          </motion.li>
        )
      })}
    </ul>
  )

  const projectHeaders = (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.75,
      }}
    >
      {' '}
      {headers.map((header, index) => {
        return (
          <div
            key={index}
            className="flex gap-2"
          >
            <h4 className="font-semibold">
              {header.title}:{'  '}
            </h4>
            <p>{header.value}</p>
          </div>
        )
      })}
    </motion.ul>
  )

  const projectSections = (
    <div className="flex flex-col gap-24">
      {sections.map((section, index) => {
        return (
          <div
            className={`flex flex-col gap-6 ${
              index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
            }`}
            key={index}
          >
            <h2
              className={`font-medium text-xl  border-b py-2 uppercase tracking-wider ${secondaryColorBorder} ${secondaryColorText}`}
            >
              {section.title}
            </h2>
            <div className="w-full">
              <ProjectCarousel
                section={section}
                bgWhite={section.title === 'Technical Drawings'}
              />
            </div>
            <div className="w-full">
              <p className="text-sm whitespace-pre-line rounded-lg">
                {section.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )

  const letters = title.split('')

  return (
    <Fragment>
      <section className="flex flex-col w-full max-w-[1200px] text-gray-700">
        <h1
          className={`text-3xl font-medium ${primaryColorText} mb-8 uppercase tracking-wider`}
        >
          <AnimatePresence>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {letter}
              </motion.span>
            ))}
          </AnimatePresence>
        </h1>
        <div className="flex mb-24 items-center">
          <div className="w-1/2">
            <div className="flex flex-col gap-1 mb-12 text-sm">
              {projectIcons}
              {projectHeaders}
            </div>
            <p className="text-sm whitespace-pre-line mb-6 lg:w-[70%]">
              {brief}
            </p>
            <a
              download
              href={pdf}
              className={`group inline-block py-2 px-3 uppercase tracking-wider text-xs font-medium border ${secondaryColorBorder} ${secondaryColorText} rounded-full cursor-pointer hover:scale-105 focus:scale-105 active:scale-95 transition`}
            >
              PDF Version
              <HiDownload
                className={`inline-block group-hover:translate-y-0.5 ml-1 ${secondaryColorText} transition`}
              />
            </a>
          </div>
          <Image
            src={headerImage}
            alt="BOJ"
            className="w-1/2 rounded-lg shadow-lg border"
          />
        </div>
        {projectSections}
      </section>
    </Fragment>
  )
}
