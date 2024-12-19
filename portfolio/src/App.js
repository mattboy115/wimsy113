import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Projects from "./Projects";

function App() {
  return (
  <Router>
    <div className="app-body">
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="./about/About">About</Link></li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
        </Routes>
      </div>
      <footer>
        Please show up
      </footer>
    </div>
  </Router>
  );
}

export default App;
