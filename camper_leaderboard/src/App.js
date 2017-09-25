import React, { Component } from 'react';
import './App.css';
import Header from './Components/header.js'
import Leaderboard from './Components/leaderboard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Leaderboard />
      </div>
    );
  }
}

export default App;
