
import React, { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../productsMock";

import { useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const {agregarAlCarrito} = useContext(CartContext)

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
    
    agregarAlCarrito(data)

  }

  return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} />
    </div>
  );
};
