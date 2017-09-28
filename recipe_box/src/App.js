import React, { Component } from "react";
import "./App.css";
// import AccordionExampleStyled from './Components/accordion.js';
import InputForm from "./Components/input-form.js";
import { Container } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  render() {
    return (
      <div className="App">
        <InputForm />
        <Container>
          TESTING TESTING
        </Container>
      </div>
    );
  }
}

export default App;
