import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Fragment } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projectsData } from '@/app/lib/data'

type NavLinkProps = {
  name: string
  href: string
  setIsProjectsOpen: React.Dispatch<React.SetStateAction<boolean>>
  external?: boolean
} & React.HTMLAttributes<HTMLAnchorElement>

export default function NavLink({
  name,
  href,
  setIsProjectsOpen,
  external,
}: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(true)
    if (name === 'Projects') {
      setIsProjectsOpen(true)
    } else {
      setIsProjectsOpen(false)
    }
  }

  const handleBlur = () => {
    setIsHovered(false)
  }

  return (
    <Fragment>
      <Link
        className=" text-gray-600 uppercase tracking-wider text-xs rounded-lg relative hover:text-gray-950 transition-colors"
        href={href}
        onFocus={handleHover}
        onBlur={handleBlur}
        onMouseEnter={handleHover}
        onMouseLeave={handleBlur}
        target={external ? '_blank' : '_self'}
      >
        <span>{name}</span>
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{
            duration: 0.25,
          }}
          className="border-b-2 border-gray-950 absolute"
        />
      </Link>
    </Fragment>
  )
}
