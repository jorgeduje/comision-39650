import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../productsMock";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let id = 4;

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === id);
      setProduct(encontrado);
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};
