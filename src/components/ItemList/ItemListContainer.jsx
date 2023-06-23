import { useState, useEffect } from "react";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

import { getAll } from "../../services";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log("hola");
  useEffect(() => {
    const getData = async () => {
      let data = await getAll(categoryName);
      setItems(data);
    };
    getData();
  }, [categoryName]);

  return (
    <div>
      <h1>Este es el proyecto</h1>
      {items.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PropagateLoader color="steelblue" size={40} />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
