import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import RecipeAccordion from "./Components/RecipeAccordion/RecipeAccordion";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RecipeAccordion />
      </div>
    );
  }
}

export default App;
