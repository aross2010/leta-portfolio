'use client'
import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image, { StaticImageData } from 'next/image'
import { MdCloseFullscreen } from 'react-icons/md'

type ProjectImgModal = {
  imageModal: {
    open: boolean
    image: JSX.Element | null
  }
  setImageModal: React.Dispatch<
    React.SetStateAction<{
      open: boolean
      image: JSX.Element | null
    }>
  >
}

export default function ProjectImgModal({
  imageModal,
  setImageModal,
}: ProjectImgModal) {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root
      show={imageModal.open && imageModal.image !== null}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setImageModal({ open: false, image: null })}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-full overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform bg-transparent rounded-lg transition-all sm:my-8 ">
                {imageModal.image && (
                  <div className="relative">
                    {imageModal.image}
                    <button
                      onClick={() => {
                        setImageModal({ open: false, image: null })
                      }}
                      className="absolute bottom-3 right-3 outline-none"
                    >
                      <MdCloseFullscreen className="text-gray-200 hover:text-gray-600 transition-colors w-6 h-6" />
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
