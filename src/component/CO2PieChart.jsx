import React, { Component } from "react";
import { PieChart, Pie, Sector, Cell, Legend } from "recharts";

export default class MyPieChart extends Component {
  render() {
    //let { allPers } = this.props;
    let CO2EmissionData = this.props.CO2data;
    let Year = this.props.match.params.Year;
    let index = CO2EmissionData.findIndex(co2 => co2.Year === parseInt(Year));

    let co2 = CO2EmissionData[index];
    if (co2 === undefined) return <p>There is no data.</p>;

    const dataPieChart = [
      { name: "Gas Fuel", value: parseInt(co2["Gas Fuel"]) },
      { name: "Liquid Fuel", value: co2["Liquid Fuel"] },
      { name: "Solid Fuel", value: co2["Solid Fuel"] },
      { name: "Cement", value: co2["Cement"] }
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#BB8042"];

    return (
      <React.Fragment>
        <button
          className="btn btn-primary"
          onClick={() => this.props.history.push("/co2list")}
        >
          {" "}
          BACK{" "}
        </button>
        <div style={{ width: "650px", height: "600px", float: "left" }}>
          <PieChart width={650} height={600}>
            <Pie
              data={dataPieChart}
              dataKey="value"
              cx={300}
              cy={250}
              outerRadius={190}
              fill="#82ca9d"
              label
            >
              <Cell fill={COLORS[0]} />)
              <Cell fill={COLORS[1]} />)
              <Cell fill={COLORS[2]} />)
              <Cell fill={COLORS[3]} />)
              <Cell fill={COLORS[4]} />)
            </Pie>
            <Legend layout="vertical" />
          </PieChart>
        </div>
      </React.Fragment>
    );
  }
}

//export default Table;
