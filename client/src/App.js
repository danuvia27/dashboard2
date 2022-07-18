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
  const emptyFeed = [
    {
      title: "",
      link: "",
      updated: "",
    },
  ];

  const emptyJsonFeed = {
    archive: [
      {
        service_name: "",
        summary: "",
        date: "",
        status: "",
        details: "",
        description: "",
        service: "",
      },
    ],
    current: [
      {
        service_name: "",
        summary: "",
        date: "",
        status: "",
        details: "",
        description: "",
        service: "",
      },
    ],
  };

  const [feed, setFeed] = useState(emptyFeed);
  const [feedol, setFeedol] = useState(emptyFeed);
  const [jsonData, setJsonData] = useState(emptyJsonFeed);
  const [azureData, setAzureData] = useState(emptyFeed);
  const [feedolIsActive, setFeedolIsActive] = useState(false);
  const [feedIsActive, setFeedIsActive] = useState(false);
  const [jsonIsActive, setJsonIsActive] = useState(false);
  const [azureIsActive, setAzureIsActive] = useState(false);

  const getFeed = () => {
    fetch("/feed")
      .then((response) => response.json())
      .then((data) => {
        setFeed([data]);
      });
  };

  const getFeedol = () => {
    fetch("/feed_ol")
      .then((response) => response.json())
      .then((data) => {
        setFeedol([data]);
      });
  };

  const getJsonData = () => {
    fetch("/json_data")
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
      });
  };

  const getAzureData = () => {
    fetch("/azure_data")
      .then((response) => response.json())
      .then((data) => {
        setAzureData([data]);
      });
  };

  const getAllFour = () => {
    getFeed();
    getFeedol();
    getJsonData();
    getAzureData();
  };

  useEffect(() => {
    setInterval(() => {
      setTimeout(getAllFour());
    }, 5000);
  }, []);

  useEffect(() => {
    jsonShouldDisplayActive();
    azureShouldDisplayActive();
    feedolShouldDisplayActive();
    feedShouldDisplayActive();
  });

  //If there's an active incident
  //(either based on an incident in the past 24 hours,
  //or if it's in the active section of the AWS json), make the text in the card title red, otherwise make it green.

  const feedolShouldDisplayActive = () => {
    const feedolHasActiveIncidents = feedol.reduce(
      (incidentStatus, currentIncident) => {
        if (
          isLessThanADayOld(convertToMillies(currentIncident.date)) === true
        ) {
          return true;
        } else {
          return incidentStatus;
        }
      },
      false
    );
    setFeedolIsActive(feedolHasActiveIncidents === true);
  };

  const feedShouldDisplayActive = () => {
    const feedHasActiveIncidents = feed.reduce(
      (incidentStatus, currentIncident) => {
        if (
          isLessThanADayOld(convertToMillies(currentIncident.date)) === true
        ) {
          return true;
        } else {
          return incidentStatus;
        }
      },
      false
    );
    setFeedIsActive(feedHasActiveIncidents === true);
  };

  const jsonShouldDisplayActive = () => {
    const ArchiveHasActiveIncidents = jsonData.archive.reduce(
      (incidentStatus, currentIncident) => {
        if (isLessThanADayOld(currentIncident.date) === true) {
          return true;
        } else {
          return incidentStatus;
        }
      },
      false
    );

    setJsonIsActive(
      ArchiveHasActiveIncidents === true || jsonData.current.length > 0
    );
  };

  const azureShouldDisplayActive = () => {
    const AzureHasActiveIncidents = azureData.reduce(
      (incidentStatus, currentIncident) => {
        if (
          isLessThanADayOld(convertToMillies(currentIncident.date)) === true
        ) {
          return true;
        } else {
          return incidentStatus;
        }
      },
      false
    );
    setAzureIsActive(AzureHasActiveIncidents === true);
  };

  const isLessThanADayOld = (dateToCheck) => {
    const todaysDate = Date.now();

    return todaysDate - dateToCheck < 86400000;
  };

  const convertToMillies = (dateToConvert) => Date.parse(dateToConvert);

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
        feedolIsActive={feedolIsActive}
        feedIsActive={feedIsActive}
        jsonIsActive={jsonIsActive}
        azureIsActive={azureIsActive}
        jsonShouldDisplayActive={jsonShouldDisplayActive}
      />
    </>
  );
}

export default App;
