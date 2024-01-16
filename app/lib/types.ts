import { StaticImageData } from 'next/image'
import React from 'react'

export type ProjectData = {
  path: string
  title: string
  date: string
  projectFunction: string
  icons: React.ReactNode[]
  moodBoard: StaticImageData
  thumbnailImage: StaticImageData
  pdf: string
  backgroundColor: string
  primaryColorText: string
  secondaryColorText: string
  secondaryColorBorder: string
  headers: {
    title: string
    value: string
  }[]
  brief: string
  sections: {
    title: string
    description: string
    carouselData: {
      image: StaticImageData
      title: string
      description: string
    }[]
  }[]
}

export type Section = {
  title: string
  description: string
  carouselData: {
    image: StaticImageData
    title: string
    description: string
  }[]
}

export type CarouselData = {
  image: StaticImageData
  title: string
  description: string
}
