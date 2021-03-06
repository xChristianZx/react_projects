import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Navbar from "./Components/Navbar/Navbar";
import MarketChart from "./Components/MarketOverview/Market_Chart";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Navbar />
        <MarketChart />
        <Footer />
      </div>
    );
  }
}
export default App;
