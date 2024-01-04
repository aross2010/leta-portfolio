import React from 'react'
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiAdobeindesign,
  SiAutodeskrevit,
} from 'react-icons/si'
import { enscapeSVG } from './icons'
import beauty from '@/public/beauty.png'
import workshop from '@/public/workshop.png'
import bathroom from '@/public/bathroom.png'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

import BOJ from '@/public/projects/BeautyofJoseon/BOJBRANDING.png'

import beauty1 from '@/public/projects/BeautyofJoseon/Renders/1-BREAKRENDER.jpg'
import beauty2 from '@/public/projects/BeautyofJoseon/Renders/2-LOBBYRENDER.jpg'
import beauty3 from '@/public/projects/BeautyofJoseon/Renders/3-BREAKROOM.png'
import beauty4 from '@/public/projects/BeautyofJoseon/Renders/4-LOUNGE.png'
import beauty5 from '@/public/projects/BeautyofJoseon/Renders/5-WHITERENDER.png'
import beauty5b from '@/public/projects/BeautyofJoseon/Renders/6-SPECIALAREA.png'

import beauty6 from '@/public/projects/BeautyofJoseon/Technical Drawings/BOJAXON1.png'
import beauty7 from '@/public/projects/BeautyofJoseon/Technical Drawings/BOJAXON2.png'
import beauty8 from '@/public/projects/BeautyofJoseon/Technical Drawings/BOJBUBBLEDIAGRAM.png'
import beauty9 from '@/public/projects/BeautyofJoseon/Technical Drawings/BOJFLOORPLAN.png'
import beauty10 from '@/public/projects/BeautyofJoseon/Technical Drawings/BOJRCP.png'
import beauty11 from '@/public/projects/BeautyofJoseon/Technical Drawings/BOJSECTION.png'

import restRender1 from '@/public/projects/UniversalRestroom/Renders/RENDER1.png'
import restRender2 from '@/public/projects/UniversalRestroom/Renders/RENDER2.png'

import restDraw1 from '@/public/projects/UniversalRestroom/Technical Drawings/1-AGRFLOORPLAN.png'
import restDraw2 from '@/public/projects/UniversalRestroom/Technical Drawings/2-AGRRCP.png'
import restDraw3 from '@/public/projects/UniversalRestroom/Technical Drawings/3-AGRAXON.png'
import restDraw4 from '@/public/projects/UniversalRestroom/Technical Drawings/4-AGRPERSPECTIVAL.png'
import restDraw5 from '@/public/projects/UniversalRestroom/Technical Drawings/5-AGRSECTION1.png'
import restDraw6 from '@/public/projects/UniversalRestroom/Technical Drawings/6-AGRSECTION2.png'

export const projects = [
  {
    name: 'Workshop Residence',
    description: 'This is the best project ever',
    image: workshop,
    link: '/project/residence',
  },
  {
    name: 'The Worst Project',
    description: 'This is the worst project ever',
    image: beauty,
    link: '/project/worst',
  },
  {
    name: 'The Okay Project',
    description: 'This is the okay project ever',
    image: bathroom,
    link: '/project/okay',
  },
]

export const projectsData = [
  {
    path: 'boj',
    title: 'Beauty of Joseon HQ',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    headerImage: BOJ,
    pdf: '/projects/BeautyofJoseon/Leta_Pham-Beauty_of_Joseon.pdf',
    primaryColorText: 'text-[#abc39a]',
    secondaryColorText: 'text-[#cebfbf]',
    secondaryColorBorder: 'border-[#cebfbf]/50',

    headers: [
      {
        title: 'Client',
        value: 'Beauty of Joseon',
      },
      {
        title: 'Location',
        value: 'Newport Beach, CA',
      },
      {
        title: 'Program',
        value: 'Workplace / Office',
      },
      {
        title: 'Area',
        value: '~ 1,800 SF',
      },
    ],
    brief:
      "The design challenge was to create a space that reflects their brand identity. Together, with traditional finishes mized with modern finishes, this space reflects the brand's mission to mix old practices with new ones.\n\nThe space emphasizes a soft feeling, with the use of wood and colors, like a muted pink and green. There are also plants placed throughout the space as accent pieces to bring in a bright, healthy green glow and connection to nature.",
    sections: [
      {
        title: 'Renders',
        description:
          "Beauty of Joseon is a Korean skincare brand that focuses on using traditional Korean beauty and skincare practices, fusing it with natural ingredients to promote healthy skin.\n\nThe design challenge was to create a space that reflects their brand identity. Together, with traditional finishes mized with modern finishes, this space reflects the brand's mission to mix old practices with new ones.",
        carouselData: [
          {
            image: beauty1,
            title: 'Reception',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: beauty2,
            title: 'Lobby',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: beauty3,
            title: 'Breakroom',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: beauty4,
            title: 'Lounge',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: beauty5,
            title: 'White Lobby Render',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: beauty5b,
            title: 'Special Area',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
        ],
      },
      {
        title: 'Technical Drawings',
        description:
          "Beauty of Joseon is a Korean skincare brand that focuses on using traditional Korean beauty and skincare practices, fusing it with natural ingredients to promote healthy skin.\n\nThe design challenge was to create a space that reflects their brand identity. Together, with traditional finishes mized with modern finishes, this space reflects the brand's mission to mix old practices with new ones.",
        carouselData: [
          {
            image: beauty6,
            title: 'Axonometric View 1',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: beauty7,
            title: 'Axonometric View 2',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: beauty8,
            title: 'Bubble Diagram',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: beauty9,
            title: 'Floor Plan',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: beauty10,
            title: 'Reflected Ceiling Plan',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: beauty11,
            title: 'Kitchen Section View',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
        ],
      },
    ],
  },
  {
    path: 'restroom',
    title: 'Universal Gender Restroom',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    headerImage: restRender1,
    pdf: '/projects/BeautyofJoseon/Leta_Pham-Beauty_of_Joseon.pdf',
    primaryColorText: 'text-[#4d2987]',
    secondaryColorText: 'text-[#aeacaf]',
    secondaryColorBorder: 'border-[#aeacaf]/50',
    headers: [
      {
        title: 'Program',
        value: 'Restroom',
      },
      {
        title: 'Inspiration',
        value: 'Futuristic Spaceship',
      },
      {
        title: 'Location',
        value: 'Developer TBD',
      },
      {
        title: 'Area',
        value: '~ 1,100 SF',
      },
    ],
    brief:
      'The design challenge was to create an all gender restroom with ADA compliance.\n\nThe solution for this challenge was designing a bathroom with plenty of clearances for a comfortable experience, and finishes that made the space feel futuristic and clean for easy maintenance and gooduser-experience.\n\nIn terms of FF&E, the bathroom interior is inspired by futuristic spaceships so the materials reflect that. There is glossy epoxy, chrome, and stainless steel to allow for maximum glossiness to imply smooth clean surfaces that spaceships have.\n\n When picking this inspiration, the word ‘space’ was used quite literally because of the implementation of ADA clearances. The walkways have 5’-0” minimum clerance and the stalls are more spacious than stalls on normal occasion. There is an addition of a vanity space and a storage wall to provide amentities to users. These special features allow the user to feel like they have energize and tend to their needs in the bathroom, with lots of space in-between.',
    sections: [
      {
        title: 'Renders',
        description:
          "Beauty of Joseon is a Korean skincare brand that focuses on using traditional Korean beauty and skincare practices, fusing it with natural ingredients to promote healthy skin.\n\nThe design challenge was to create a space that reflects their brand identity. Together, with traditional finishes mized with modern finishes, this space reflects the brand's mission to mix old practices with new ones.",
        carouselData: [
          {
            image: restRender1,
            title: 'Lavatory Area',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: restRender2,
            title: 'Vanity Area',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
        ],
      },
      {
        title: 'Technical Drawings',
        description:
          "Beauty of Joseon is a Korean skincare brand that focuses on using traditional Korean beauty and skincare practices, fusing it with natural ingredients to promote healthy skin.\n\nThe design challenge was to create a space that reflects their brand identity. Together, with traditional finishes mized with modern finishes, this space reflects the brand's mission to mix old practices with new ones.",
        carouselData: [
          {
            image: restDraw1,
            title: 'Floor Plan',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: restDraw2,
            title: 'Reflected Ceiling Plan',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: restDraw3,
            title: 'Axonometric View',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: restDraw4,
            title: 'Perspectival View',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: restDraw5,
            title: 'Toilet Section View',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: restDraw6,
            title: 'Sink Section View',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
        ],
      },
    ],
  },
]

export const links = [
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/letaphamdesign?igsh=OGQ5ZDc2ODk2ZA==',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/leta-pham-ba85a3136/',
  },
  {
    icon: IoMdMail,
    href: 'mailto:leta.pham@sjsu.edu',
  },
] as const
