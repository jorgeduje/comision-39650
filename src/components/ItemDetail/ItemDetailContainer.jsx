
import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../productsMock";

import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const {id} = useParams()

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === Number(id));
      setProduct(encontrado);
  }, [id]);

  const onAdd = (cantidad)=>{
    let data = {
      ...product,
      quantity: cantidad
    }
    console.log(data)
    // console.log(`se agregaron al carrito ${cantidad} unidad/es del producto ${product.title}`)
  }

  return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} />
    </div>
  );
};
