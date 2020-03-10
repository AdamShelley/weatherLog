import React from "react";
import DayOfWeek from "./DayComponents/DayOfWeek";
import Icon from "./DayComponents/Icon";
import Forecast from "./DayComponents/Forecast";
import Temp from "./DayComponents/Temp";

import Card from "../shared/components/Card";

import "./Day.css";

const Day = props => {
  console.log(props);
  return (
    <Card>
      <div className="day-container">
        {/* <h1>This is the day tab</h1> */}
        <DayOfWeek
          day={props.dailyForecast.dt}
          date={props.dailyForecast.dt_txt}
        />
        <Icon iconCode={props.dailyForecast.weather[0].id} />
        <Forecast weather={props.dailyForecast.weather[0].description} />
        <Temp temp={props.dailyForecast.main} />
      </div>
    </Card>
  );
};

export default Day;
