import React, { useEffect, useState } from "react";
import { Tables } from "./components/Table/Tables";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
      <Tables feed={feed} feedol={feedol} />
    </>
  );
}

export default App;
