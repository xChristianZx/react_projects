import React, {Component} from 'react';
import './App.css';
import TextBox from './components/text_box.js';
import TextOutput from './components/text_output.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Markdown Previewer with React</h2>
        <div>
          <TextBox />
          <TextOutput />
          
        </div>
      </div>
    );
  }
}

export default App;
