import React, { Component } from "react";
import "./App.css";
import quotes from "./components/quote_list";
import Generator from "./components/quote_generator.js";
import Twitter from "./components/twitter_button.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
  }

  handleClick = () => {
    const max = quotes.length;
    const random = () => {
      return Math.floor(Math.random() * (max - 0)) + 0;
    };
    this.setState({ number: random() });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Generator
            quotes={quotes}
            number={this.state.number}
            handleClick={this.handleClick}
          />
          <Twitter quotes={quotes} number={this.state.number} />
        </div>
      </div>
    );
  }
}

export default App;
