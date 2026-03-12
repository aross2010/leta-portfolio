'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import NavLink from './ui/nav-link'
import { projectsData, experiencesData } from '../lib/data'
import Image from 'next/image'
import logoSm from '@/public/LP_Logo.png'
// import logoSm from '@/public/logo-small.png'
const navOptions = [
  {
    name: 'projects',
    href: '/#projects',
  },
  {
    name: 'experiences',
    href: '/#experiences',
  },
  {
    name: 'about me',
    href: '/#about',
  },
]

export default function Navbar() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isExperiencesOpen, setIsExperiencesOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseExit = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !ref.current?.contains(event.target as Node) &&
        !experiencesRef.current?.contains(event.target as Node)
      ) {
        setIsProjectsOpen(false)
        setIsExperiencesOpen(false)
      }
    }

    const handleMouseClick = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !ref.current?.contains(event.target as Node) &&
        !experiencesRef.current?.contains(event.target as Node)
      ) {
        setIsProjectsOpen(false)
        setIsExperiencesOpen(false)
      }
    }

    document.addEventListener('mousemove', handleMouseExit)
    document.addEventListener('click', handleMouseClick)

    return () => {
      document.removeEventListener('mousemove', handleMouseExit)
      document.removeEventListener('click', handleMouseClick)
    }
  }, [])

  const projectsDropdown = (
    <motion.div
      ref={ref}
      initial={{ height: 0 }}
      animate={{ height: 'auto' }}
      transition={{ duration: 0.4 }}
      className="border-b absolute top-0 mt-[45px] max-h-[200px] overflow-y-scroll shadow-md border-l border-r overflow-hidden rounded-b-md flex flex-col"
    >
      {projectsData.map((project, index) => (
        <Link
          href={`/project/${project.path}`}
          key={index}
          onClick={() => setIsProjectsOpen(false)}
          className={`${
            index !== projectsData.length - 1 ? 'border-b border-gray-200' : ''
          } px-3 py-3 text-xs tracking-wider bg-gray-100 hover:bg-gray-300 transition-colors whitespace-nowrap`}
        >
          {project.title}
        </Link>
      ))}
    </motion.div>
  )

  const experiencesDropdown = (
    <motion.div
      ref={experiencesRef}
      initial={{ height: 0 }}
      animate={{ height: 'auto' }}
      transition={{ duration: 0.4 }}
      className="border-b absolute top-0 mt-[45px] max-h-[200px] overflow-y-hidden shadow-md border-l border-r overflow-hidden rounded-b-md flex flex-col"
    >
      {experiencesData.map((experience, index) => (
        <Link
          href={`/experiences/${experience.path}`}
          key={index}
          onClick={() => setIsExperiencesOpen(false)}
          className={`${
            index !== experiencesData.length - 1
              ? 'border-b border-gray-200'
              : ''
          } px-3 py-3 text-xs tracking-wider bg-gray-100 hover:bg-gray-300 transition-colors whitespace-nowrap`}
        >
          {experience.title}
        </Link>
      ))}
    </motion.div>
  )

  return (
    <header
      ref={navRef}
      className="flex justify-center bg-gray-100/75 top-0 sticky z-[10] h-[70px] backdrop-blur-[0.5rem]"
    >
      <nav className=" xl:px-0 px-4 flex items-center justify-between w-full max-w-[1200px] relative py-6">
        <div>
          <Link href="/">
            <Image
              priority={true}
              src={logoSm}
              alt="LP Designs"
              width={45}
              height={45}
              className="absolute transform -translate-y-1/2 h-full w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center md:gap-6 sm:gap-4 xs:gap-3 gap-2">
          {navOptions.map((navOption, index) => (
            <div
              key={index}
              className="relative"
            >
              <NavLink
                href={navOption.href}
                name={navOption.name}
                setIsProjectsOpen={setIsProjectsOpen}
                setIsExperiencesOpen={setIsExperiencesOpen}
              />
              {navOption.name === 'projects' &&
                isProjectsOpen &&
                projectsDropdown}
              {navOption.name === 'experiences' &&
                isExperiencesOpen &&
                experiencesDropdown}
            </div>
          ))}
          <div className="relative">
            <NavLink
              href="/Leta_Pham_Resume.pdf"
              external
              name="resume"
              setIsProjectsOpen={setIsProjectsOpen}
              setIsExperiencesOpen={setIsExperiencesOpen}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}
