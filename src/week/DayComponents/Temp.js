import React from "react";

import "./Temp.css";

const Temp = props => {
  console.log(props);
  return <div className="temp-data">{props.temp.temp.toFixed()} °C</div>;
};

export default Temp;
