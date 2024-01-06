'use client'
import { useState } from 'react'
import CarouselComponent from './carousel'

import Image from 'next/image'
import { MdFullscreen } from 'react-icons/md'
import { Fragment } from 'react'
import { CarouselData, Section } from '@/app/lib/types'
import ProjectImgModal from './project-img-modal'

type ProjectCarouselProps = {
  section: Section
  bgWhite?: boolean
}

type ImageModal = {
  open: boolean
  image: JSX.Element | null
}

export default function ProjectCarousel({
  section,
  bgWhite,
}: ProjectCarouselProps) {
  const [imageModal, setImageModal] = useState<ImageModal>({
    open: false,
    image: null,
  })

  return (
    <Fragment>
      <CarouselComponent isAutoPlay={imageModal.open}>
        {section.carouselData.map((data, index) => {
          const { image, title } = data
          return (
            <div className={`relative shadow-lg border rounded-lg`}>
              <Image
                src={image}
                alt="title"
                priority
                className={`w-full max-h-[550px] object-center ${
                  bgWhite ? 'object-contain' : 'object-cover'
                }`}
              />

              <h3
                className={`absolute ${
                  bgWhite ? 'text-gray-300' : 'text-white'
                } bottom-2 left-3  text-xl font-semibold `}
              >
                {title}
              </h3>

              <button
                onClick={() =>
                  setImageModal({
                    open: true,
                    image: (
                      <Image
                        src={image}
                        alt="Project Image"
                        className="object-cover object-center h-[700px] w-auto rounded-lg"
                      />
                    ),
                  })
                }
                className="z-[10] absolute bottom-2 right-3"
              >
                <MdFullscreen
                  className={`text-gray-200 hover:text-gray-600 transition-colors w-6 h-6`}
                />
              </button>
            </div>
          )
        })}
      </CarouselComponent>
      <ProjectImgModal
        imageModal={imageModal}
        setImageModal={setImageModal}
      />
    </Fragment>
  )
}
