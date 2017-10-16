import React, { Component } from "react";
import "./MarketChart.css";
import Axios from "axios";
import CandleCharts from "./VCharts";

class MarketChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketOpen: null,
      currentDateTime: null,
      marketDataBTCUSD: [],
      marketDataETHUSD: [],
      marketDataLTCUSD: []
    };
  }

  componentDidMount = () => {
    this.setTime();
  };

  setTime = () => {
    /*GDAX API requires UTC time in ISO */
    const date = new Date();
    const currentTime = new Date(date);
    const currentTimeIso = currentTime.toISOString();
    /*This removes the sec & ms off of the ISOstring so that GDAX returns the timeframe request as requested */
    const currentUTCDate = currentTimeIso
      .split("")
      .slice(0, 16)
      .join("");
    const reformatUTCDate = `${currentUTCDate}Z`;

    const pad = num => (num < 10 ? "0" + num : num);
    const year = date.getUTCFullYear();
    const month = pad(date.getUTCMonth() + 1);
    const day = pad(date.getUTCDate());

    const marketOpenDate = `${year}-${month}-${day}T00:00:00.000Z`;

    console.log(
      "Current Time: ",
      currentTime,
      "\nCurrentIso: ",
      currentTimeIso
    );
    console.log("MarketOpenUTCDate: ", marketOpenDate, typeof marketOpenDate);
    console.log("currentUTCDate:    ", reformatUTCDate, typeof currentUTCDate);

    this.setState(
      {
        marketOpen: marketOpenDate,
        currentDateTime: reformatUTCDate
      },
      () => this.getAllData()
    );
  };

  getData = () => {
    /* https://docs.gdax.com/?javascript#get-historic-rates */
    /*
      RESPONSE FORMAT - [time,low, high, open, close, volume]
    */

    const GDAX_Endpoint = "https://api.gdax.com";

    Axios.get("/products/LTC-USD/candles", {
      baseURL: GDAX_Endpoint,
      params: {
        start: this.state.marketOpen /* "2017-09-17T00:00:00Z" */,
        end: this.state.currentDateTime /* "2017-09-17T20:03:28Z" */,
        granularity: "900" /* 60sec * (desired timeframe in minutes) */
      }
    })
      .then(response => {
        // console.log("Historic Rates[0]: ", response.data[0]);
        this.setState({
          marketDataBTCUSD: response.data
        });
      })
      .catch(err => console.log("ERROR: ", err));
  };

  getAllData = () => {
    const GDAX_Endpoint = "https://api.gdax.com/products";
    const params = {
      baseURL: GDAX_Endpoint,
      params: {
        start: this.state.marketOpen /* "2017-09-17T00:00:00Z" */,
        end: this.state.currentDateTime /* "2017-09-17T20:03:28Z" */,
        granularity: "900" /* 60sec * (desired timeframe in minutes) */
      }
    };

    const getBTC = () => Axios.get("/BTC-USD/candles", params);
    const getETH = () => Axios.get("/ETH-USD/candles", params);
    const getLTC = () => Axios.get("/LTC-USD/candles", params);

    Axios.all([getBTC(), getETH(), getLTC()])
      .then(
        Axios.spread((btc, eth, ltc) => {
          console.log("BTC: ", btc.data);
          console.log("ETH: ", eth.data);
          console.log("LTC: ", ltc.data);
          this.setState({
            marketDataBTCUSD: btc.data,
            marketDataETHUSD: eth.data,
            marketDataLTCUSD: ltc.data
          });
        })
      )
      .catch(err => console.log("ERROR: ", err));
  };

  render() {
    // console.table(this.state.marketData);
    // console.log("marketData[0]", this.state.marketDataBTCUSD[0]);
    return (
      <div className="market-overview-container">
        <div className="market-chart-item">
          <CandleCharts data={this.state.marketDataBTCUSD} />          
        </div>
        <div className="market-chart-item">
          <CandleCharts data={this.state.marketDataETHUSD} />
        </div>
        <div className="market-chart-item">
          <CandleCharts data={this.state.marketDataLTCUSD} />
        </div>
      </div>
    );
  }
}

export default MarketChart;
