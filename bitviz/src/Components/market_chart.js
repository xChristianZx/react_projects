import React, { Component } from "react";
import Axios from "axios";

var Client = require("coinbase").Client;
var client = new Client({
  apiKey: "API KEY",
  apiSecret: "API SECRET",
  strictSSL: false
});

class MarketChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marketOpen: '',
      currentDateTime: ''
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
    const pad = (num) => (num < 10) ? '0' + num: num;

    const year = date.getUTCFullYear();
    const month = pad(date.getUTCMonth()+1);
    const day = pad(date.getUTCDate());
    
    console.log(
      "Current Time:",
      currentTime, typeof currentTime,
      '\nCurrentIso',
      currentTimeIso, typeof currentTimeIso
    );

    const marketOpenDate = `${year}-${month}-${day}T00:00:00Z`;
    const currentUTCDate = currentTimeIso
    
    console.log('currentUTCDate',currentUTCDate, typeof currentUTCDate);
    console.log('previousUTCDate',marketOpenDate, typeof marketOpenDate);

    this.setState({
        marketOpen: marketOpenDate,
        currentDateTime: currentUTCDate
    });
      setTimeout(this.getData, 3000)  
  };

  getData = () => {
    const BFX_URL = "https://api.coinbase.com/v2/prices/spot?currency=USD";
    const GDAX_Endpoint = "https://api.gdax.com";

    // client.getSpotPrice({ currencyPair: "BTC-USD" }, function(err, price) {
    //   err ? console.log("ERROR:", err) : console.log(price);
    // });

    // client.getCurrencies(
    //   (err, currencies) =>
    //     err ? console.log("Error", err) : console.log(currencies)
    // );

    // Axios.get(BFX_URL)
    //   .then(response => console.log(response))
    //   .catch(err => console.log("ERROR: ", err));

    // Axios.get("/products", {
    //   baseURL: GDAX_Endpoint
    // })
    //   .then(response => console.log("Product List: ", response))
    //   .catch(err => console.log("ERROR: ", err));

    Axios.get("/products/BTC-USD/candles", {
      baseURL: GDAX_Endpoint,
      params: {
        start: this.state.marketOpen,//"2017-09-17T00:00:00Z",
        end:  this.state.currentDateTime,//"2017-09-17T20:03:28Z",
        granularity: "600"
      }
    })
      .then(response => console.log("Historic Rates: ", response))
      .catch(err => console.log("ERROR: ", err));
  };

  render() {
    return (
      <div className="temp-container">
        <div className="market-chart-item" />
        Market Data Here!
      </div>
    );
  }
}

export default MarketChart;
