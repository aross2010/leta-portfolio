import React from 'react'
import Section from './ui/section'
import profilePicture from '@/public/profile.png'
import { links } from '../lib/data'

export default function About() {
  return (
    <Section id="about">
      {/* <SectionHeader>About Me</SectionHeader> */}
      <div className="flex w-full items-center gap-6">
        <div className="w-1/2 flex justify-center">
          <img
            className="rounded-full h-[300px] w-[300px]"
            src={profilePicture.src}
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold mb-2">Leta Pham</h1>
          <div className="flex items-center mb-12">
            {links.map((link, index) => {
              return (
                <a
                  href={link.href}
                  key={index}
                  target="_blank"
                  className="hover:bg-[#93bb76] p-1.5 text-gray-700 transition-all rounded-full "
                >
                  <link.icon className="w-6 h-6" />
                </a>
              )
            })}
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            ad qui consequuntur dolor recusandae, ipsum voluptas magnam ex minus
            laudantium odit animi? Odit adipisci ad atque doloribus modi vero.
            Dolor. Recusandae est iste nihil a! Maxime repellendus velit ipsa
            modi debitis iusto a minima omnis vel expedita explicabo ab culpa
            eveniet rem quidem sint fuga, amet beatae possimus ipsum ducimus?
          </p>
        </div>
      </div>
    </Section>
  )
}
