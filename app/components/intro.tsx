'use client'
import React from 'react'
import Section from './ui/section'
import Image from 'next/image'
import { aboutData } from '../lib/data'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Intro() {
  const { name, titleShort, titleLong, links, profileImage } = aboutData

  return (
    <section
      className="w-full max-w-[1200px] mx-auto flex flex-col scroll-mt-48 justify-center items-center"
      id="/"
    >
      <div className="relative md:mb-6 mb-3 w-full flex md:flex-row flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, x: -250, y: '-50%' }}
          whileInView={{ opacity: 1, x: '-90%' }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: 'spring',
            stiffness: 100,
          }}
          className="text-4xl text-gray-700 absolute font-bold md:block hidden top-1/2 z-[5]"
        >
          {name}
        </motion.h2>
        <Link
          href={'#about'}
          className="hover:scale-110 transition-transform "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.25,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <Image
              priority={true}
              src={profileImage}
              alt={`${name} portrait`}
              className="rounded-full sm:w-[275px] sm:h-[275px] bg-primary w-[200px] h-[200px] shadow-xl object-cover object-center"
            />
          </motion.div>
        </Link>
        <motion.h2
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.25,
            delay: 0.5,
            type: 'spring',
            stiffness: 75,
          }}
          className="md:hidden text-gray-700 font-bold tracking-wider text-3xl mt-6"
        >
          {name}
        </motion.h2>
        <motion.h2
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.25,
            delay: 0.5,
            type: 'spring',
            stiffness: 75,
          }}
          className="md:hidden tracking-wider text-center font-medium text-gray-700 mt-2"
        >
          {titleLong}
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, x: 250, y: '-50%' }}
          whileInView={{ opacity: 1, x: '85%' }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          className="font-medium text-4xl text-gray-700 absolute md:block hidden top-1/2 z-[5]"
        >
          {titleShort}
        </motion.h2>
      </div>
      <ul className="flex items-center gap-2">
        {links.map((link, index) => {
          return (
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * index,
                type: 'spring',
                stiffness: 75,
              }}
              viewport={{
                once: true,
              }}
              key={index}
            >
              <Link
                href={link.href}
                target="_blank"
              >
                <link.icon className="text-2xl hover:scale-110 transition-all text-primary " />
              </Link>
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
