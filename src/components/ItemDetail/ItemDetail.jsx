import React from 'react'

export const ItemDetail = ({product}) => {
  return (
    <div>
        <h2>{product.title}</h2>
        <h2>{product.description}</h2>
    </div>
  )
}
