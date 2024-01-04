import Link from 'next/link'
import React from 'react'

const navOptions = [
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]

export default function Navbar() {
  return (
    <header className="flex justify-center border">
      <nav className="py-6 flex items-center justify-between w-full max-w-[1200px]">
        <div>
          <Link
            href="/"
            className="font-semibold"
          >
            Leta Pham
          </Link>
        </div>
        <div>
          {navOptions.map((navOption, index) => {
            return (
              <a
                key={index}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-950 hover:bg-gray-200 transition-all rounded-lg"
                href={navOption.href}
              >
                {navOption.name}
              </a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
