import "./App.css";
import Footer from "./Footer";

// IMPORT DEFAULT
import Home from "./Home"

// IMPORT NOMBRE 
import {Navbar} from "./Navbar"


function App() {

  return <div className="App">
    <Navbar />
    <Home />
    <Footer />
  </div>
}

export default App;

// Navbar()
// <Navbar />