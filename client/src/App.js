import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Outages from "./pages/Outages";
import Team from "./pages/Team";

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
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Dashboard} />
          <Route path="/outages" component={Outages} />
          <Route path="/team" component={Team} />
        </Routes>
      </Router>

      {typeof data.title === "undefined" ? (
        <p>loading...</p>
      ) : (
        data.title.map((title, i) => <p key={i}>{title}</p>)
      )}
    </>
  );
}

export default App;
