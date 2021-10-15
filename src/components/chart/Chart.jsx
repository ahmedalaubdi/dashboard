import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data, dataKey, grid, title }) => {
  return (
    <div className="chart">
      <h3 className="chartTitle"> {title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#555021" />
          <Line type="monotone" dataKey={dataKey} stroke="#ca7788" />
          {/* <Line type="monotone" dataKey="Active User" stroke="#555021" /> */}
          {/* <Line type="monotone" dataKey="amt" stroke="#00b678" /> */}
          <Tooltip />
          {grid && <CartesianGrid stroke="333222" strokeDasharray="5" />}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
