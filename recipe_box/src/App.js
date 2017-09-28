import React, { Component } from 'react';
import './App.css';
import AccordionExampleStyled from './Components/accordion.js';
import InputForm from './Components/input-form.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: localStorage,
    }
  }
  
  
  render() {
    return (
      <div className="App">
        <InputForm />
      </div>
    );
  }
}

export default App;
