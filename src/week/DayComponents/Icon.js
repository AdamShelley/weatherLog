import React from "react";

import "./Icon.css";

const Icon = props => {
  return (
    <div className="forecast-icon">
      <i className={`owf owf-${props.iconCode}-d owf-5x`}></i>
    </div>
  );
};

export default Icon;
