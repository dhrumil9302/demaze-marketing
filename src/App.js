import "./index.css";
import Navbar from "./Component/Navbar";
import Home from "./routes/Home";
import Footer from "./Component/Footer";
import {Routes, Route} from 'react-router-dom';
import AboutUs from "./routes/AboutUs";
import Service from "./routes/Service";
import Contact from "./routes/Contact";


function App () {
  return(
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
        {/* <Navbar/>
        <Home/>
        <About/>
        <Footer/> */}

     
    </div>
  );
}
export default App;