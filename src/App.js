import React, { useState } from "react";
import "./App.css";
import LocationForm from "./shared/form/LocationForm";
import Week from "./week/Week";
import Graph from "./graph/Graph";

function App() {
  const [location, setLocation] = useState();

  const locationHandler = loc => {
    setLocation(loc);
  };

  return (
    <div className="main-container">
      <h1>Weatherlog</h1>
      <LocationForm handler={locationHandler} />
      <Week loc={location || "London"} />
      <Graph />
    </div>
  );
}

export default App;
