import React from 'react'

type SectionProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export default function Section({ children, ...rest }: SectionProps) {
  return (
    <section
      {...rest}
      className="flex flex-col items-center justify-center w-full max-w-[1200px]"
    >
      {children}
    </section>
  )
}
