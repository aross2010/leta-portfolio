import React from 'react'
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiAdobeindesign,
  SiAutodeskrevit,
  SiSketchup,
} from 'react-icons/si'
import { enscapeSVG } from './icons'
import profilePic from '@/public/leta-pham.jpeg'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

import bojMoodBoard from '@/public/projects/BeautyofJoseon/boj-mood-board.png'

import beauty1 from '@/public/projects/BeautyofJoseon/Renders/1-BREAKRENDER.png'
import beauty2 from '@/public/projects/BeautyofJoseon/Renders/2-LOBBYRENDER.png'
import beauty3 from '@/public/projects/BeautyofJoseon/Renders/3-BREAKROOM.png'
import beauty4 from '@/public/projects/BeautyofJoseon/Renders/4-LOUNGE.png'
import beauty5 from '@/public/projects/BeautyofJoseon/Renders/5-WHITERENDER.png'
import beauty5b from '@/public/projects/BeautyofJoseon/Renders/6-SPECIALAREA.png'

import beauty6 from '@/public/projects/BeautyofJoseon/Technical Drawings/BOJAXON1.png'
import beauty7 from '@/public/projects/BeautyofJoseon/Technical Drawings/BOJAXON2.png'
import beauty8 from '@/public/projects/BeautyofJoseon/Technical Drawings/BOJBUBBLEDIAGRAM.png'
import beauty9 from '@/public/projects/BeautyofJoseon/Technical Drawings/BOJFLOORPLAN.png'
import beauty10 from '@/public/projects/BeautyofJoseon/Technical Drawings/BOJRCP.png'
import beauty11 from '@/public/projects/BeautyofJoseon/Technical Drawings/BOJSECTIOn.png'

import restroomMoodBoard from '@/public/projects/UniversalRestroom/bathroom-mood-board.png'

import restRender1 from '@/public/projects/UniversalRestroom/Renders/RENDER1.png'
import restRender2 from '@/public/projects/UniversalRestroom/Renders/RENDER2.png'

import restDraw1 from '@/public/projects/UniversalRestroom/Technical Drawings/1-AGRFLOORPLAN.png'
import restDraw2 from '@/public/projects/UniversalRestroom/Technical Drawings/2-AGRRCP.png'
import restDraw3 from '@/public/projects/UniversalRestroom/Technical Drawings/3-AGRAXON.png'
import restDraw4 from '@/public/projects/UniversalRestroom/Technical Drawings/4-AGRPERSPECTIVAL.png'
import restDraw5 from '@/public/projects/UniversalRestroom/Technical Drawings/5-AGRSECTION1.png'
import restDraw6 from '@/public/projects/UniversalRestroom/Technical Drawings/6-AGRSECTION2.png'
import path from 'path'

import biblioMoodBoard from '@/public/projects/Biblio/bibliomoodboard.png'

import biblioRender1 from '@/public/projects/Biblio/Renders/Exterior1.png'
import biblioRender2 from '@/public/projects/Biblio/Renders/Exterior2.png'
import biblioRender3 from '@/public/projects/Biblio/Renders/Exterior3.png'
import biblioRender4 from '@/public/projects/Biblio/Renders/ExteriorAgain.png'
import bibilioRender5 from '@/public/projects/Biblio/Renders/Interior1.png'
import bibilioRender6 from '@/public/projects/Biblio/Renders/2ndLevelView.png'
import bibilioRender7 from '@/public/projects/Biblio/Renders/ThirdLevelView.png'
import bibilioRender8 from '@/public/projects/Biblio/Renders/NightShot.png'

import biblioDraw1 from '@/public/projects/Biblio/Technical Drawings/FLOORPLAN1.png'
import biblioDraw2 from '@/public/projects/Biblio/Technical Drawings/FLOORPLAN2.png'
import biblioDraw3 from '@/public/projects/Biblio/Technical Drawings/ELEVATION1.png'
import biblioDraw4 from '@/public/projects/Biblio/Technical Drawings/ELEV2.png'
import biblioDraw5 from '@/public/projects/Biblio/Technical Drawings/ELEV3.png'
import biblioDraw6 from '@/public/projects/Biblio/Technical Drawings/SECTION1.png'
import biblioDraw7 from '@/public/projects/Biblio/Technical Drawings/SECTION2.png'
import biblioDraw8 from '@/public/projects/Biblio/Technical Drawings/SECTION3.png'
import biblioDraw9 from '@/public/projects/Biblio/Technical Drawings/AXONOMETRIC.png'
import biblioDraw10 from '@/public/projects/Biblio/Technical Drawings/DIAGRAMSECTION.png'

import biblioDev1 from '@/public/projects/Biblio/Development/INSPO.png'
import biblioDev2 from '@/public/projects/Biblio/Development/CONCEPT.png'
import biblioDev3 from '@/public/projects/Biblio/Development/PHYSICAL1.png'
import biblioDev4 from '@/public/projects/Biblio/Development/PHYSICAL2.png'

import workMoodBoard from '@/public/projects/WorkshopResidence/WRKSHOPRESIDENCEMOODBOARD.png'

import workRender1 from '@/public/projects/WorkshopResidence/Renders/Breakroom.png'
import workRender2 from '@/public/projects/WorkshopResidence/Renders/Gallery.png'
import workRender3 from '@/public/projects/WorkshopResidence/Renders/Nursery.png'

import workDraw1 from '@/public/projects/WorkshopResidence/Technical Drawings/GroundPlan.png'
import workDraw2 from '@/public/projects/WorkshopResidence/Technical Drawings/MezzPlan.png'
import workDraw3 from '@/public/projects/WorkshopResidence/Technical Drawings/RCP.png'
import workDraw4 from '@/public/projects/WorkshopResidence/Technical Drawings/Section.png'
import workDraw5 from '@/public/projects/WorkshopResidence/Technical Drawings/AXON.png'
import workDraw6 from '@/public/projects/WorkshopResidence/Technical Drawings/TumbleBubble.png'

import workDev1 from '@/public/projects/WorkshopResidence/Development/screenphysical_pic1.png'
import workDev2 from '@/public/projects/WorkshopResidence/Development/screenpic.png'
import workDev3 from '@/public/projects/WorkshopResidence/Development/Ortho1.png'
import workDev4 from '@/public/projects/WorkshopResidence/Development/ortho-02.png'
import workDev5 from '@/public/projects/WorkshopResidence/Development/ortho-03.png'
import workDev6 from '@/public/projects/WorkshopResidence/Development/ortho-04.png'
import workDev7 from '@/public/projects/WorkshopResidence/Development/ortho-05.png'

export const projectsData = [
  {
    path: 'boj',
    title: 'Beauty of Joseon HQ',
    date: 'Fall 2023',
    projectFunction: 'Workplace / Office',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    moodBoard: bojMoodBoard,
    thumbnailImage: beauty1,
    pdf: '/projects/BeautyofJoseon/Leta_Pham-Beauty_of_Joseon.pdf',
    backgroundColor: 'bg-[#cebfbf]',
    primaryColorText: 'text-[#abc39a]',
    secondaryColorText: 'text-[#cebfbf]',
    secondaryColorBorder: 'border-[#cebfbf]/25',

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
      'The design challenge was to create a space for the company Beauty of Joseon that reflects their brand identity. Together with traditional finishes mixed with modern finishes, this space reflects the brands mission to mix old practices and new ones.\n\nThroughout this process, I learned how to familiarize myself with building codes, implement brand identity into design choices, specify furniture, and use Revit. ',
    sections: [
      {
        title: 'Renders',
        description:
          'The space emphasizes a soft feeling, with the use of wood as a main color and a muted pink and green as accent colors. All of the colors chosen are derived from actual Beauty of Joseon products like their red bean water gel and glow serum. There are also plants placed throughout the space as accent pieces, to bring in a bright healthy green glow and connection to nature.',
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
          'This project allowed me to experiment with utilizing color in plans to highlight certain aspects of the project, like the furniture. The furniture specified is from a variety of brands, but all work together to form a cohesive space.',
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
    title: 'Universal Gender Restroom YE',
    date: 'Fall 2023',
    projectFunction: 'Restroom',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    moodBoard: restroomMoodBoard,
    thumbnailImage: restRender1,
    pdf: '/projects/UniversalRestroom/Leta_Pham-Restroom.pdf',
    primaryColorText: 'text-[#4d2987]',
    backgroundColor: 'bg-[#aeacaf]',
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
  {
    path: 'biblio',
    title: 'Biblio',
    date: 'Summer 2023',
    projectFunction: 'SJSU Pop-Up',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiSketchup),
      enscapeSVG,
    ],
    moodBoard: biblioMoodBoard,
    thumbnailImage: biblioRender1,
    pdf: '/projects/Biblio/Leta_Pham-Biblio.pdf',
    primaryColorText: 'text-[#822C12]',
    backgroundColor: 'bg-[#98846C]',
    secondaryColorText: 'text-[#98846C]',
    secondaryColorBorder: 'border-[#98846C]/50',
    headers: [
      {
        title: 'Client',
        value: 'San Jose State University',
      },
      {
        title: 'Location',
        value: 'San Jose, CA',
      },
      {
        title: 'Program',
        value: 'Pop-Up',
      },
    ],
    brief:
      'The challenge of this project was to create a 10’x10’x15’ pop-up on SJSU, utilizing extruding shapes given the dimensions.\n\n Designed to be a pop-up on the SJSU campus, Biblio is a place where you can get lost in a good book---literally! The concept for this space was to create a form that resembles a book and welcomes users to step in and explore the world inside. Furthermore, each layer invite users to interact with the space in a different way, to show how dynamic the forms are, simply by extruding shapes.',
    sections: [
      {
        title: 'Renders',
        description:
          ' Each layer resembles a book of various thickness. Each layer serves the function of rest and a sense of wonder. Users can lay down, look out into the campus, or pick out a book from this pop-up. The forms are inspired by the warm embrace of hug, with soft curves that welcome the user. Furthermore, each layer is slightly off-set and turned to create a sense of movement within the form. On the surface, the materials all reflect a soft color palette of neutrals and rich hues like burgundy and brown. The finishes reflect the feeling of safety and comfort to welcome the user in.',
        carouselData: [
          {
            image: biblioRender1,
            title: 'Exterior View 1',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: biblioRender2,
            title: 'Exterior View 2',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: biblioRender3,
            title: 'Exterior View 3',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: biblioRender4,
            title: 'Exterior View 4',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: bibilioRender5,
            title: 'Interior View',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: bibilioRender6,
            title: 'Second Level View',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: bibilioRender7,
            title: 'Third Level View',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: bibilioRender8,
            title: 'Evening View',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
        ],
      },
      {
        title: 'Technical Drawings',
        description:
          'The technical drawings for this project were created in SketchUp. The forms were created by extruding shapes and manipulating them to create the desired form. The materials were chosen to reflect the concept of a warm hug, with soft and warm colors and finishes.',
        carouselData: [
          {
            title: 'Floor Plan Level 1',
            image: biblioDraw1,
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            title: 'Floor Plan Level 3',
            image: biblioDraw2,
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            title: 'Elevation 1',
            image: biblioDraw3,
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            title: 'Elevation 2',
            image: biblioDraw4,
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            title: 'Elevation 3',
            image: biblioDraw5,
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            title: 'Section 1',
            image: biblioDraw6,
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            title: 'Section 2',
            image: biblioDraw7,
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            title: 'Section 3',
            image: biblioDraw8,
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            title: 'Axonometric View',
            image: biblioDraw9,
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            title: 'Diagram Section',
            image: biblioDraw10,
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
        ],
      },

      {
        title: 'Development',
        description:
          'The development of this project was inspired by the concept of a warm hug. The forms were created by extruding shapes and manipulating them to create the desired form. The materials were chosen to reflect the concept of a warm hug, with soft and warm colors and finishes.',
        carouselData: [
          {
            image: biblioDev1,
            title: 'Inspiration',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: biblioDev2,
            title: 'Concept',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: biblioDev3,
            title: 'Physical Model 1',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: biblioDev4,
            title: 'Physical Model 2',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
        ],
      },
    ],
  },
  {
    path: 'workshop',
    title: 'Workshop Residence',
    date: 'Fall 2023',
    projectFunction: 'Gallery / Residence',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    moodBoard: workMoodBoard,
    thumbnailImage: workRender1,
    pdf: '/projects/WorkshopResidence/Leta_Pham-Workshop_Residence.pdf',
    primaryColorText: 'text-[#8AAEBE]',
    backgroundColor: 'bg-[#D4B05F]',
    secondaryColorText: 'text-[#D4B05F]',
    secondaryColorBorder: 'border-[#D4B05F]/25',
    headers: [
      {
        title: 'Client',
        value: 'Joanna Poag',
      },
      {
        title: 'Location',
        value: 'San Jose, CA',
      },
      {
        title: 'Program',
        value: 'Mixed Use Art Workshop / Residence',
      },
      {
        title: 'Area',
        value: '~ 2,300 SF',
      },
    ],
    brief:
      'This workshop residence is based in San Jose, CA and is a hub for artists come together and create beautiful artwork. The design challenge was to create a multi-functional space that serves as a workshop and residence.\n\n This project was a semester long project, where we combined three different projects all into one space. The first project was creating a physical screen based on an artist’s work that diffuses light and can divide a space. The second project was a wall study of a pre-existing house. Both the screen and the wall intersection study are present in the workshop residence.',
    sections: [
      {
        title: 'Renders',
        description:
          ' The renders utilize a collage and illustrative style approach. They were all done through the use of Revit linework and Adobe Illustrator. I wanted to challenge myself by doing a different style of render than normal. This process was tedious but a great learning experience.\n\n The materials and artworks used in the space are inspired by Joanna’s Poags recent clay collage work, with desaturated, dusky hues. Other concepts implemented are the idea of nurturing and motherhood, through the soft material finishes and allowance of lights and plants to shine. Wood accents are also used on the furniture to help bring warmth into the space.\n\n Overall, the space is a warm and welcoming residence that allows the user to walk freely and easily go from public to private places.',
        carouselData: [
          {
            image: workRender1,
            title: 'Breakroom',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: workRender2,
            title: 'Gallery',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: workRender3,
            title: 'Nursery',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
        ],
      },
      {
        title: 'Technical Drawings',
        description:
          'Technical Drawings: A challenge in designing this space was that we were restricted in how many walls we were allowed to have, so how do we create privacy with open space?\n\n For the solution, space planning emphasizes privacy through distance. Privacy in the open space is achieved by having enclosed areas away from the facade, and having the screen model study placed in areas where it can block and diffuse light.',
        carouselData: [
          {
            image: workDraw1,
            title: 'Ground Floor Plan',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: workDraw2,
            title: 'Mezzanine Floor Plan',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: workDraw3,
            title: 'Reflected Ceiling Plan',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: workDraw4,
            title: 'Section View',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: workDraw5,
            title: 'Axonometric View',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: workDraw6,
            title: 'Bubble Diagrams',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
        ],
      },
      {
        title: 'Development',
        description:
          'The space planning is derived from a wall-x tumble study, based on the Casa Poli house that features open flow circulation due to lack of walls. From this study, I derived the concepts of open flow and privacy through distance (height and depth).',
        carouselData: [
          {
            image: workDev1,
            title: 'Final Screen',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: workDev2,
            title: 'Screen Development',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: workDev3,
            title: 'Orthographic View 1',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: workDev4,
            title: 'Orthographic View 2',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: workDev5,
            title: 'Section Cut',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: workDev6,
            title: 'Plan View Level 2',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
          {
            image: workDev7,
            title: 'PLan View Level 1',
            description:
              'This is a description of a carousel image. Leta needs to write these descriptions ASAP. Thanks!',
          },
        ],
      },
    ],
  },
]

export const aboutData = {
  name: 'Leta Pham',
  titleShort: 'Interior Design',
  titleLong: 'BFA Interior Design, SJSU',
  about:
    'I am a designer who loves to create spaces that are functional and beautiful. I am currently a 4th year Interior Design student at San Jose State University. I am also a part of the Interior Design Student Organization (IDSO) as the Vice President of Communications. I am also a part of the American Society of Interior Designers (ASID) as a student member. I am currently looking for an internship for Summer 2022.',
  links: [
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
  ],
  skills: [
    React.createElement(SiAdobeillustrator),
    React.createElement(SiAdobephotoshop),
    React.createElement(SiAdobeindesign),
    React.createElement(SiAdobelightroom),
    React.createElement(SiAutodeskrevit),
    React.createElement(SiSketchup),
    enscapeSVG,
  ],
  profileImage: profilePic,
  education: [
    {
      title: 'AA: Humanities',
      location: 'West Valley College',
      date: 'Jul. 2020 - Dec. 2022',
    },
    {
      title: 'BFA Interior Design',
      location: 'San Josè State University',
      date: 'Jan. 2023 - Present',
    },
  ],
  experience: [
    {
      title: 'Studio Monitor',
      location: 'San Jose State University',
      date: 'Aug. 2023 - Present',
    },
    {
      title: 'Sales Associate',
      location: 'Crate & Barrel',
      date: 'Mar. 2022 - Jul. 2022',
    },
  ],
  associations: [
    {
      title: 'ASID (American Society of Interior Designers)',
      role: 'Student Member',
      date: 'Jul. 2020 - Present',
    },
    {
      title: 'IDSO (Interior Design Student Organization)',
      role: 'Freshman Liaison',
      date: 'Jan. 2023 - Present',
    },
    {
      title: 'West Valley College Interior Design Club',
      role: 'Communications Chair',
      date: 'Jan. 2021 - Dec. 2022',
    },
  ],
}
