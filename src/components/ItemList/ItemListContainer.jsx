import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock";

import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productsFiltered = products.filter(
      (prod) => prod.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productsFiltered : products);
      }, 1000);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  // if( items.length === 0 ){
  //   return <div style={{display: "flex", justifyContent: "center"}}>
  //     <PropagateLoader color="red" size={40}/>
  //   </div>
  // }

  return (
    <div>
      {/* {items.length === 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PropagateLoader color="red" size={40} />
        </div>
      )  } */}

      {items.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PropagateLoader color="red" size={40} />
        </div>
      ) : (
        <ItemList items={items} />
      )}

      <h1 style={{color: items.length > 0 && "red" }}>Mi nombre es pepito</h1>
    </div>
  );
};

export default ItemListContainer;
