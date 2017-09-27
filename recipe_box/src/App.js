import React, { Component } from 'react';
import './App.css';
import ButtonExampleButton from './Components/test.js';
import AccordionExampleStyled from './Components/accordion.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonExampleButton />  
        <AccordionExampleStyled />      
      </div>
    );
  }
}

export default App;
