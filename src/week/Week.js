import React, { useEffect, useState } from "react";
import Day from "./Day";

import "./Week.css";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const Week = props => {
  console.log(props);
  const [forecast, setForecast] = useState();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        let responseData = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${props.loc}&units=metric&appid=daea4b2b7ea6afe405712e5fcd31d174`
        );

        let data = await responseData.json();

        setForecast(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeather();
  }, [props.loc]);

  let daily;
  if (forecast !== undefined) {
    daily = forecast.list.filter(day => {
      return day.dt_txt.includes("12:00:00");
    });
  }

  return (
    <div className="week-container">
      {/* <h1>This is the weektab</h1> */}
      <h2>{props.loc}</h2>
      <ul className="week-container__list">
        {forecast &&
          daily.map(day => {
            return (
              <li key={day.dt} className="week-day__listitem">
                <Day dailyForecast={day} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Week;