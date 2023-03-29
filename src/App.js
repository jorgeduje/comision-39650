import "./App.css";
import CounterContainer from "./components/Counter/CounterContainer";

import ItemList from "./components/ItemList/ItemList";
import { Navbar } from "./components/Navbar/Navbar";

function App() {

  let saludo = "Hola juancito como estas"
  let edad = 26

  return (
    <div className="App">
      <Navbar color="red" />
      <ItemList saludo={saludo} edad={edad} />
      <CounterContainer />
    </div>
  );
}

export default App;
