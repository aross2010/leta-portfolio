'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import NavLink from './ui/nav-link'
import { projectsData } from '../lib/data'
import Image from 'next/image'
import logoSm from '@/public/logo-small.png'

const navOptions = [
  {
    name: 'Projects',
    href: '/#projects',
  },
  {
    name: 'About Me',
    href: '/#about',
  },
]

export default function Navbar() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseExit = (event: MouseEvent) => {
      if (
        ref.current &&
        navRef.current &&
        !ref.current.contains(event.target as Node) &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsProjectsOpen(false)
      }
    }

    const handleMouseClick = (event: MouseEvent) => {
      if (
        ref.current &&
        navRef.current &&
        !ref.current.contains(event.target as Node) &&
        !navRef.current.contains(event.target as Node)
      ) {
        // Clicked outside the dropdown or the trigger element

        event.preventDefault()
        setIsProjectsOpen(false)
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
      initial={{
        height: 0,
      }}
      animate={{
        height: 'auto',
      }}
      transition={{
        duration: 0.4,
      }}
      className="border-b absolute top-0 mt-[43px] shadow-md border-l border-r overflow-hidden rounded-b-md flex flex-col"
    >
      {projectsData.map((project, index) => {
        return (
          <Link
            href={`/project/${project.path}`}
            key={index}
            onClick={() => setIsProjectsOpen(false)}
            className={`${
              index !== projectsData.length - 1
                ? 'border-b border-gray-200'
                : ''
            } px-3 py-3 text-xs uppercase tracking-wider bg-gray-100 hover:bg-gray-300 transition-colors`}
          >
            {project.title}
          </Link>
        )
      })}
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
              quality={100}
              className="absolute transform -translate-y-1/2 "
            />
          </Link>
        </div>
        <div className="flex items-center md:gap-6 gap-4 relative">
          {isProjectsOpen && projectsDropdown}
          {navOptions.map((navOption, index) => {
            return (
              <NavLink
                key={index}
                href={navOption.href}
                name={navOption.name}
                setIsProjectsOpen={setIsProjectsOpen}
              />
            )
          })}
          <NavLink
            href="/Leta_Pham_Resume.pdf"
            external
            name="Resume"
            setIsProjectsOpen={setIsProjectsOpen}
          />
        </div>
      </nav>
    </header>
  )
}
