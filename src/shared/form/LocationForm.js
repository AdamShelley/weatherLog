import React, { useState } from "react";

import "./LocationForm.css";

const LocationForm = props => {
  const [location, setLocation] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(location);
    console.log("submitted");
    props.handler(location);
  };
  return (
    <div className="location-form-container">
      <h2>Where in the world are you? </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <button>Here!</button>
      </form>
    </div>
  );
};

export default LocationForm;
