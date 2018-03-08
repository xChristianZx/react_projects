import React, { Component } from "react";
import "./App.css";
import Headline from "./Components/Headline.js";
import Photos from "./Assets/photos.js";
import LightboxDisplay from "./Containers/LightBox.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  componentDidMount = () => {
    this.setState({
      photos: Photos
    });
  };

  render() {
    return (
      <div className="App">
        <Headline />
        <LightboxDisplay images={this.state.photos} />
      </div>
    );
  }
}

export default App;
