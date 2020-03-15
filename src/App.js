import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import NavContainer from "./nav/NavContainer";
import LocationForm from "./shared/form/LocationForm";
import Week from "./week/Week";

import Hourly from "./hourly/Hourly";

function App() {
  const [location, setLocation] = useState();

  const locationHandler = loc => {
    setLocation(loc);
  };

  return (
    <div className="main-container">
      <Router>
        <div className="nav-bar">
          <div className="empty"></div>
          <h1>Weatherlog</h1>
          <NavContainer />
        </div>
        <Switch>
          <Route path="/" exact>
            <LocationForm handler={locationHandler} />
            <Week loc={location || "London"} />
          </Route>
          <Route path="/hourly/:day" exact component={Hourly}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
