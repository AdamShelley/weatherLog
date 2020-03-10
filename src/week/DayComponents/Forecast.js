import React from "react";

import "./Forecast.css";

const forecast = props => {
  console.log(props);
  return (
    <div>
      <h2>{props.weather} </h2>
    </div>
  );
};

export default forecast;
