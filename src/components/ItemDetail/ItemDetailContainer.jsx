import React, { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";

import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { getById } from "../../services";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const { id } = useParams();
  console.log("chau");

  useEffect(() => {
    const getData = async () => {
      const data = await getById(id);
      setProduct({
        ...data.data(),
        id: data.id,
      });
    };
    getData();
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Producto agregado`,
      showConfirmButton: true,
      timer: 1500,
    });
  };

  let cantidadTotal = getQuantityById(product.id);

  return (
    <div>
      <ItemDetail
        product={product}
        onAdd={onAdd}
        cantidadTotal={cantidadTotal}
      />
    </div>
  );
};
