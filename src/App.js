import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import CreateNewPage from "./pages/create_new";
import SearchPage from "pages/search";
import SearchResultPage from "pages/search/result";
import CreateReportPage from "pages/create_report";

function App() {
  return (
    
    <div className='main'>
      <div className="main-wrapper">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/createnew" element={<CreateNewPage />}></Route>
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path="/searchresult" element={<SearchResultPage />}></Route>
            <Route path="/createreport" element={<CreateReportPage />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
