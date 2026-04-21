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
import profilePic from '@/public/headshot.png'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

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

import restRender1 from '@/public/projects/UniversalRestroom/Renders/RENDER1.png'
import restRender2 from '@/public/projects/UniversalRestroom/Renders/RENDER2.png'

import restDraw1 from '@/public/projects/UniversalRestroom/Technical Drawings/1-AGRFLOORPLAN.png'
import restDraw2 from '@/public/projects/UniversalRestroom/Technical Drawings/2-AGRRCP.png'
import restDraw3 from '@/public/projects/UniversalRestroom/Technical Drawings/3-AGRAXON.png'
import restDraw4 from '@/public/projects/UniversalRestroom/Technical Drawings/4-AGRPERSPECTIVAL.png'
import restDraw5 from '@/public/projects/UniversalRestroom/Technical Drawings/5-AGRSECTION1.png'
import restDraw6 from '@/public/projects/UniversalRestroom/Technical Drawings/6-AGRSECTION2.png'

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

import notion1 from '@/public/projects/Notion/1_Notion_Lounge.jpg'
import notion2 from '@/public/projects/Notion/2_Notion_Concept.jpg'
import notion3 from '@/public/projects/Notion/3_Notion_Look&Feel.jpg'
import notion4 from '@/public/projects/Notion/4_Notion_Floorplan.jpg'
import notion5 from '@/public/projects/Notion/5_Notion_UserJourney.jpg'
import notion6 from '@/public/projects/Notion/6_Notion_Reception.jpg'
import notion7 from '@/public/projects/Notion/7_Notion_SupportingSpaces.jpg'
import notion8 from '@/public/projects/Notion/8_Notion_Axon.jpg'

import honorAwards1 from '@/public/projects/Notion/HonorAwards/HonorAwards.jpg'
import honorAwards2 from '@/public/projects/Notion/HonorAwards/HonorAwards2.jpg'
import honorAwards3 from '@/public/projects/Notion/HonorAwards/HonorAawards3.jpg'

import crossroads1 from '@/public/projects/Crossroads/1_Crossroads_Reception.jpg'
import crossroads2 from '@/public/projects/Crossroads/2_Crossroads_Concept.jpg'
import crossroads3 from '@/public/projects/Crossroads/3_Crossroads_Axons.jpg'
import crossroads4 from '@/public/projects/Crossroads/4_Crossroads_Level1FP.jpg'
import crossroads5 from '@/public/projects/Crossroads/5_Crossroads_Level2FP.jpg'
import crossroads6 from '@/public/projects/Crossroads/6_Crossroads_Level3FP.jpg'
import crossroads7 from '@/public/projects/Crossroads/7_Crossroads_Stairs.jpg'
import crossroads8 from '@/public/projects/Crossroads/8_Crossroads_Gallery1.jpg'
import crossroads9 from '@/public/projects/Crossroads/9_Crossroads_Gallery2.jpg'
import crossroads10 from '@/public/projects/Crossroads/10_Crossroads_MultiSpaceLounge.jpg'
import crossroads11 from '@/public/projects/Crossroads/11_Crossroads_FoodSpaces.jpg'
import crossroads12 from '@/public/projects/Crossroads/12_Crossroads_Supporting.jpg'
import flushing1 from '@/public/projects/Crossroads/Day/1_Flushing.jpg'
import flushing2 from '@/public/projects/Crossroads/Day/2_Flushing.jpg'
import flushing3 from '@/public/projects/Crossroads/Day/3_FlushingTownHall.jpeg'
import flushing4 from '@/public/projects/Crossroads/Day/4_LewisLatimerHouseandMe.jpeg'
import flushing5 from '@/public/projects/Crossroads/Day/5_LewisLatimer.jpg'
import flushing6 from '@/public/projects/Crossroads/Day/6_FLushing4.jpg'
import flushing7 from '@/public/projects/Crossroads/Day/7_Tina1.jpg'
import flushing8 from '@/public/projects/Crossroads/Day/8_Flushing3.jpg'
import flushing9 from '@/public/projects/Crossroads/Day/9_Flushing.jpg'
import flushing10 from '@/public/projects/Crossroads/Day/10_FlushingOldtime.jpg'

import paperAndPen1 from '@/public/projects/PaperAndPen/1_PaperandPen.jpg'
import paperAndPen2 from '@/public/projects/PaperAndPen/2_PaperandPen_Concept.jpg'
import paperAndPen3 from '@/public/projects/PaperAndPen/3_PaperandPen_BubbleDiagram.jpg'
import paperAndPen4 from '@/public/projects/PaperAndPen/4_PaperandPen_Floorplan.jpg'
import paperAndPen5 from '@/public/projects/PaperAndPen/5_PaperandPen_RCP.jpg'
import paperAndPen6 from '@/public/projects/PaperAndPen/6_PaperandPen_Millwork.jpg'
import paperAndPen7 from '@/public/projects/PaperAndPen/7_PaperandPen_Materials.jpg'

import goldenLane1 from '@/public/projects/GoldenLane/1_GoldenLane_Cover.jpg'
import goldenLane2 from '@/public/projects/GoldenLane/2_GoldenLane_LookandFeel.jpg'
import goldenLane3 from '@/public/projects/GoldenLane/3_GoldenLane_Materials.jpg'
import goldenLane4 from '@/public/projects/GoldenLane/4_GoldenLane_Context.jpg'
import goldenLane5 from '@/public/projects/GoldenLane/5_GoldenLane_Elevation.jpg'
import goldenLane6 from '@/public/projects/GoldenLane/6_GoldenLane_Basement.jpg'
import goldenLane7 from '@/public/projects/GoldenLane/7_GoldenLane_L2.jpg'
import goldenLane8 from '@/public/projects/GoldenLane/8_GoldenLane_L3.jpg'
import goldenLane9 from '@/public/projects/GoldenLane/9_GoldenLane_SectPerp.jpg'
import goldenLane10 from '@/public/projects/GoldenLane/10_GoldenLane_Customs.jpg'
import goldenLane11 from '@/public/projects/GoldenLane/11_GoldenLane_Showroom.jpg'

import rootAndRadiance1 from '@/public/projects/RootAndRadiance/1_BEHR_Lobby.png'
import rootAndRadiance2 from '@/public/projects/RootAndRadiance/2_BEHR_Floorplan.png'
import rootAndRadiance3 from '@/public/projects/RootAndRadiance/3_MaterialBoard.jpg'
import rootAndRadiance4 from '@/public/projects/RootAndRadiance/4_BEHR_Axon.png'
import rootAndRadiance5 from '@/public/projects/RootAndRadiance/5_BEHR_Breakroom.png'
import rootAndRadiance6 from '@/public/projects/RootAndRadiance/6_BEHR_QuietArea.png'

import furniture01 from '@/public/projects/Furniture/01_Furniture.jpg'
import furniture1 from '@/public/projects/Furniture/1_TimotheeStand1.jpg'
import furniture2 from '@/public/projects/Furniture/2_TimotheeStand2.jpg'
import furniture3 from '@/public/projects/Furniture/3_TimotheeStand3.jpg'
import furniture4 from '@/public/projects/Furniture/4_LeCesca.jpg'
import furniture5 from '@/public/projects/Furniture/5_Timothee_Concrete.jpg'
import furniture6 from '@/public/projects/Furniture/6_Interlock_1.jpg'
import furniture7 from '@/public/projects/Furniture/6_Interlock_2.jpg'

import fiveV1 from '@/public/projects/5V/1_5V_Cover.jpg'
import fiveV2 from '@/public/projects/5V/2_5V_Process.jpg'
import fiveV3 from '@/public/projects/5V/3_5V_Photos.jpg'
import fiveV4 from '@/public/projects/5V/4_5V_Photos.jpg'

import nextChapter1 from '@/public/projects/NextChapter/1_NextChapter_Concept.jpg'
import nextChapter2 from '@/public/projects/NextChapter/2_NextChapter.jpg'
import nextChapter3 from '@/public/projects/NextChapter/3_NextChapter.jpg'
import nextChapter4 from '@/public/projects/NextChapter/4_NextChapter.jpg'
import nextChapter5 from '@/public/projects/NextChapter/5_NextChapter.jpg'
import nextChapter6 from '@/public/projects/NextChapter/6_NextChapter.jpg'
import nextChapter7 from '@/public/projects/NextChapter/7_NextChapter.jpg'

import honorsAward2025 from '@/public/HonorAwards_2025.png'
import honorsAward2026 from '@/public/HonorAwards_2026.png'

import gensler1 from '@/public/about/gensler/1_ILoveGensler.jpg'
import gensler2 from '@/public/about/gensler/2_Gensler_Sketches.jpg'
import gensler3 from '@/public/about/gensler/3_InternPresentation.jpg'
import gensler4 from '@/public/about/gensler/4_Working.jpg'
import gensler5 from '@/public/about/gensler/5_BonusDay.jpg'
import gensler6 from '@/public/about/gensler/6_GenslerGroupPic.jpg'
import gensler7 from '@/public/about/gensler/6_Halloween_G1.jpg'
import gensler8 from '@/public/about/gensler/7_ArtGensler.jpg'
import gensler9 from '@/public/about/gensler/8_Palette1.jpg'
import gensler10 from '@/public/about/gensler/9_OysterDay.jpg'
import gensler11 from '@/public/about/gensler/10_FunHats.jpg'
import gensler12 from '@/public/about/gensler/11_GenslerOakland.jpg'
import gensler13 from '@/public/about/gensler/12_HolidayParty2.jpg'
import gensler14 from '@/public/about/gensler/13_GenslerDC.jpg'
import gensler15 from '@/public/about/gensler/14_Materials.jpg'
import gensler18 from '@/public/about/gensler/17_Palette2.jpg'

import iida1 from '@/public/about/iida/1_SummerRetreat.jpg'
import iida2 from '@/public/about/iida/2_DesignExpo.jpg'
import iida3 from '@/public/about/iida/3_SummerRFetreat2.jpg'
import iida4 from '@/public/about/iida/4_HonorAawards3.jpg'
import iida5 from '@/public/about/iida/5_CulinaryChallenge.jpg'
import iidaGoodies from '@/public/about/iida/Goodies.jpg'
import iidaDesignExpo2024 from '@/public/about/iida/DesignExpo2024.jpg'

import travel1 from '@/public/about/travel/1_Singapore.jpg'
import travel2 from '@/public/about/travel/2_MHE.jpeg'
import travel02 from '@/public/about/travel/2_London.jpg'
import travel3 from '@/public/about/travel/3_Taiwan_Writing.jpg'
import travel4 from '@/public/about/travel/4_BrooklynBridge.jpg'
import travel5 from '@/public/about/travel/5_DC.jpg'
import travel6 from '@/public/about/travel/6_Taiwan2.jpg'
import travel7 from '@/public/about/travel/7_NYC_SATC.jpg'
import travel8 from '@/public/about/travel/8_BRAT.jpg'
import travel9 from '@/public/about/travel/9_Liberty2.jpg'
import travel10 from '@/public/about/travel/10_ShawnMendes.jpg'
import travel11 from '@/public/about/travel/11_Taiwan.jpg'
import travel12 from '@/public/about/travel/12_Taiwan.jpeg'
import travelBiking from '@/public/about/travel/Biking.jpg'
import travelLuberty from '@/public/about/travel/Luberty.jpeg'
import travelVancouver from '@/public/about/travel/Vancouvaahh.jpg'
import travel13 from '@/public/about/travel/13_GenslerHouston.jpg'

import crossroadsHonors1 from '@/public/projects/Crossroads/HonorAwards/1_Honors.jpg'
import crossroadsHonors2 from '@/public/projects/Crossroads/HonorAwards/2_Honors.jpg'
import crossroadsHonors3 from '@/public/projects/Crossroads/HonorAwards/3_Honors.jpg'
import crossroadsHonors4 from '@/public/projects/Crossroads/HonorAwards/4_Honors.jpg'
import crossroadsHonors5 from '@/public/projects/Crossroads/HonorAwards/5_Honors.jpg'
import crossroadsHonors6 from '@/public/projects/Crossroads/HonorAwards/6_Honors.jpg'

import { ExperiencesData, ProjectData } from './types'
import Link from 'next/link'

export const projectsData = [
  {
    path: 'notion-office',
    title: 'return to office: notion',
    date: 'fall 2024',
    projectFunction: 'workplace / office',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    headers: [
      {
        title: 'Program',
        value: 'Workplace / Office',
      },
      {
        title: 'Location',
        value: 'Sunnyvale, CA',
      },
      {
        title: 'Area',
        value: '~ 30,000 SF',
      },
      {
        title: 'Date',
        value: 'Fall 2024',
      },
    ],
    color: '#1e5385',
    thumbnailImage: notion1,
    award: {
      image: honorsAward2025,
    },
    brief:
      'Status Change: "Out of Office" --> "Return to Office"\n\nThe project consists of a tenant improvement in a commercial setting. The scope is roughly 30,000 square feet and entails the re-design of an office space for Notion. Notion is a digital cloud-based workspace that allows users to organize, collaborate, note-take, and more. The designer was tasked with designing an office that inspires workers to come back into office after growing accustomed to remote work.\n\nThe design solution involves ties to Notion\'s branding and utilizing finishes that remind the users of the familiarity and comfort of home, while offering different design solutions that suit all kinds of users and their various needs for work.',
    slideshow: [
      { image: notion1 },
      { image: notion2 },
      { image: notion3 },
      { image: notion4 },
      { image: notion5 },
      { image: notion6 },
      { image: notion7 },
      { image: notion8 },
    ],
    additionalSections: [
      {
        title: 'iida norcal honor awards 2025',
        brief:
          'On March 20, 2025, I had the honor of accepting First Place in the Student Category at the 2025 IIDA Honor Awards.\n\nReceiving an award for a project that I was truly passionate and proud of was such a fulfilling experience, and it taught me valuable lessons on storytelling and how to rework school projects to make them stronger.\n\nIt was also thrilling to be surrounded by my SJSU peers and future industry friends, and it changed my life forever. I am so grateful to IIDA Northern California for supporting students like me, and I will always remember that night!',
        slideshow: [
          { youtubeUrl: 'https://youtu.be/9TpVEoDWZCQ' },
          { image: honorAwards1 },
          { image: honorAwards2 },
          { image: honorAwards3 },
        ],
      },
    ],
  },
  {
    path: 'crossroads-community-center',
    title: 'crossroads community center',
    date: 'spring 2025',
    projectFunction: 'gather space',
    award: {
      image: honorsAward2026,
    },
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    headers: [
      {
        title: 'Program',
        value: 'Community Center + Gallery + Creative Hub',
      },
      {
        title: 'Location',
        value: 'Flushing, Queens, NY',
      },
      {
        title: 'Area',
        value: '32,000 SF',
      },
      {
        title: 'Date',
        value: 'Spring 2025',
      },
    ],
    color: '#85221e',
    thumbnailImage: crossroads1,
    brief:
      "Concrete jungle where dreams are made of!\n\nThis project consists of a tenant improvement in a gallery + community setting. The scope of the project is over 30,000 square feet and is located in Flushing, Queens, a neighborhood in New York City.\n\nThe designer was tasked with designing a community center that inspires people to come together and enrich the urban environment. The designer was also tasked with finding a local artist and then creating the branding and spatial planning for the artist gallery exhibit.\n\nThe concept and design approach of this project involved a mixture of research of the location and the artist's philosophy. Many of the design choices were inspired by the culture and people of Flushing, and how the past and present blend into the modern fabric of the landscape.",
    slideshow: [
      { image: crossroads1 },
      { image: crossroads2 },
      { image: crossroads3 },
      { image: crossroads4 },
      { image: crossroads5 },
      { image: crossroads6 },
      { image: crossroads7 },
      { image: crossroads8 },
      { image: crossroads9 },
      { image: crossroads10 },
      { image: crossroads11 },
      { image: crossroads12 },
    ],
    additionalSections: [
      {
        title: 'a day in flushing',
        brief:
          "In August 2025, after months of emailing my artist, Tina Seligman, we met up in Flushing, New York where she showed me all of the historical landmarks. We saw Lewis Latimer's house, the Unisphere, Citi Field Stadium, the iconic weeping willow, and much more.\n\nGetting to know Tina not only as an artist, but as a friend, has been the greatest experience of my academic journey and collaborating with her on this project was so inspiring. Tina taught me insider knowledge about Flushing which helped drive some of the key design principles of my project.\n\nWorking with her on the exhibit portion of the program was so fulfilling, because it felt like I was curating a real museum, which has always been a dream of mine. All in all, this experience taught me that school projects can lead to unexpected friendships that last a lifetime.",
        slideshow: [
          { image: flushing1 },
          { image: flushing2 },
          { image: flushing3 },
          { image: flushing4 },
          { image: flushing5 },
          { image: flushing6 },
          { image: flushing7 },
          { image: flushing8 },
          { image: flushing9 },
          { image: flushing10 },
        ],
      },
      {
        title: 'iida norcal honor awards 2026',
        brief:
          'On March 12, 2025, I had the honor of accepting Second Place in the Student Category at the 2026 IIDA Honor Awards.\n\nBeing able to share my project on stage and speak to an audience of people I deeply respect one last time as a student meant more to me than any monetary reward. Being embraced by the industry and supported by my classmates was incredibly rewarding and fulfilling. It is an experience I will carry with me forever. No matter where my career takes me, I will always remember that moment—standing there, feeling as though my entire future was just beginning to unfold before me.',
        slideshow: [{ youtubeUrl: 'https://youtu.be/7oN6XY03NHc' }, {
          image: crossroadsHonors1
        },
      {
          image: crossroadsHonors2
        },
      {
          image: crossroadsHonors3
        },
      {
          image: crossroadsHonors4
        },
      {
          image: crossroadsHonors5
        },
      {
          image: crossroadsHonors6
        }],
      },
    ],
  },
  {
    path: 'golden-lane',
    title: 'golden lane',
    date: 'fall 2025',
    projectFunction: 'senior capstone thesis',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    headers: [
      {
        title: 'Program',
        value: 'Movie Lounge + Showroom',
      },
      {
        title: 'Location',
        value: 'Clerkenwell, London, England',
      },
      {
        title: 'Area',
        value: '5,000 SF',
      },
      {
        title: 'Date',
        value: 'Fall 2025',
      },
      {
        title: 'Class',
        value: 'Senior Capstone Thesis | E.Pries',
      },
    ],
    color: '#660b0b',
    brief:
      'Grab a cuppa and sit back!\n\nThis project consists of a movie theater lounge and tile showroom. The scope of the project is roughly 5,000 square feet and is located in Clerkenwell, a neighborhood in London.\n\nThe designer was tasked with utilizing the shell of the building, and giving new purpose to the space. The program chosen is a casual movie lounge, where people can watch movies, chat, read, and learn about film in an interactive way. Rather than watch movies in silence and then leave like a traditional theater, people are encouraged to chat and talk about the films in a civil way that creates unity and connection. The spatial planning plays with clockwork and curves inspired by the industrial roots of Clerkenwell.\n\nThe concept and design approach of this project involved a mixture of research of the local culture and the impact of film on community. The purpose was to give the busy workers, elderly, adults, and youth a space to relax and learn about film in a new way.',
    thumbnailImage: goldenLane1,
    slideshow: [
      { image: goldenLane1 },
      { image: goldenLane2 },
      { image: goldenLane3 },
      { image: goldenLane4 },
      { image: goldenLane5 },
      { image: goldenLane6 },
      { image: goldenLane7 },
      { image: goldenLane8 },
      { image: goldenLane9 },
      { image: goldenLane10 },
      { image: goldenLane11 },
    ],
  },
  {
    path: 'paper-and-pen',
    title: 'paper & pen',
    date: 'fall 2024',
    projectFunction: 'retail store',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    headers: [
      {
        title: 'Program',
        value: 'Retail Store',
      },
      {
        title: 'Location',
        value: 'Sunnyvale, CA',
      },
      {
        title: 'Area',
        value: '~ 1,200 SF',
      },
      {
        title: 'Date',
        value: 'Fall 2024',
      },
    ],
    color: '#c9a5af',
    thumbnailImage: paperAndPen1,
    slideshow: [
      { image: paperAndPen1 },
      { image: paperAndPen2 },
      { image: paperAndPen3 },
      { image: paperAndPen4 },
      { image: paperAndPen5 },
      { image: paperAndPen6 },
      { image: paperAndPen7 },
    ],
    brief:
      "Shop 'til you drop!\n\nThe project consists of a tenant improvement in a retail setting. The designer was tasked with creating the identity and brand of a retail store to complement the tech company for the RTO project. Paper & Pen is a sustainable stationery store whose mission is to make creativity accessible to everyone.\n\nPaper & Pen incorporates softness into their branding through a neutral color palette and slightly curved forms.\n\nThis project is an extension of the Notion RTO. Paper & Pen is a complement to Notion because it provides users the experience of tangible note-taking, in contrast to Notion's digital approach.",
  },
  {
    path: 'root-and-radiance',
    title: 'root & radiance center',
    date: 'fall 2025',
    projectFunction: 'behr student design competition',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    headers: [
      {
        title: 'Program',
        value: 'Youth Development Hub',
      },
      {
        title: 'Location',
        value: 'Campbell, CA',
      },

      {
        title: 'Area',
        value: '8,400 SF',
      },
      {
        title: 'Date',
        value: 'Fall 2025',
      },
    ],
    color: '#5a6e69',
    thumbnailImage: rootAndRadiance1,
    slideshow: [
      { image: rootAndRadiance1 },
      { image: rootAndRadiance2 },
      { image: rootAndRadiance3 },
      { image: rootAndRadiance4 },
      { image: rootAndRadiance5 },
      { image: rootAndRadiance6 },
    ],
    brief: (
      <>
        My project, Root & Radiance Center, is a youth development hub that is
        designed to support young individuals transition into adulthood. It aims
        to bridge the gap between youth and adulthood by utilizing BEHR’s Color
        Trends of the Year that balance playfulness and sophistication. This
        project was chosen as the First Prize Winner in the{' '}
        <Link
          className="font-bold underline"
          href={
            'https://www.behr.com/pro/colors/2025-student-design-competition'
          }
          target="_blank"
        >
          2025 BEHR Student Design Competition
        </Link>
        .<br />
        <br />
        Throughout the space, shades of calming jade, warm terracotta, and soft
        neutrals create an atmosphere that feels grounding and vibrant to mirror
        the duality of youth. Spatial programming was designed with color in
        mind, with more quiet areas colored in Hidden Gem N430-6A and Watery
        HDC-CT-26, while areas designed for chatter and interaction, like the
        break room, energize the user with Beehive M270-5. Other neutrals are
        sprinkled throughout the space to ground the palette.
        <br />
        <br />
        Through color, form, and atmosphere, the Root & Radiance Center becomes
        a refuge for growth, confidence, and self discovery.
      </>
    ),
  },
  {
    path: 'furniture',
    title: 'furniture',
    date: 'spring 2025',
    projectFunction: 'fabrication',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
    ],
    headers: [
      {
        title: 'Program',
        value: 'Furniture',
      },
      {
        title: 'Date',
        value: 'Spring 2025',
      },
      {
        title: 'Class',
        value: 'Furniture & Fabrication | M. Elliot',
      },
    ],
    color: '#d9963f',
    thumbnailImage: furniture01,
    slideshow: [
      { image: furniture01 },
      { image: furniture1 },
      { image: furniture2 },
      { image: furniture3 },
      { image: furniture4 },
      { image: furniture5 },
      { image: furniture6 },
      { image: furniture7 },
    ],
    brief:
      'During this furniture class, I learned about how to build basic joints and how to conceptualize and actualize methods of fabrication.\n\nI played with different forms such as more rectilinear shapes, and also played around with curvilinear furniture and combined it with my love for fish.',
  },
  {
    path: 'fashion',
    title: 'structured minimalism',
    date: 'fall 2024',
    projectFunction: 'haworth 5v competition',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
    ],
    headers: [
      {
        title: 'Project',
        value: 'Fashion Wearable',
      },
      {
        title: 'Location',
        value: 'Mongolia',
      },
      {
        title: 'Group Members',
        value:
          'Anna Kerr, Elvira Ng, Wesley Liang, Kevin Trinh, Joanne Soo, Yu-Hsuan Huang',
      },
      {
        title: 'Date',
        value: 'Fall 2024',
      },
    ],
    color: '#919191',
    thumbnailImage: fiveV1,
    slideshow: [
      { image: fiveV1 },
      { image: fiveV2 },
      { image: fiveV3 },
      { image: fiveV4 },
    ],
    brief:
      "Strike a pose, there's nothing to it!\n\nThe project consists of creating a wearable based on an existing building. Our group, Anmei, focused on the Hulunbuir Hailar Airport in Mongolia. After studying and researching the building, we created a wearable utilizing vellum paper and the technique of origami.\n\nI contributed to concept development, graphic development, hand-modeling, and modeling the wearable. In April 2025, I also participated and walked in the Haworth 5V Fashion show. Modeling the wearable was a step outside of my comfort zone, but it helped in growing my confidence.",
  },
  {
    path: 'next-chapter',
    title: 'next chapter network',
    date: 'fall 2024',
    projectFunction: 'building codes',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    headers: [
      {
        title: 'Program',
        value: 'Multi-Use Space',
      },
      {
        title: 'Location',
        value: 'San Jose, CA',
      },
      {
        title: 'Date',
        value: 'Fall 2024',
      },
      {
        title: 'Class',
        value: 'Building Codes & Construction | M. Medved',
      },
    ],
    color: '#5399b8',
    thumbnailImage: nextChapter1,
    slideshow: [
      { image: nextChapter1 },
      { image: nextChapter2 },
      { image: nextChapter3 },
      { image: nextChapter4 },
      { image: nextChapter5 },
      { image: nextChapter6 },
      { image: nextChapter7 },
    ],
    brief:
      'This project consists of a multi-functional space for previously incarcerated people to help them gain life skills that allow them to transition back into society. A place for them to express creativity, heal from trauma, gain professional experience and employment, and feel hope for a chance at normal life.\n\nThe designer was tasked with creating a series of technical specification sheets on Revit for the demolition and build of a multi-use space.\n\nThis project was an exercise of understanding ADA and building codes, and how to graphically communicate with contractors.',
  },
  {
    path: 'beauty-of-joseon-hq',
    title: 'beauty of joseon hq',
    date: 'fall 2023',
    projectFunction: 'workplace / office',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    thumbnailImage: beauty1,
    pdf: '/projects/BeautyofJoseon/Leta_Pham-Beauty_of_Joseon.pdf',
    color: '#abc39a',
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
      {
        title: 'Class',
        value: 'DSIT 33 | A. Yeung',
      },
    ],
    slideshow: [
      { image: beauty1 },
      { image: beauty2 },
      { image: beauty3 },
      { image: beauty4 },
      { image: beauty5 },
      { image: beauty5b },
      { image: beauty6 },
      { image: beauty7 },
      { image: beauty8 },
      { image: beauty9 },
      { image: beauty10 },
      { image: beauty11 },
    ],
    brief:
      'The design challenge was to create a space for the company Beauty of Joseon that reflects their brand identity. Together with traditional finishes mixed with modern finishes, this space reflects the brands mission to mix old practices and new ones.\n\nThroughout this process, I learned how to familiarize myself with building codes, implement brand identity into design choices, specify furniture, and use Revit. ',
  },
  {
    path: 'universal-gender-restroom',
    title: 'starship (universal gender restroom)',
    date: 'fall 2023',
    projectFunction: 'restroom',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    thumbnailImage: restRender1,
    pdf: '/projects/UniversalRestroom/Leta_Pham-Restroom.pdf',
    color: '#9385a1',
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
      {
        title: 'Class',
        value: 'DSIT 33 | A. Yeung',
      },
    ],
    slideshow: [
      { image: restRender1 },
      { image: restRender2 },
      { image: restDraw1 },
      { image: restDraw2 },
      { image: restDraw3 },
      { image: restDraw4 },
      { image: restDraw5 },
      { image: restDraw6 },
    ],
    brief:
      "To infinity and beyond! -- with ADA clearances.\n\nThe project scope and challenge was to create an all gender restroom with ADA compliance.\n\nThe solution was designing a bathroom inspired by futuristic spaceships. The presence of glossy epoxy, chrome, and stainless steel allow for easy maintenance and resemble the smooth clean surfaces that spaceships have.\n\nWhen designing the restroom, the word 'space' and 'universal' was used literally because of the implementation of ADA clearances and in form development and FF&E. In the solution, consideration for families was also considered. This restroom implements a family stall and a children's sink.",
  },
  {
    path: 'biblio',
    title: 'biblio',
    date: 'summer 2023',
    projectFunction: 'sjsu pop-up',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    thumbnailImage: biblioRender1,
    pdf: '/projects/Biblio/Leta_Pham-Biblio.pdf',
    color: '#822C12',
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
      {
        title: 'Class',
        value: 'DSIT 83 | S. Wong',
      },
    ],
    slideshow: [
      { image: biblioRender1 },
      { image: biblioRender2 },
      { image: biblioRender3 },
      { image: biblioRender4 },
      { image: bibilioRender5 },
      { image: bibilioRender6 },
      { image: bibilioRender7 },
      { image: bibilioRender8 },
      { image: biblioDraw1 },
      { image: biblioDraw2 },
      { image: biblioDraw3 },
      { image: biblioDraw4 },
      { image: biblioDraw5 },
      { image: biblioDraw6 },
      { image: biblioDraw7 },
      { image: biblioDraw8 },
      { image: biblioDraw9 },
      { image: biblioDraw10 },
      { image: biblioDev1 },
      { image: biblioDev2 },
      { image: biblioDev3 },
      { image: biblioDev4 },
    ],
    brief:
      'The challenge of this project was to create a 10’x10’x15’ pop-up on SJSU, utilizing extruding shapes given the dimensions.\n\n Designed to be a pop-up on the SJSU campus, Biblio is a place where you can get lost in a good book---literally! The concept for this space was to create a form that resembles a book and welcomes users to step in and explore the world inside. Furthermore, each layer invite users to interact with the space in a different way, to show how dynamic the forms are, simply by extruding shapes.',
  },
  {
    path: 'workshop-residence',
    title: 'workshop residence',
    date: 'fall 2023',
    projectFunction: 'gallery / residence',
    icons: [
      React.createElement(SiAdobeillustrator),
      React.createElement(SiAdobephotoshop),
      React.createElement(SiAdobeindesign),
      React.createElement(SiAdobelightroom),
      React.createElement(SiAutodeskrevit),
      enscapeSVG,
    ],
    thumbnailImage: workRender1,
    pdf: '/projects/WorkshopResidence/Leta_Pham-Workshop_Residence.pdf',
    color: '#8AAEBE',
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
      {
        title: 'Class',
        value: 'DSIT 34 | E. Pries',
      },
    ],
    slideshow: [
      { image: workRender1 },
      { image: workRender2 },
      { image: workRender3 },
      { image: workDraw1 },
      { image: workDraw2 },
      { image: workDraw3 },
      { image: workDraw4 },
      { image: workDraw5 },
      { image: workDraw6 },
      { image: workDev1 },
      { image: workDev2 },
      { image: workDev3 },
      { image: workDev4 },
      { image: workDev5 },
      { image: workDev6 },
      { image: workDev7 },
    ],
    brief:
      'This workshop residence is based in San Jose, CA and is a hub for artists come together and create beautiful artwork. The design challenge was to create a multi-functional space that serves as a workshop and residence.\n\n This project was a semester long project, where we combined three different projects all into one space. The first project was creating a physical screen based on an artist’s work that diffuses light and can divide a space. The second project was a wall study of a pre-existing house. Both the screen and the wall intersection study are present in the workshop residence.',
  },
] as ProjectData[]
// add floating bouncing view more button for awards & lady sections

export const aboutData = {
  name: 'leta pham',
  titleShort: 'interior design',
  titleLong: 'bfa interior design, sjsu',
  links: [
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/withloveleta/',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/letapham/',
    },
    {
      icon: FaYoutube,
      href: 'https://www.youtube.com/@letapham',
    },
    {
      icon: IoMdMail,
      href: 'mailto:letavpham@gmail.com',
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
      title: 'aa: humanities',
      location: 'west valley college',
      date: 'jul. 2020 - dec. 2022',
    },
    {
      title: 'bfa interior design',
      location: 'san josè state university',
      date: 'jan. 2023 - may 2026',
    },
  ],
  experience: [
    {
      title: 'director of student affairs',
      location: 'iida norcal chapter',
      date: 'jun. 2025 - jun. 2026',
    },
    {
      title: 'interior design intern',
      location: 'gensler',
      date: 'jun. 2025 - jun. 2026',
    },
  ],
  associations: [
    {
      title: 'west valley college interior design club',
      role: 'communications chair',
      date: 'jan. 2021 - dec. 2022',
    },
    {
      title: 'iida norcal chapter',
      role: 'student member',
      date: 'jan. 2023 - dec. 2026',
    },
    {
      title: 'sjsu interior design student organization',
      role: 'public relations chair',
      date: 'jun. 2025 - jun. 2026',
    },
  ],
  awards: [
    {
      date: 'mar. 2025',
      title: 'first place student winner',
      competition: 'iida norcal honor awards',
    },
    {
      date: 'dec. 2025',
      title: 'first prize student winner',
      competition: 'behr student design competition',
    },
    {
      date: 'mar. 2026',
      title: 'second place student winner',
      competition: 'iida norcal honor awards',
    },
  ],
}

export const experiencesData = [
  {
    path: 'internship',
    title: 'gensler internship',
    experienceFunction: 'work experience',
    date: 'jun. 2025 - present',
    color: '#EE3224',
    brief:
      "In June 2025, I started my internship at Gensler's San Jose office. Being that this was my first internship at an A&D firm, it opened my eyes to what my future would look like.\n\nDuring my internship, I have gained experience in designing test fits, creating renders in Photoshop, modeling in Revit, creating mood boards and material palettes, approving samples, and also coordinating and ordering samples from local sales representatives. Additionally, I not only worked on local projects, but worked on a larger scale with other Gensler offices nationwide and even internationally.\n\nAt Gensler, I have also become immersed in the work life culture by attending several group outings, happy hours, and annual work parties.",
    slideshow: [
      { image: gensler1 },
      { image: gensler2 },
      { image: gensler3 },
      { image: gensler4 },
      { image: gensler5 },
      { image: gensler6 },
      { image: gensler7 },
      { image: gensler8 },
      { image: gensler9 },
      { image: gensler10 },
      { image: gensler11 },
      { image: gensler12 },
      { image: gensler13 },
      { image: gensler14 },
      { image: gensler15 },
      { image: gensler18 },
    ],
    thumbnailImage: gensler1,
  },
  {
    path: 'iida-norcal',
    title: 'iida norcal',
    experienceFunction: 'volunteer',
    date: 'jun. 2025 - present',
    color: '#6bbdc2',
    brief:
      "Throughout my time at SJSU, I have been involved in my local chapter of IIDA as a Student IIDA member. I have attended countless design expos, portfolio reviews, and advocacy events to strengthen my professional skills and increase my knowledge on the profession of interior design.\n\nAfter winning First Place in the IIDA NorCal Honor Awards in March, I saw firsthand how being involved in IIDA can lead to greater opportunities and kickstart a career.\n\nSo in June of 2025, I joined IIDA Northern California's board as the Director of Student Affairs, where I serve as the Student Voice for the chapter. I have helped plan events, spoke on a panel, and organized volunteers for our annual Honor Awards show. This opportunity has given me the chance to meet some of the most inspiring leaders in our industry, and inspired me to represent my community in any way that I can.",
    slideshow: [
      { image: iida1 },
      { image: iida2 },
      { image: iida3 },
      { image: honorAwards3 },
      { image: iida5 },
      { image: iidaGoodies },
      { image: iidaDesignExpo2024 },
    ],
    thumbnailImage: iida1,
  },
  {
    path: 'travel',
    title: 'travel',
    experienceFunction: 'life experience',
    date: '2002 - present',
    color: '#cc7881',
    brief: (
      <>
        As a curious soul, I have always been drawn to new places that have rich
        history and culture. Throughout my life, I have been lucky enough to
        travel to many different places such as New York, England, Taiwan, and
        more!
        <br />
        <br />I document my passion for travel on my{' '}
        <Link
          className="font-bold underline"
          href={'https://www.youtube.com/@letapham'}
          target="_blank"
        >
          YouTube
        </Link>{' '}
        channel and even some short reels on my{' '}
        <Link
          className="font-bold underline"
          href={'https://www.instagram.com/withloveleta/'}
          target="_blank"
        >
          Instagram
        </Link>
        .<br />
        <br />
        My love for travel has allowed me to absorb the design of different
        cultures, and impacted the way I approach my design thinking. It also
        made me realize that a big driver for my design approach is my interest
        in research of local communities. Every time I visit a city, I fall in
        love with the way the local people shape the fabric of the community and
        culture, and it is a principle that I will take with me in my career.
      </>
    ),
    slideshow: [
      { image: travel1 },
      { image: travel02 },
      { image: travel2 },
      { image: travel3 },
      { image: travel4 },
      { image: travel5 },
      { image: travel6 },
      { image: travel7 },
      { image: travel8 },
      { image: travel9 },
      { image: travel10 },
      { image: travel11 },
      { image: travel12 },
      { image: travelBiking },
      { image: travelLuberty },
      { image: travelVancouver },
      { image: travel13 },
    ],
    thumbnailImage: travel1,
    videos: [
      {
        title: 'winter break | europe trip',
        url: 'https://www.youtube.com/watch?v=dK2LsCh_egk',
      },
      {
        title: 'singapore study trip',
        url: 'https://www.youtube.com/watch?v=ka1ckLcdmqA',
      },
      {
        title: 'solo nyc trip',
        url: 'https://www.youtube.com/watch?v=iBDYQTi1o5Y',
      },
    ],
  },
] as ExperiencesData[]
