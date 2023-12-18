import "./index.css";
import Navbar from "./Component/Navbar";
import Home from "./routes/Home";
import {Routes, Router} from 'react-router-dom';

function App () {
  return(
    <div className="App">
      
        <Navbar/>
        <Home/>
     
    </div>
  );
}
export default App;