import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";

import "./App.css";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/feed")
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

        {typeof data.feed === "undefined" ? (
          <p>Loading...</p>
        ) : (
          data.feed.map((data, i) => <p key={i}>{data}</p>)
        )}
      </div>
    </div>
  );
}

export default App;
