'use client'
import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Image from 'next/image'
import { MdFullscreen } from 'react-icons/md'
import { Fragment } from 'react'
import { Slideshow as SlideshowType } from '@/app/lib/types'
import ProjectImgModal from './project-img-modal'

const responsive = {
  all: { breakpoint: { max: 40000, min: 0 }, items: 1 },
}

function getEmbedUrl(url: string): string {
  const short = url.match(/youtu\.be\/([^?&]+)/)
  if (short) return `https://www.youtube.com/embed/${short[1]}?rel=0`
  const long = url.match(/[?&]v=([^&]+)/)
  if (long) return `https://www.youtube.com/embed/${long[1]}?rel=0`
  return url
}

export default function Slideshow({
  slideshow,
  showFullscreen = true,
}: {
  slideshow: SlideshowType
  showFullscreen?: boolean
}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [reorderedSlideshow, setReorderedSlideshow] = useState(slideshow)

  const handleFullscreen = (index: number) => {
    setReorderedSlideshow([
      ...slideshow.slice(index),
      ...slideshow.slice(0, index),
    ])
    setModalOpen(true)
  }

  const carousel = (
    <div className="relative rounded-lg shadow-xl overflow-hidden bg-gray-950">
      <Carousel
        infinite
        responsive={responsive}
        showDots={showFullscreen}
        removeArrowOnDeviceType={['mobile']}
        containerClass="rounded-lg"
        itemClass="w-full"
      >
        {slideshow.map((data, index) => (
          <div
            key={index}
            className="relative w-full aspect-video"
          >
            {data.youtubeUrl ? (
              <iframe
                src={getEmbedUrl(data.youtubeUrl)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <>
                <Image
                  priority={true}
                  src={data.image!}
                  alt="Project Image"
                  fill
                  className={`object-center ${!showFullscreen ? 'object-contain' : 'object-cover'}`}
                />
                {showFullscreen && (
                  <button
                    onClick={() => handleFullscreen(index)}
                    className="absolute bottom-2 right-3 z-10"
                  >
                    <MdFullscreen className="text-gray-200 hover:text-white transition-colors md:w-6 md:h-6 h-5 w-5 drop-shadow" />
                  </button>
                )}
              </>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  )

  if (!showFullscreen) return carousel

  return (
    <Fragment>
      {carousel}
      <ProjectImgModal
        slideshow={reorderedSlideshow}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </Fragment>
  )
}
