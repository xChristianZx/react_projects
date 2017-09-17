import React, { Component } from "react";
import Axios from "axios";

class MarketChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketOpen: null,
      currentDateTime: null
    };
  }

  componentDidMount = () => {
    this.setTime();
  };

  setTime = () => {
    /*API requires UTC time */
    const date = new Date();
    const currentTime = new Date(date);
    const currentTimeIso = currentTime.toISOString();
    const pad = num => (num < 10 ? "0" + num : num);

    const year = date.getUTCFullYear();
    const month = pad(date.getUTCMonth() + 1);
    const day = pad(date.getUTCDate());

    const marketOpenDate = `${year}-${month}-${day}T00:00:00Z`;
    const currentUTCDate = currentTimeIso;

    console.log(
      "Current Time:",
      currentTime,      
      "\nCurrentIso",
      currentTimeIso,
    );
    console.log("currentUTCDate", currentUTCDate, typeof currentUTCDate);
    console.log("previousUTCDate", marketOpenDate, typeof marketOpenDate);

    this.setState({
      marketOpen: marketOpenDate,
      currentDateTime: currentUTCDate
    });

    if (this.state.currentDateTime !== null) {
      this.getData();
    } else {
      setTimeout(this.getData, 1000);
    }
  };

  getData = () => {
    const GDAX_Endpoint = "https://api.gdax.com";
    
    /*https://docs.gdax.com/?javascript#get-historic-rates*/
    
    Axios.get("/products/BTC-USD/candles", {
      baseURL: GDAX_Endpoint,
      params: {
        start: this.state.marketOpen, //"2017-09-17T00:00:00Z",
        end: this.state.currentDateTime, //"2017-09-17T20:03:28Z",
        granularity: "600" //10 minutes
      }
    })
      .then(response => console.log("Historic Rates: ", response))
      .catch(err => console.log("ERROR: ", err));
  };

  render() {
    return (
      <div className="temp-container">
        <div className="market-chart-item">Market Data Here!</div>
      </div>
    );
  }
}

export default MarketChart;
