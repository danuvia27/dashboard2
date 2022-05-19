import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

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
    <div>
      <Navbar />

      {typeof data.title === "undefined" ? (
        <p>loading...</p>
      ) : (
        data.title.map((title, i) => <p key={i}>{title}</p>)
      )}
    </div>
  );
}

export default App;
