'use client'
import React, { Fragment, useState } from 'react'
import { projectsData } from '@/app/lib/data'
import { CarouselData, ProjectDetailed } from '@/app/lib/types'
import CarouselComponent from '@/app/components/ui/carousel'
import { HiDownload } from 'react-icons/hi'

import { MdFullscreen } from 'react-icons/md'
import Image, { StaticImageData } from 'next/image'
import ProjectImgModal from '@/app/components/ui/project-img-modal'
import { redirect } from 'next/navigation'

type ImageModal = {
  open: boolean
  image: StaticImageData | null
}

export default function Project({ params }: { params: { name: string } }) {
  const index = projectsData.findIndex((project) => {
    return project.path === params.name
  })

  if (index === -1) {
    return redirect('/')
  }

  const {
    title,
    headers,
    brief,
    sections,
    icons,
    headerImage,
    pdf,
    primaryColorText,
    secondaryColorText,
    secondaryColorBorder,
  } = projectsData[index]
  const [imageModal, setImageModal] = useState<ImageModal>({
    open: false,
    image: null,
  })

  const projectDetailTemplate = (data: CarouselData, bg: boolean) => {
    return (
      <div
        className={`relative flex w-full h-[550px] border bg-center ${
          bg ? 'bg-contain bg-no-repeat' : 'bg-cover'
        } rounded-lg`}
        style={{
          backgroundImage: `url(${data.image.src})`,
        }}
      >
        <h3
          className={`absolute ${
            bg ? 'text-gray-300' : 'text-white'
          } bottom-2 left-3  text-xl font-semibold `}
        >
          {data.title}
        </h3>

        <button
          onClick={() =>
            setImageModal({
              open: true,
              image: data.image,
            })
          }
          className="z-[10] absolute bottom-2 right-3"
        >
          <MdFullscreen
            className={` text-gray-200 hover:text-gray-600 transition-colors w-6 h-6`}
          />
        </button>
      </div>
    )
  }

  return (
    <Fragment>
      <section className="flex flex-col w-full max-w-[1200px] text-gray-700">
        <h1
          className={` text-3xl font-medium ${primaryColorText} mb-8 uppercase tracking-wider`}
        >
          {title}
        </h1>

        <div className="flex mb-24 items-center">
          <div className="w-1/2">
            <div className="flex flex-col gap-1 mb-12 text-sm">
              <div
                className={`${secondaryColorText} flex items-center text-[20px] gap-2`}
              >
                {icons.map((icon, index) => {
                  return <Fragment key={index}>{icon}</Fragment>
                })}
              </div>
              {headers.map((header, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2"
                  >
                    <h4 className="font-semibold">
                      {header.title}:{'  '}
                    </h4>
                    <p>{header.value}</p>
                  </div>
                )
              })}
            </div>
            <p className="text-sm whitespace-pre-line mb-6 lg:w-[70%]">
              {brief}
            </p>

            <a
              download
              href={pdf}
              className={`group inline-block py-2 px-3 uppercase tracking-wider text-xs font-medium border ${secondaryColorBorder} ${secondaryColorText} rounded-full cursor-pointer hover:scale-105 focus:scale-105 active:scale-95 transition`}
            >
              Download project
              <HiDownload
                className={`inline-block group-hover:translate-y-0.5 ml-1 ${secondaryColorText} transition`}
              />
            </a>
          </div>
          <div className="w-1/2">
            <Image
              src={headerImage}
              alt="BOJ"
              className="w-full rounded-lg shadow-lg border"
            />
          </div>
        </div>

        <div className="flex flex-col gap-24">
          {sections.map((section, index) => {
            return (
              <div
                className={`flex flex-col gap-6 ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                }`}
                key={index}
              >
                <h2
                  className={`font-medium text-xl  border-b py-2 uppercase tracking-wider ${secondaryColorBorder} ${secondaryColorText}`}
                >
                  {section.title}
                </h2>
                <div className="w-full">
                  <CarouselComponent isAutoPlay={!imageModal.open}>
                    {section.carouselData.map((data, index) => {
                      return (
                        <Fragment key={index}>
                          {projectDetailTemplate(
                            data,
                            section.title === 'Technical Drawings'
                          )}
                        </Fragment>
                      )
                    })}
                  </CarouselComponent>
                </div>
                <div className="w-full">
                  <p className="text-sm whitespace-pre-line rounded-lg">
                    {section.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <ProjectImgModal
        imageModal={imageModal}
        setImageModal={setImageModal}
      />
    </Fragment>
  )
}

// -> projects
//     -> name
//         -> type
