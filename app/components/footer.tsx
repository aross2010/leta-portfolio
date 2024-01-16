import React from 'react'
import { aboutData } from '../lib/data'
import { RiEmotionHappyLine } from 'react-icons/ri'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      <div className=" flex md:flex-row flex-col md:gap-8 gap-4 items-center justify-center w-full max-w-[1200px]">
        <span className="flex uppercase tracking-wider gap-2 font-medium items-center">
          Connect with me! <RiEmotionHappyLine className="text-2xl" />
        </span>
        <ul className="flex items-center gap-2 ">
          {aboutData.links.map((link, index) => {
            return (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                >
                  <link.icon className="text-2xl hover:scale-110 transition-all" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <small className="mt-12">
        Copyright © {new Date().getFullYear()} Leta Pham.{' '}
      </small>
    </footer>
  )
}
