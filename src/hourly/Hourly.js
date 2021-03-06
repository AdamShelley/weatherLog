import React from "react";
import HourCard from "./HourCard";
import Graph from "../graph/Graph";

import "./Hourly.css";

const Hourly = props => {
  console.log(props);
  // const { day } = props.match.params;
  const { location, day, week } = props.location.state;
  console.log(day);
  // console.log(week);

  // Find the DAY
  const dayText = day.dt_txt.split(" ")[0];

  // Find all the same day

  const times = week.list.filter(time => {
    const d = time.dt_txt.split(" ")[0];
    return d === dayText;
  });

  console.log(times);

  return (
    <div className="hourly-container">
      {/* <h2>Hourly logs</h2> */}
      <h2>
        {location}, {week.city.country}
      </h2>
      <ul className="hourly-container__list">
        {times &&
          times.map(hour => {
            return (
              <li key={hour.dt} className="hour__listitem">
                <HourCard data={hour} />
              </li>
            );
          })}
      </ul>

      {times && <Graph id="chart" data={times} hourly />}
    </div>
  );
};

export default Hourly;
