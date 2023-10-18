import React from 'react';
import './App.css';
import Home from './Home.js';
import Courses from "./components/courses";
import About from "./components/about";
import Gallery from "./components/gallery"
import Testimonials from './components/testimonials';
import Location from "./components/location"

// importing components from react-router-dom package
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './components/contactus';

function App() {
  return (
    <>
    {/* <div>      
     <Home />
    </div> */}

    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />  
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path='/location' element={<Location /> }/>
      </Routes> 
    </BrowserRouter> 
    </>
  );
 
}

export default App;
