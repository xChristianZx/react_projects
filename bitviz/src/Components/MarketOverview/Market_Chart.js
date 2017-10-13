import React, { Component } from "react";
import "./MarketChart.css";
import Axios from "axios";
import PieChart from "./VCharts";

class MarketChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketOpen: null,
      currentDateTime: null,
      marketData: []
    };
  }

  componentDidMount = () => {
    this.setTime();
  };
  
  setTime = () => {
    /*GDAX API requires UTC time */
    const date = new Date();
    const currentTime = new Date(date);
    const currentTimeIso = currentTime.toISOString();
    const pad = num => (num < 10 ? "0" + num : num);

    const year = date.getUTCFullYear();
    const month = pad(date.getUTCMonth() + 1);
    const day = pad(date.getUTCDate());

    const marketOpenDate = `${year}-${month}-${day}T00:00:00Z`;
    const currentUTCDate = currentTimeIso;

    console.log("Current Time: ", currentTime, "\nCurrentIso: ", currentTimeIso);
    console.log("currentUTCDate: ", currentUTCDate, typeof currentUTCDate);
    console.log("previousUTCDate: ", marketOpenDate, typeof marketOpenDate);

    this.setState({
      marketOpen: marketOpenDate,
      currentDateTime: currentUTCDate
    }, () => this.getData());    
  };

  getData = () => {
    const GDAX_Endpoint = "https://api.gdax.com";

    /* https://docs.gdax.com/?javascript#get-historic-rates */
    /*
          RESPONSE FORMAT
    [time,low, high, open, close, volume]
    */

    Axios.get("/products/BTC-USD/candles", {
      baseURL: GDAX_Endpoint,
      params: {
        start: this.state.marketOpen /* "2017-09-17T00:00:00Z" */,
        end: this.state.currentDateTime /* "2017-09-17T20:03:28Z"*/,
        granularity: "600" /* 10 minutes */
      }
    })
      .then(response => {
        // console.log("Historic Rates[0]: ", response.data[0]);
        this.setState({
          marketData: response.data
        });
      })
      .catch(err => console.log("ERROR: ", err));
  };

  render() {
    console.log("marketData", this.state.marketData);
    console.log("marketData[0]", this.state.marketData[0]);
    return (
      <div className="temp-container">
        <div className="market-chart-item">
          <PieChart data={this.state.marketData}/>
        </div>
      </div>
    );
  }
}

export default MarketChart;
