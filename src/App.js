import "./App.css";
import CounterContainer from "./components/Counter/CounterContainer";

import ItemList from "./components/ItemList/ItemList";
import Login from "./components/Login/Login";
import MaterialGrid from "./components/MaterialGrid/MaterialGrid";
import { Navbar } from "./components/Navbar/Navbar";

function App() {

  let saludo = "Hola juancito como estas"
  let edad = 26

  return (
    <div className="App">
      {/* <MaterialGrid /> */}
      {/* <Login /> */}
      <Navbar />
    </div>
  );
}

export default App;
