import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
  const [contador, setContador] = useState(0);
  // let { edad, saludo } = props

  // NO SE USA ---> se ejecuta siempre 
  // useEffect( ()=>{
  //   console.log("hize la peticion al BACK")
  // })

  // ---> se ejecuta unicamente en el montaje del componente
  // useEffect(() => {
  //   console.log("hize la peticion al BACK");
  // }, []);

  useEffect(() => {
    console.log("hize la peticion al BACK");
  }, [saludo]); // ---> array de dependencias

  console.log("me ejecute primero")
  
  return (
    <div>
      <ItemList saludo={saludo} />
      <Typography>{contador}</Typography>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
};

export default ItemListContainer;
