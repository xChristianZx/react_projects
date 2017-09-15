import React, { Component } from 'react';
import './App.css';
import Header from './Components/header.js';
import Navbar from './Components/navbar.js';
import MarketChart from './Components/market_chart.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <MarketChart />
      </div>
    );
  }
}

export default App;
