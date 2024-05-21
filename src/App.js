import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import CreateNewPage from "./pages/create_new";

function App() {
  return (
    
    <div className='main'>
      <div className="main-wrapper">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/createnew" element={<CreateNewPage />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
