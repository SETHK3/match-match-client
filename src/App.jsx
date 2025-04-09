import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/matches"
            element={
              <div className="placeholder">Matches Page Coming Soon</div>
            }
          />
          <Route
            path="/tables"
            element={
              <div className="placeholder">League Tables Page Coming Soon</div>
            }
          />
          <Route
            path="/news"
            element={<div className="placeholder">News Page Coming Soon</div>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
