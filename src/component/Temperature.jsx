import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";

class Temperature extends Component {
  render() {
    return (
      <React.Fragment>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Global Temprature
        </p>
        <LineChart
          width={1400}
          height={500}
          data={this.props.Tempdata}
          margin={{
            top: 10,
            right: 30,
            left: 50,
            bottom: 50
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Mean"
            stroke="#8884d8"
            activeDot={{ r: 12 }}
          />
        </LineChart>
      </React.Fragment>
    );
  }
}

export default Temperature;
