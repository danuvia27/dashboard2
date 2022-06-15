import React, { useEffect, useState } from "react";
import { Tables } from "./components/Table/Tables";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [feed, setFeed] = useState([]);
  const [feedol, setFeedol] = useState([]);
  const [jsonData, setJsonData] = useState([]);
  const [azureData, setAzureData] = useState([]);

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

  useEffect(() => {
    fetch("/azure_data").then((response) =>
      response.json().then((data) => {
        setAzureData(data);
      })
    );
  }, []);

  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Tables
        feed={feed}
        feedol={feedol}
        jsonData={jsonData}
        azureData={azureData}
      />
    </>
  );
}

export default App;
