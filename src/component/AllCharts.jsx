import React, { Component } from "react";

import { getCO2Emissionsdata } from "../data/CO2Emission";
import { getGlobalTempdata } from "../data/GlobalTemp";
import { getGlacierSizedata } from "../data/GlacierSize";
import { getSeaLeveldata } from "../data/SeaLevel";
import CO2Emission from "./CO2Emission";
import Temperature from "./Temperature";
import GlacierSize from "./GlacierSize";
import SeaLevel from "./SeaLevel";
import CO2List from "./CO2List";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import CO2PieChart from "./CO2PieChart";
import IceSea from "./IceSea";

import { Route, Switch, Redirect } from "react-router-dom";

export default class AllCharts extends Component {
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
        <NavBar></NavBar>
        <Switch>
          <Route
            path="/co2/:Year"
            render={props => (
              <CO2PieChart {...props} CO2data={this.state.CO2Emission} />
            )}
          />
          <Route
            path="/co2"
            render={props => (
              <CO2Emission {...props} CO2data={this.state.CO2Emission} />
            )}
          />
          <Route
            path="/globaltemp"
            render={props => (
              <Temperature {...props} Tempdata={this.state.GlobalTemp} />
            )}
          />
          <Route
            path="/glaciersize"
            render={props => (
              <GlacierSize {...props} Glacierdata={this.state.GlacierSize} />
            )}
          />
          <Route
            path="/sealevel"
            render={props => (
              <SeaLevel {...props} SeaLeveldata={this.state.SeaLevel} />
            )}
          />
          <Route
            path="/co2list"
            render={props => (
              <CO2List {...props} CO2data={this.state.CO2Emission} />
            )}
          />
          <Route
            path="/icesea"
            render={props => (
              <IceSea
                {...props}
                Glacierdata={this.state.GlacierSize}
                SeaLeveldata={this.state.SeaLevel}
              />
            )}
          />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/" exact to="/co2"></Redirect>
          <Redirect to="/notfound" />
        </Switch>
      </React.Fragment>
    );
  }
}
