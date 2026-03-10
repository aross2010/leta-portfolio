import { ProjectData } from '@/app/lib/types'
import React from 'react'
import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { PiCaretRight } from 'react-icons/pi'

type HomeDisplayProps = {
  title: string
  func: string
  date: string
  thumbnail: StaticImageData
  color: string
  type: 'project' | 'experience'
  path: string
  badge?: {
    image: StaticImageData
  }
}

export default function HomeDisplay({
  title,
  func,
  date,
  path,
  thumbnail,
  color,
  type,
  badge,
}: HomeDisplayProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
  })

  return (
    <Link href={`/${type == 'experience' ? 'experiences' : 'project'}/${path}`}>
      <div
        className={`sm:py-16 py-8 relative group`}
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
          className="absolute tracking-wider xl:text-sm text-xs text-gray-700 z-10 xl:ml-0 xl:mt-0 ml-2 mt-2 hidden md:block"
        >
          {func}
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
          style={{
            color: color,
          }}
          className={`absolute top-1/2 transform -translate-y-1/2 md:text-2xl text-lg font-bold tracking-wider z-[5] text-gray-950 xl:ml-0 ml-2 md:block hidden `}
        >
          {title}
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
          className="absolute tracking-wider xl:text-sm text-xs bottom-0 xl:mb-16 text-gray-700 mb-[4.5rem] xl:ml-0 ml-2 md:block hidden"
        >
          {' '}
          {/* when less than medium, move title to above thumbnail */}
          {date}
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
          className="absolute tracking-wider flex items-center gap-1 xl:text-sm text-xs right-0 bottom-0 xl:mb-16 mb-[4.5rem] xl:mr-0 mr-2 xl:text-gray-700 text-gray-100 group"
        >
          {type === 'project' ? 'view project' : 'learn more'}{' '}
          <PiCaretRight className="group-hover:translate-x-1 transition-transform" />
        </motion.h5>
        <motion.div
          className="flex justify-center relative"
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
          <div className="relative md:inline-block w-full md:w-auto">
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
              style={{
                color: color,
              }}
              className={`md:text-2xl text-lg mb-2 font-bold tracking-wider z-[5] text-gray-950 xl:ml-0 ml-2 md:hidden`}
            >
              {title}
            </motion.h2>
            <Image
              priority={true}
              src={thumbnail}
              alt={title}
              className=" xl:w-[750px] md:w-[625px] aspect-video w-full object-center md:rounded-lg rounded-md shadow-lg object-cover xl:group-hover:scale-105 transition-all duration-300 ease-in-out -z-10"
            />
            {badge && (
              <motion.div
                className="absolute md:-top-12 -top-6 -right-12 md:-right-32"
                initial={{ opacity: 0, x: 80 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : 80,
                }}
                transition={{
                  delay: 1.25,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 60,
                }}
              >
                <Image
                  src={badge.image}
                  height={200}
                  width={200}
                  className="w-auto md:h-72 h-48 object-contain"
                  alt="IIDA Honor Awards 2025"
                />
              </motion.div>
            )}
          </div>
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
