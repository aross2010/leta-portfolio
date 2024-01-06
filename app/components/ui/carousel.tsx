'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

type CarouselProps = {
  isAutoPlay?: boolean
  children: React.ReactNode
}

export default function CarouselComponent({
  isAutoPlay,
  children,
}: CarouselProps) {
  const responsive = {
    all: {
      breakpoint: { max: 40000, min: 0 },
      items: 1,
    },
  }

  return (
    <Carousel
      infinite
      autoPlay={isAutoPlay}
      autoPlaySpeed={7500}
      responsive={responsive}
      removeArrowOnDeviceType={['mobile']}
      containerClass="rounded-lg shadow-xl"
      showDots
    >
      {children}
    </Carousel>
  )
}
