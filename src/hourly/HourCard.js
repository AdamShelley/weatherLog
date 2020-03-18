import React from "react";

import Card from "../shared/components/Card";
import DayOfWeek from "../week/DayComponents/DayOfWeek";
import Icon from "../week/DayComponents/Icon";
import Forecast from "../week/DayComponents/Forecast";
import Temp from "../week/DayComponents/Temp";

import "./HourCard.css";

const HourCard = props => {
  console.log(props);

  return (
    <Card extraStyle={"hour-card"}>
      <div className="day-container">
        {/* <h1>This is the day tab</h1> */}
        <DayOfWeek day={props.data.dt} date={props.data.dt_txt} />
        <Icon iconCode={props.data.weather[0].id} />
        <Forecast weather={props.data.weather[0].description} />
        <Temp temp={props.data.main} />
      </div>
    </Card>
  );
};

export default HourCard;
