import React, { useEffect, useState } from "react";
import { Tables } from "./components/Table/Tables";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [feed, setFeed] = useState([]);
  const [feedol, setFeedol] = useState([]);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch("/feed").then((response) =>
      response.json().then((data) => {
        setFeed(data);
        console.log(data);
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

  useEffect(() => {
    fetch("/json_data").then((response) =>
      response.json().then((data) => {
        setJsonData(data["archive"][99]);
      })
    );
  }, []);

  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Tables feed={feed} feedol={feedol} jsonData={jsonData} />
    </>
  );
}

export default App;
