import { useState, useEffect } from "react";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import {db} from "../../firebaseConfig"


import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { products } from "../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

    let consulta; 
    const itemCollection = collection(db, "products")

    if(categoryName){
      const itemsCollectionFiltered = query( itemCollection, where("category", "==", categoryName ))
      consulta = itemsCollectionFiltered
    }else{
      consulta = itemCollection
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map( product => {
          // console.log(product.data(), product.id)
          return {
            ...product.data(),
            id: product.id
          }
        })

        setItems(products)
      })
      .catch((err) => console.log(err));

  }, [categoryName]);

  const addProducts = ()=>{

    const productsCollection = collection(db, "products")

      products.map( product => (
        addDoc(productsCollection, product)
      ))

  }

  return (
    <div>
      {items.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PropagateLoader color="red" size={40} />
        </div>
      ) : (
        <ItemList items={items} />
      )}

      <h1 style={{ color: items.length > 0 && "red" }}>Mi nombre es pepito</h1>

      <button onClick={addProducts}>Agregar productos a firebase</button>
    </div>
  );
};

export default ItemListContainer;
