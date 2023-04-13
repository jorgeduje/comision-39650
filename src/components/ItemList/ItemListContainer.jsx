import { useState, useEffect } from "react";
import ItemList from "./ItemList";

import axios from "axios";
import { Button } from "@mui/material";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    setIsChanged(false);
    let data = axios.get("http://localhost:5000/products");
    data.then((res) => setItems(res.data));
  }, [isChanged]);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    setIsChanged(true);
  };

  const updateProduct = (id, data) => {
    axios.patch(`http://localhost:5000/products/${id}`, data);
    setIsChanged(true);
  };

  const createProduct = (data) => {
    axios.post("http://localhost:5000/products", data);
    setIsChanged(true);
  };

  return (
    <div>
      <ItemList
        items={items}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
      />

      <Button
        variant="contained"
        size="small"
        onClick={() =>
          createProduct({
            title: "Nuevo producto",
            price: 111,
            stock: 21,
            description: "este es un nuevo producto",
            category: "deportivas",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTurWuqw5p1224dZ7Fyo83mEdLGwjn_MEbPMQ&usqp=CAU",
          })
        }
      >
        Crear producto
      </Button>
    </div>
  );
};

export default ItemListContainer;
