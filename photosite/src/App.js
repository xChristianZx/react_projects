import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Photos from "./Assets/photos.js";
import LightboxDisplay from "./Containers/LightBox/LightBox";

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
        <Header />
        <LightboxDisplay images={this.state.photos} />
        <Footer />
      </div>
    );
  }
}

export default App;
