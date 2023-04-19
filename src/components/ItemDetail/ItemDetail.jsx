import React from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({product}) => {
  return (
    <div>
      <img src={product.img} alt="" />
        <h2>{product.title}</h2>
        <h2>{product.description}</h2>
        <Link to="/" >Volver al home</Link>
    </div>
  )
}
