import React, { Component } from 'react';
import './App.css';
import Headline from './Components/headline.js';
import PhotoList from './Components/photo_list.js';
import Photos from './Assets/photos.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
    }
    
    this.componentDidMount = this.componentDidMount.bind(this);

    console.log(typeof Photos);
  }
  componentDidMount() {
    this.setState({
      photos: Photos,
    })
  }
  
  render() {
    return (
      <div className="App">
        <Headline />
        <PhotoList photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
