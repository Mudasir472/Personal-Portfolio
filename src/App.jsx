
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Services from "./views/Services";
import Projects from "./views/Projects";

import Header from "./Header_Footer/Header";
import Footer from "./Header_Footer/Footer";

function App() {
  // return (
  //   <>
  //     <h1>Starting New Project</h1>
  //     <Header />
  //     <Routes>

  //       <Route path="/" element={<Home />} />
  //       <Route path="/About" element={<About />} />
  //       <Route path='/Services' element={<Services />} />
  //       <Route path='/Projects' element={<Projects />} />
  //       <Route path='/Contact' element={<Contact />} />
  //     </Routes>

  //   </>
  // )

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Personal-Portfolio" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/About" element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
