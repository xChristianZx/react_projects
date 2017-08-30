import React, {Component} from 'react';
import './App.css';
import Generator from './components/quote_generator.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Generator /></div>
      </div>
    );
  }
}

export default App;
