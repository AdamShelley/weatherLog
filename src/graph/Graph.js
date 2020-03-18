import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import { calculateTemps } from "./calculateTemps";
import "./Graph.css";

const Graph = props => {
  let renderLineChart;

  // If the graph needs to be 5 day week
  if (props.week) {
    console.log("weekly graph");
    const { calculateHandler } = calculateTemps();

    const returnedData = calculateHandler(props);

    console.log(returnedData);
    let data = [];
    returnedData.dayList.forEach((day, index) => {
      const date = day[0].dt_txt.split(" ")[0];

      let indDay = {
        name: date,
        high: returnedData.highs[index],
        low: returnedData.lows[index]
      };

      data.push(indDay);
    });

    renderLineChart = (
      <ResponsiveContainer width={"99%"} height={350}>
        <LineChart
          width={800}
          height={350}
          data={data}
          margin={{ top: 5, right: 50, bottom: 10, left: 0 }}
        >
          <Line type="monotone" dataKey="high" stroke="#8884d8" />
          <Line type="monotone" dataKey="low" stroke="#000" />
          {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
          <XAxis dataKey="name" />
          <YAxis
            label={{ value: "Temp. C ", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );
    // If the graph is needed for hourly graph
  } else if (props.hourly) {
    let allData = [];
    props.data.map(day => {
      let temp = {
        name: day.dt_txt.split(" ")[1],
        high: day.main.temp
      };
      allData.push(temp);
    });

    renderLineChart = (
      <ResponsiveContainer width={"99%"} height={350}>
        <LineChart
          data={allData}
          margin={{ top: 5, right: 30, bottom: 10, left: 0 }}
          className="graph-container__graph"
        >
          <Line type="monotone" dataKey="high" stroke="#8884d8" />
          {/* <Line type="monotone" dataKey="low" stroke="#333" /> */}
          {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
          <XAxis dataKey="name" />
          <YAxis
            label={{ value: "Temp. C", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return <div className="graph-container">{renderLineChart}</div>;
};

export default Graph;
