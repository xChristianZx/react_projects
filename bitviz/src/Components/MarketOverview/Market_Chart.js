import React, { Component } from "react";
import "./MarketChart.css";
import Axios from "axios";
import CandleCharts from "./VCharts";
import moment from "moment";

class MarketChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketOpen: null,
      currentDateTime: null,
      prevDayCloseStart: null,
      prevDayCloseEnd: null,
      marketDataBTCUSD: [],
      marketDataETHUSD: [],
      marketDataLTCUSD: [],
      priorCloseBTCUSD: null,
      priorCloseETHUSD: null,
      priorCloseLTCUSD: null
    };
  }
  //#region methods
  componentDidMount = () => {
    this.setTime();
  };

  setTime = () => {
    /*GDAX API requires UTC time in ISO 8601 */
    const date = moment();
    const currentTimeLocal = date.format();
    const currentTimeIso = date.toISOString(); //toISOString always returns timestamp in UTC

    // console.log("date: ", date.utc().format());

    const prevDay = date
      .utc()
      .subtract(1, "day")
      .format("YYYY-MM-DD");

    const prevDayCloseStart = `${prevDay}T23:39:00Z`;
    const prevDayCloseEnd = `${prevDay}T23:59:59Z`;
    // console.log("PrevDay: ", prevDay);
    // console.log("prevDayCloseStart: ", prevDayCloseStart);
    // console.log("prevDayCloseEnd: ", prevDayCloseEnd);

    /* padding for ISO format and sets marketOpenDate*/

    const pad = num => (num < 10 ? "0" + num : num);
    const year = date.year();
    const month = pad(date.month() + 1);
    const day = pad(date.date());

    const marketOpenDate = `${year}-${month}-${day}T00:00:00.000Z`;

    /* Removes the sec & ms off of the ISOstring so that GDAX returns the timeframe request as requested */
    const currentUTCDate = currentTimeIso
      .split("")
      .slice(0, 16)
      .join("");
    const reformatcurrentUTCDate = `${currentUTCDate}Z`;

    console.log("Current Time Local: ", currentTimeLocal);
    console.log("CurrentUTCISO: ", currentTimeIso);
    console.log("MarketOpenUTCDate: ", marketOpenDate, typeof marketOpenDate);
    console.log("CurrentUTCDate:  ", reformatcurrentUTCDate, typeof currentUTCDate);

    this.setState(
      {
        marketOpen: marketOpenDate,
        currentDateTime: reformatcurrentUTCDate,
        prevDayCloseStart: prevDayCloseStart,
        prevDayCloseEnd: prevDayCloseEnd
      },
      () => this.getPriorClose()
    );
  };

  getPriorClose = () => {
    /* https://docs.gdax.com/?javascript#get-historic-rates */
    /*
      RESPONSE FORMAT - [time,low, high, open, close, volume]
    */

    const GDAX_Endpoint = "https://api.gdax.com/products";

    const params = {
      baseURL: GDAX_Endpoint,
      params: {
        start: this.state.prevDayCloseStart,
        end: this.state.prevDayCloseEnd,
        granularity: "600"
      }
    };

    const getBTC = () => Axios.get("/BTC-USD/candles", params);
    const getETH = () => Axios.get("/ETH-USD/candles", params);
    const getLTC = () => Axios.get("/LTC-USD/candles", params);

    Axios.all([getBTC(), getETH(), getLTC()].map(err => err.catch(e => e)))
      .then(
        Axios.spread((btc, eth, ltc) => {
          console.log("BTC prior: ", btc.data[0]);
          console.log("ETH prior: ", eth.data[0]);
          console.log("LTC prior: ", ltc.data[0]);
          console.log("getPriorClose Success!");
          this.setState(
            {
              priorCloseBTCUSD: btc.data[0][4],
              priorCloseETHUSD: eth.data[0][4],
              priorCloseLTCUSD: ltc.data[0][4]
            },
            () => this.getAllData()
          );
        })
      )
      .catch(err => console.log("ERROR: ", err));
  };

  getAllData = () => {
    /* https://docs.gdax.com/?javascript#get-historic-rates */
    /*
      RESPONSE FORMAT - [time,low, high, open, close, volume]
    */

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

    Axios.all([getBTC(), getETH(), getLTC()].map(err => err.catch(e => e)))
      .then(
        Axios.spread((btc, eth, ltc) => {
          console.log("getAllData Success!");
          // console.log("BTC: ", btc.data);
          // console.log("ETH: ", eth.data);
          // console.log("LTC: ", ltc.data);
          this.setState({
            marketDataBTCUSD: btc.data,
            marketDataETHUSD: eth.data,
            marketDataLTCUSD: ltc.data
          });
        })
      )
      .catch(err => console.log("ERROR: ", err));
  };

  //#endregion methods

  render() {
    // console.log("prevCloseStart: ", this.state.prevDayCloseStart);
    // console.log("prevCloseEnd: ", this.state.prevDayCloseEnd);
    // console.log("marketData[0]", this.state.marketDataBTCUSD[0]);
    return (
      <div className="market-overview-container">
        <div className="market-chart-item">
          <CandleCharts
            label={"BTC/USD"}
            data={this.state.marketDataBTCUSD}
            priorClose={this.state.priorCloseBTCUSD}
          />
        </div>
        <div className="market-chart-item">
          <CandleCharts
            label={"ETH/USD"}
            data={this.state.marketDataETHUSD}
            priorClose={this.state.priorCloseETHUSD}
          />
        </div>
        <div className="market-chart-item">
          <CandleCharts
            label={"LTC/USD"}
            data={this.state.marketDataLTCUSD}
            priorClose={this.state.priorCloseLTCUSD}
          />
        </div>
      </div>
    );
  }
}

export default MarketChart;
