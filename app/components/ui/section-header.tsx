import React from 'react'

export default function SectionHeader({
  children,
}: {
  children: React.ReactNode
}) {
  return <h2 className="font-semibold text-xl">{children}</h2>
}
