import React, { useEffect, useState } from "react";
import { Panels } from "./components/Panels";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Outages from "./pages/Outages";

function App() {
  const emptyFeed = {
    title: "",
    link: "",
    updated: "",
  };

  const [feed, setFeed] = useState(emptyFeed);
  const [feedol, setFeedol] = useState(emptyFeed);
  const [jsonData, setJsonData] = useState(emptyFeed);
  const [azureData, setAzureData] = useState(emptyFeed);

  const getFeed = () => {
    fetch("/feed")
      .then((response) => response.json())
      .then((data) => {
        setFeed(data);
      });
  };

  const getFeedOl = () => {
    fetch("/feed_ol")
      .then((response) => response.json())
      .then((data) => {
        setFeedol(data);
      });
  };

  const getJsonData = () => {
    fetch("/json_data")
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data["archive"][0]);
      });
  };

  const getAzureData = () => {
    fetch("/azure_data")
      .then((response) => response.json())
      .then((data) => {
        setAzureData(data);
      });
  };

  const getAllFour = () => {
    getFeed();
    getFeedOl();
    getJsonData();
    getAzureData();
  };

  useEffect(() => {
    getAllFour();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/outages" element={<Outages />} />
        </Routes>
      </Router>
      <Panels
        feed={feed}
        feedol={feedol}
        jsonData={jsonData}
        azureData={azureData}
        getAllFour={getAllFour}
      />
    </>
  );
}

export default App;
