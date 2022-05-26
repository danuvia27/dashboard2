import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Tables from "./components/Table/Tables";
import Home from "./pages/home/Home";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Home />
        <Tables />
      </div>
    </div>
  );
}

export default App;
