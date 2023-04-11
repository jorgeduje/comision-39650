import "./App.css";
import FetchingData from "./components/FetchingData/FetchingData";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";


import { Navbar } from "./components/Navbar/Navbar";

function App() {
 

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
     {/* <FetchingData /> */}
    </div>
  );
}

export default App;
