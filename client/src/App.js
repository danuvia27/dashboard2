import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Tables } from "./components/Table/Tables";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch("/feed").then((response) =>
      response.json().then((data) => {
        setFeed(data);
      })
    );
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Home />
      <Tables feed={feed} />
    </div>
  );
}

export default App;
