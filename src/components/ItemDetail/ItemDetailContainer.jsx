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

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};
