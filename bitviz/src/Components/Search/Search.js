import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert(
      `Congratulations, you searched for ${this.state.text}.\nToo bad I haven't built out this function yet. Maybe next time...`
    );
    this.setState({ text: "" });
  };
  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.handleSubmit}>
          <input
            className="search-input"
            placeholder="BTC/USD, ETH/USD..."
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </form>
      </div>
    );
  }
}

export default Search;
