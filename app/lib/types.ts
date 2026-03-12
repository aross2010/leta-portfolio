import { StaticImageData } from 'next/image'
import React from 'react'

export type Slideshow = {
  image?: StaticImageData
  youtubeUrl?: string
}[]

export type ProjectData = {
  path: string
  title: string
  date: string // ex. 'Spring 2024'
  projectFunction: string
  icons: React.ReactNode[] // tech used
  thumbnailImage: StaticImageData // for home page
  pdf?: string // detailed look into project
  headers: {
    title: string
    value: string
  }[]
  color: string
  brief: string | React.ReactNode
  slideshow: Slideshow
  additionalSections?: {
    title: string
    brief: string
    slideshow: Slideshow
    link?: string
  }[]
  award?: {
    image: StaticImageData
  }
}

export type CarouselData = {
  image: StaticImageData
  title: string
  description: string
}

export type ExperiencesData = {
  path: string
  title: string
  experienceFunction: string
  color: string
  date: string
  thumbnailImage: StaticImageData
  brief: string
  slideshow: Slideshow
  videos?: {
    url: string
    title: string
  }[]
}
