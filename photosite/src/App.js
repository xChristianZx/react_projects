import React, { Component } from "react";
import "./App.css";
import Headline from "./Components/Headline.js";
import PhotoList from "./Components/PhotoList";
import Photos from "./Assets/photos.js";
import LightboxDisplay from "./Components/LightBox.js";

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
        {/* <PhotoList photos={this.state.photos} /> */}
      </div>
    );
  }
}

export default App;
