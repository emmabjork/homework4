import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class IceSea extends Component {
  render() {
    let iceData = this.props.Glacierdata;
    let seaData = this.props.SeaLeveldata;
    const filteredSeaData = seaData.filter(
      x =>
        Date.parse(x.Time) > Date.parse("1944-01-01") &&
        Date.parse(x.Time) < Date.parse("2014-01-01")
    );

    filteredSeaData.map(x => (x.Time = x.Time.substring(0, 4)));

    const dataSeries = [
      {
        name: "SeaLevel",
        color: "#00A99D",
        data: []
      },
      {
        name: "GlacierSize",
        color: "#000000",
        data: []
      }
    ];

    filteredSeaData.map(x =>
      dataSeries[0].data.push({
        Year: x.Time,
        Value: x.GMSL
      })
    );

    iceData.map(x =>
      dataSeries[1].data.push({
        Year: x.Year,
        Value: x["Mean cumulative mass balance"]
      })
    );

    return (
      <div>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
         Ice Volume and Sea Level
        </p>
        <LineChart width={1400} height={500} margin={{top:10, bottom:50, right:30, left:50}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="Year"
            category={"Year"}
            allowDuplicatedCategory={false}
          />
          <YAxis dataKey="Value" />
          <Tooltip />
          <Legend verticalAlign="top"  />
          {dataSeries.map(s => (
            <Line dataKey="Value" data={s.data} name={s.name} key={s.name} stroke={s.color}/>
          ))}
        </LineChart>
      </div>
    );
  }
}
