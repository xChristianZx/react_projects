import React, { Component } from 'react';
import './App.css';
import Headline from './Components/headline.js';
import PhotoList from './Components/photo_list.js';
import Photos from './Assets/photos.js';
import LightboxDisplay from './Components/lightbox.js';
import Gallery from './Components/gallery.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
    }
    // console.log(typeof Photos);
  }

  componentDidMount = () => {
    this.setState({
      photos: Photos,
    })
  }
  
  render() {
    return (
      <div className="App">
        <Headline />
        <LightboxDisplay images={this.state.photos} />
        {/* <PhotoList photos={this.state.photos} /> */}
        {/* <Gallery images={this.state.photos}/> */}
      </div>
    );
  }
}

export default App;
