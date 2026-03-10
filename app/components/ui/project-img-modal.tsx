'use client'
import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdCloseFullscreen } from 'react-icons/md'
import { Slideshow as SlideshowType } from '@/app/lib/types'
import Slideshow from './slideshow'

type ProjectImgModalProps = {
  slideshow: SlideshowType
  open: boolean
  onClose: () => void
}

export default function ProjectImgModal({
  slideshow,
  open,
  onClose,
}: ProjectImgModalProps) {
  return (
    <Transition.Root
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-50"
        onClose={onClose}
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
          <div className="fixed inset-0 bg-black/90" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-7xl">
            {open && (
              <>
                <Slideshow
                  slideshow={slideshow}
                  showFullscreen={false}
                />
                <button
                  onClick={onClose}
                  className="absolute bottom-3 right-3 z-20 outline-none"
                >
                  <MdCloseFullscreen className="text-gray-200 hover:text-white transition-colors md:w-6 md:h-6 h-5 w-5 drop-shadow" />
                </button>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
