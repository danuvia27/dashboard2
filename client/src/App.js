import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Tables } from "./components/Table/Tables";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const [feed, setFeed] = useState([]);
  const [feedol, setFeedol] = useState([]);

  useEffect(() => {
    fetch("/feed").then((response) =>
      response.json().then((data) => {
        setFeed(data);
      })
    );
  }, []);
  useEffect(() => {
    fetch("/feed_ol").then((response) =>
      response.json().then((data) => {
        setFeedol(data);
        console.log(data);
      })
    );
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Home />
        <Tables feed={feed} feedol={feedol} />
      </div>
    </div>
  );
}

export default App;
