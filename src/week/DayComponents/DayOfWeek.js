import React from "react";

import "./DayOfWeek.css";
import moment from "moment";

const DayOfWeek = props => {
  console.log(props);
  // Format date
  // const date = props.date.split(" ")[0].split("-")[2];
  // const month = props.date.split(" ")[0].split("-")[1];

  let newDate = new Date();
  const weekday = props.day * 1000;
  newDate.setTime(weekday);

  moment(newDate).format("dddd");

  return (
    <div className="day-of-week">
      {/* <h1>
        {date} - {month}
      </h1> */}
      <h2>{moment(newDate).format("MMMM Do, h:mm a")}</h2>
    </div>
  );
};

export default DayOfWeek;
