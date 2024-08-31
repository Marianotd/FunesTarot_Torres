import React from 'react'
// Router
import { Link } from 'react-router-dom'

export default function Logo() {
  const title = "La Proporción Aurea"
  const subTitle = 'Por Claudia Funes'

  return (
    <Link to='/' className='text-textMain whitespace-nowrap'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <h4 className='text-md'>{subTitle}</h4>
    </Link>
  )
}