import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Error from './Error';
import Testimonial from './Testimonial';
import Contact from './Contact';
function App() {
  return (
   <>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/testimonial" element={ <Testimonial/> } />
        <Route path="/error" element={ <Error/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
   </>
  );
}

export default App;
