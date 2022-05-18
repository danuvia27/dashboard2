import React, { useState, useEffect } from "react";

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
      <h1>Ayooo</h1>
      {typeof data.title === "undefined" ? (
        <p>loading...</p>
      ) : (
        data.title.map((title, i) => <p key={i}>{title}</p>)
      )}
    </div>
  );
}

export default App;
