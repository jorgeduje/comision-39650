import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";

import { Navbar } from "./components/Navbar/Navbar";
import PruebaFetchDos from "./components/PruebaFetchDos/PruebaFetchDos";
import PruebaFetchUno from "./components/PruebaFetchUno/PruebaFetchUno";

function App() {
  return (
    // <div className="App">
    //   {/* <Navbar />
    //   <ItemListContainer />
    //   <ItemDetailContainer /> */}
    // </div>

    <div className="App">
      <Navbar>
        <PruebaFetchUno />
        <ItemListContainer />
        <ItemDetailContainer />
        <PruebaFetchDos />
      </Navbar>
    </div>
  );
}

export default App;
