import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/titles")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
      {typeof data.title === "undefined" ? (
        <p>loading...</p>
      ) : (
        data.title.map((title, i) => <p key={i}>{title}</p>)
      )}
    </div>
  );
}

export default App;
