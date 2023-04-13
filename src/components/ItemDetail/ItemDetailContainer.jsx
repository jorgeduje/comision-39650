import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../productsMock";
import useCounter from "../../utils/hooks/useCounter";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { counter, increment} = useCounter(0)

  let id = 4;

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === id);
    setTimeout(() => {
      setProduct(encontrado);
    }, 2000);
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />

      <h1>Counter desde detail: {counter}</h1>
      <button onClick={increment}>Sumar el detail</button>
    </div>
  );
};
