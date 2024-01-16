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

    document.addEventListener('mousemove', handleMouseExit)

    return () => {
      document.removeEventListener('mousemove', handleMouseExit)
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
      className="border-b absolute top-0 mt-[43px] border-l border-r overflow-hidden flex flex-col"
    >
      {projectsData.map((project, index) => {
        return (
          <Link
            href={`/project/${project.path}`}
            key={index}
            onClick={() => setIsProjectsOpen(false)}
            className={`${
              index % 2 !== 0 ? 'bg-gray-100' : 'bg-gray-50'
            } px-3 py-3 text-xs uppercase tracking-wider hover:bg-gray-300 transition-colors`}
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
      className="flex justify-center bg-gray-100/75 sticky top-0 z-[10] h-[70px] backdrop-blur-[0.5rem]"
    >
      <nav className=" xl:px-0 px-4 flex items-center justify-between w-full max-w-[1200px] relative py-6">
        <div>
          <Link
            href="/"
            className=""
          >
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
