import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock";
import useCounter from "../../utils/hooks/useCounter";

const ItemListContainer = () => {
  // ACA LO NUEVO

  const { counter, increment, decrement, reset } = useCounter(10);

  // ACA LO VIEJO

  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      // reject("se rechazo");
      resolve(products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ItemList items={items} />

      <button onClick={increment}>Sumar List</button>
      <h1>Counter desde list: {counter}</h1>
      <button onClick={decrement}>Restar</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
};

export default ItemListContainer;
