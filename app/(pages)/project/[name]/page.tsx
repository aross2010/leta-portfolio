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
import ProjectSection from '@/app/components/ui/project-section'

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
    moodBoard,
    pdf,
    primaryColorText,
    secondaryColorText,
    secondaryColorBorder,
  } = projectsData[index]

  // const fadeInAnimationVariants = {
  //   initial: {
  //     opacity: 0,
  //     y: -100,
  //   },
  //   animate: (index: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       delay: 0.1 * index,
  //     },
  //   }),
  // }

  const projectIcons = (
    <ul className={`${secondaryColorText} flex items-center text-[20px] gap-2`}>
      {' '}
      {icons.map((icon, index) => {
        return (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 * index,
              type: 'spring',
              stiffness: 75,
            }}

            // variants={fadeInAnimationVariants}
            // whileInView="animate"
            // viewport={{
            //   once: true,
            // }}
            // initial="initial"
            // custom={index}
          >
            {icon}
          </motion.li>
        )
      })}
    </ul>
  )

  const projectHeaders = (
    <ul
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // transition={{
    //   duration: 1,
    //   delay: 0.5,
    // }}
    >
      {' '}
      {headers.map((header, index) => {
        return (
          <motion.li
            key={index}
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.25 * index,
              duration: 1,
            }}
          >
            <h4 className="font-semibold">
              {header.title}:{'  '}
            </h4>
            <p>{header.value}</p>
          </motion.li>
        )
      })}
    </ul>
  )

  const projectSections = (
    <div className="flex flex-col gap-24">
      {sections.map((section, index) => {
        return (
          <ProjectSection
            key={index}
            section={section}
            secondaryColorBorder={secondaryColorBorder}
            secondaryColorText={secondaryColorText}
          />
        )
      })}
    </div>
  )

  const letters = title.split('')

  return (
    <Fragment>
      <section className="flex flex-col w-full max-w-[1200px] scroll-mt-48 text-gray-700">
        <h1
          className={`xl:text-3xl text-2xl font-medium ${primaryColorText} mb-8 uppercase tracking-wider`}
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
        <div className="flex mb-24 md:flex-row flex-col items-center">
          <div className="md:w-1/2 w-full">
            <div className="flex flex-col gap-1 md:mb-12 mb-6 text-sm">
              {projectIcons}
              {projectHeaders}
            </div>
            <motion.div
              className="md:w-1/2 w-full md:hidden mb-6 "
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                type: 'spring',
                stiffness: 50,
              }}
            >
              <Image
                priority={true}
                src={moodBoard}
                alt="BOJ"
                className="w-full rounded-lg shadow-lg border"
              />
            </motion.div>
            <motion.p
              className="text-sm whitespace-pre-line md:mb-6 mb-3 xl:w-[70%] md:w-[85%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            >
              {brief}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.25,
                type: 'spring',
                stiffness: 75,
              }}
            >
              <a
                target="_blank"
                href={pdf}
                className={`group inline-block py-2 px-3 uppercase tracking-wider text-xs font-medium border ${secondaryColorBorder} ${secondaryColorText} rounded-full cursor-pointer hover:scale-105 focus:scale-105 active:scale-95 transition`}
              >
                Project PDF
                <HiDownload
                  className={`inline-block group-hover:translate-y-0.5 ml-1 ${secondaryColorText} transition`}
                />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="md:w-1/2 w-full md:block hidden"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <Image
              priority={true}
              src={moodBoard}
              alt="BOJ"
              className="w-full rounded-lg shadow-lg border"
            />
          </motion.div>
        </div>
        {projectSections}
      </section>
    </Fragment>
  )
}
