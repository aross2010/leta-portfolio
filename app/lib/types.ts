import { StaticImageData } from 'next/image'

export type Project = {
  name: string
  description: string
  image: StaticImageData
  link: string
}

export type ProjectDetailed = {
  title: string
  headers: {
    title: string
    value: string
  }[]
  brief: string
  sections: {
    description: string
    carouselData: {
      image: StaticImageData
      title: string
    }[]
  }
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
