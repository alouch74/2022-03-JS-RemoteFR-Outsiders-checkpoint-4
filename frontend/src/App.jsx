import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import RoyalAssets from "./pages/RoyalAssets/RoyalAssets";
import RoyalFamily from "./pages/RoyalFamily/RoyalFamily";
//import "../components/Nav/Nav";
//import "../compenents/Nav/Nav.css";
//import RoyalFamily from './pages/RoyalFamily/RoyalFamily.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/royal-assets" element={<RoyalAssets />} />
        <Route path="/royal-family" element={<RoyalFamily />} />
      </Routes>
    </div>
  );
}

export default App;