import { useState } from "react";
import "./App.css";

import CounterContainer from "./components/Counter/CounterContainer";

import ItemListContainer from "./components/ItemList/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [mostrar, setMostrar] = useState(false)

  const [saludo, setSaludo] = useState("hola pépito")

  const changeState = ()=>{
    setMostrar( !mostrar )
  }

  return (
    <div className="App">
      <Navbar />
      <button onClick={changeState} >Montar y desmontar component</button>
      {
        mostrar ? <ItemListContainer saludo={saludo}/> : null
      }

      <button onClick={()=> setSaludo("hola juancito")}>cambiar saludo</button>

      {/* <CounterContainer /> */}

    </div>
  );
}

export default App;
