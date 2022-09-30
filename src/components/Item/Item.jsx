import React from 'react'
/* Router */
import { Link } from 'react-router-dom'

export default function Item({name, img, category, slide}) {
  const urlDetail = `/${category}/${name}`

  return (
    <div className={`${slide} item d-flex flex-column align-items-center justify-content-evenly gap-2 pb-3 mb-4`}>
      <img src={img} className="img-fluid h-75" alt={name}/>
      <h5>{name}</h5>
      <Link to={urlDetail} className='itemButton py-1'>Ver más</Link>
    </div> 
  )
}