import React, { useEffect, useState } from "react";
import { Tables } from "./components/Table/Tables";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Cards from "./components/Cards";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Outages from "./pages/Outages";

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

  const refresh = () => {
    window.location.reload();
  };

  const location = useLocation();
  console.log("pathname", location.pathname);
  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/outages" element={<Outages />} />
        </Route>
      </Routes>

      <Tables
        feed={feed}
        feedol={feedol}
        jsonData={jsonData}
        azureData={azureData}
        refresh={refresh}
      />
    </>
  );
}

export default App;
