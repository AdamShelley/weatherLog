import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import LocationForm from "./shared/form/LocationForm";
import Week from "./week/Week";
import Graph from "./graph/Graph";
import Hourly from "./hourly/Hourly";

function App() {
  const [location, setLocation] = useState();

  const locationHandler = loc => {
    setLocation(loc);
  };

  return (
    <div className="main-container">
      <h1>Weatherlog</h1>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LocationForm handler={locationHandler} />
            <Week loc={location || "London, UK"} />
            <Graph />
          </Route>
          <Route path="/hourly/:day" component={Hourly}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
