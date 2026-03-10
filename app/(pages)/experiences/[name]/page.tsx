'use client'
import React, { Fragment } from 'react'
import { experiencesData, projectsData } from '@/app/lib/data'
import { motion, AnimatePresence } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { redirect } from 'next/navigation'
import Slideshow from '@/app/components/ui/slideshow'
import Link from 'next/link'
import { FaArrowDown } from 'react-icons/fa'

export default function Experience({ params }: { params: { name: string } }) {
  const index = experiencesData.findIndex((experience) => {
    return experience.path === params.name
  })

  if (index === -1) {
    return redirect('/')
  }

  const { title, brief, color, slideshow, videos } = experiencesData[index]

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
        <div className="flex mb-24 md:flex-row flex-col items-center mt-4">
          <div className="md:w-1/2 w-full flex flex-col md:gap-4 gap-6">
            <motion.div
              className="md:w-1/2 w-full md:hidden "
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
            <motion.p
              className="text-sm whitespace-pre-line md:mb-6 mb-3 xl:w-[70%] md:w-[85%]"
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
          </div>
          <motion.div
            className="lg:w-3/5 md:w-1/2 w-full md:block hidden"
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
      {videos && (
        <section className="flex flex-col gap-16 w-full max-w-[1200px] sm:-mt-24 -mt-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: letters.length * 0.05 + 0.25 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="flex justify-start items-center gap-2 w-full max-w-[1200px]"
            >
              <h2
                className="font-bold text-xl"
                style={{ color }}
              >
                my videos
              </h2>
              <FaArrowDown color={color} />
            </motion.div>
          </motion.div>
          {videos.map((video, index) => {
            return (
              <div
                key={index}
                className="flex md:flex-row flex-col items-center gap-8"
              >
                <motion.div
                  className="md:w-1/2 w-full flex justify-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full aspect-video">
                    <iframe
                      className="absolute inset-0 w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${new URL(video.url).searchParams.get('v') ?? video.url.split('/').pop()}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/2 w-full flex justify-center items-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3
                    className="text-lg font-semibold tracking-wider text-center"
                    style={{ color }}
                  >
                    {video.title}
                  </h3>
                </motion.div>
              </div>
            )
          })}
        </section>
      )}
    </Fragment>
  )
}
