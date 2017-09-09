import React, { Component } from 'react';
import './App.css';
import Headline from './Components/headline.js';
import PhotoList from './Components/photo_list.js';
import Photos from './Assets/photos.js';
import LightboxDisplay from './Components/lightbox.js';
import Gallery from './Components/gallery.js';
import Lightbox from 'react-images';

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
        {/* <PhotoList photos={this.state.photos} /> */}
        <Gallery images={this.state.photos}/>
        {/* <LightboxDisplay images={this.state.photos} photos={this.state.photos} /> */}
        {/* <Lightbox images={this.state.photos} /> */}
      </div>
    );
  }
}

export default App;
