'use client'
import React, { Fragment } from 'react'
import { projectsData } from '@/app/lib/data'
import { motion, AnimatePresence } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { redirect } from 'next/navigation'
import Slideshow from '@/app/components/ui/slideshow'
import Link from 'next/link'

export default function Project({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = React.use(params)
  const index = projectsData.findIndex((project) => {
    return project.path === name
  })

  if (index === -1) {
    return redirect('/')
  }

  const {
    title,
    headers,
    brief,
    icons,
    pdf,
    color,
    slideshow,
    additionalSections,
  } = projectsData[index]

  const projectIcons = (
    <ul className={`flex items-center text-[20px] gap-2`}>
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
            style={{ color }}
          >
            {icon}
          </motion.li>
        )
      })}
    </ul>
  )

  const projectHeaders = (
    <ul style={{ color }}>
      {headers.map((header, index) => {
        return (
          <motion.li
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.25 * index,
              duration: 1,
            }}
          >
            <h4 className="font-semibold inline">{header.title}: </h4>
            <p className="inline">{header.value}</p>
          </motion.li>
        )
      })}
    </ul>
  )

  const letters = title.split('')

  return (
    <Fragment>
      <section
        id="project"
        className="flex flex-col w-full max-w-[1200px] scroll-mt-[30rem] text-gray-700"
      >
        <h1
          style={{
            color: color,
          }}
          className={`xl:text-3xl text-2xl mb-2 font-bold tracking-wider `}
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
        <div className="flex mb-24 lg:flex-row lg:gap-2 flex-col items-center">
          <div className="lg:w-1/2 w-full flex flex-col lg:gap-4 gap-6 mt-4">
            <div className="flex flex-col gap-2 text-sm">
              {projectHeaders}
              {projectIcons}
            </div>
            <motion.div
              className="lg:w-1/2 w-full lg:hidden "
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                type: 'spring',
                stiffness: 50,
              }}
            >
              <Slideshow slideshow={slideshow} />
            </motion.div>
            <motion.div
              className="border-b-[0.5px] border-gray-400 lg:block hidden"
              initial={{ width: '0%' }}
              animate={{ width: '75%' }}
              transition={{
                duration: 1,
                delay: 0.1 * (icons.length - 1) + 0.5,
              }}
            />
            <motion.p
              className="text-sm whitespace-pre-line lg:mb-6 mb-3 xl:w-[70%] lg:w-[85%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              style={{ color }}
            >
              {brief}
            </motion.p>
            {pdf && (
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
                <Link
                  target="_blank"
                  href={pdf}
                  className="group inline-block py-2 px-3 uppercase tracking-wider text-xs font-medium border rounded-full cursor-pointer hover:scale-105 focus:scale-105 active:scale-95 transition"
                  style={{ color, borderColor: color }}
                >
                  Project PDF
                  <HiDownload className="inline-block group-hover:translate-y-0.5 ml-1 transition" />
                </Link>
              </motion.div>
            )}
          </div>
          <motion.div
            className="lg:w-3/5 md:w-1/2 w-full lg:block hidden"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <Slideshow slideshow={slideshow} />
          </motion.div>
        </div>
      </section>

      {additionalSections &&
        additionalSections.map((section, sectionIndex) => {
          const sectionLetters = section.title.split('')
          const sectionSlideshow = section.link
            ? [{ youtubeUrl: section.link }, ...section.slideshow]
            : section.slideshow

          return (
            <section
              key={sectionIndex}
              className="flex flex-col w-full max-w-[1200px] text-gray-700 sm:-mt-24 -mt-36"
            >
              <motion.div
                className="border-b-[0.5px] border-gray-400 mb-12"
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              <h1
                style={{ color }}
                className="xl:text-3xl text-2xl mb-2 font-bold tracking-wider"
              >
                <AnimatePresence>
                  {sectionLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </h1>
              <div className="flex mb-24 lg:flex-row flex-col items-center mt-4">
                <div className="lg:w-1/2 w-full flex flex-col lg:gap-4 gap-6">
                  <motion.div
                    className="w-full lg:hidden"
                    initial={{ opacity: 0, scale: 0.75 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                      type: 'spring',
                      stiffness: 50,
                    }}
                  >
                    <Slideshow slideshow={sectionSlideshow} />
                  </motion.div>
                  <motion.p
                    className="text-sm whitespace-pre-line lg:mb-6 mb-3 xl:w-[70%] lg:w-[85%]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ color }}
                  >
                    {section.brief}
                  </motion.p>
                </div>
                <motion.div
                  className="lg:w-3/5 w-full lg:block hidden aspect-video"
                  initial={{ opacity: 0, scale: 0.75 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    type: 'spring',
                    stiffness: 50,
                  }}
                >
                  <Slideshow slideshow={sectionSlideshow} />
                </motion.div>
              </div>
            </section>
          )
        })}
    </Fragment>
  )
}
