import "./index.css";
import Navbar from "./Component/Navbar";
import Home from "./routes/Home";
import Footer from "./Component/Footer";
// import Hero from "./routes/Hero";
import {Routes, Router} from 'react-router-dom';

function App () {
  return(
    <div className="App">
      
        <Navbar/>
        <Home/>
        <Footer/>

     
    </div>
  );
}
export default App;