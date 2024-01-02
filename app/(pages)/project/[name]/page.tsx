import React from 'react'

export default function Project({ params }: { params: { name: string } }) {
  return <h1>{params.name}</h1>
}
