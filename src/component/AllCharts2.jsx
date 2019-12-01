import React, { Component } from "react";

import { getCO2Emissionsdata } from "../data/CO2Emission";
import { getGlobalTempdata } from "../data/GlobalTemp";
import { getGlacierSizedata } from "../data/GlacierSize";
import { getSeaLeveldata } from "../data/SeaLevel";
import CO2Emission from "./CO2Emission";
import Temperature from "./Temperature";
import GlacierSize from "./GlacierSize";
import SeaLevel from "./SeaLevel";

export default class AllCharts2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CO2Emission: [],
      GlobalTemp: [],
      GlacierSize: [],
      SeaLevel: []
    };
  }

  async componentDidMount() {
    /*
    const CO2url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const CO2response = await fetch(CO2url);
    const CO2data = await CO2response.json();

    const GlobalTempurl = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
    const GlobalTempresponse = await fetch(GlobalTempurl);
    const GlobalTempdata = await GlobalTempresponse.json();
    GlobalTempdata.sort((a, b) =>
      a.Year > b.Year ? 1 : b.Year > a.Year ? -1 : 0
    );

    const GlacierSizeurl =
      "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
    const GlacierSizeresponse = await fetch(GlacierSizeurl);
    const GlacierSizedata = await GlacierSizeresponse.json();

    const SearLevelurl =
      "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0";
    const SearLevelresponse = await fetch(SearLevelurl);
    const SearLeveldata = await SearLevelresponse.json();
*/
    this.setState({
      CO2Emission: getCO2Emissionsdata(),
      GlobalTemp: getGlobalTempdata().sort((a, b) =>
        a.Year > b.Year ? 1 : b.Year > a.Year ? -1 : 0
      ),
      GlacierSize: getGlacierSizedata(),
      SeaLevel: getSeaLeveldata()
    });

    console.log(this.state.CO2Emission);
  }

  render() {
    return (
      <React.Fragment>
        <CO2Emission CO2data={this.state.CO2Emission}></CO2Emission>
        <Temperature Tempdata={this.state.GlobalTemp}></Temperature>
        <GlacierSize Glacierdata={this.state.GlacierSize}></GlacierSize>
        <SeaLevel SeaLeveldata={this.state.SeaLevel}></SeaLevel>
      </React.Fragment>
    );
  }
}
