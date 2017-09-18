import React, {Component} from 'react';
import './App.css';
import TextBox from './components/text_box.js';
import TextOutput from './components/text_output.js';
import Marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: '',
    }

    this.handleTextBoxChange = this.handleTextBoxChange.bind(this);    
  }
  
  handleTextBoxChange(text) {
    Marked.setOptions({
      renderer: new Marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });

    const markedChange = Marked(text);

    this.setState({
      display: markedChange,
    });
  }

  render() {
    return (
      <div className="App">
        <h2 className="header">Markdown Previewer with React</h2>       
        <div className="main-container">
          <TextBox onTextBoxChange={this.handleTextBoxChange} />
          <TextOutput text={this.state.display}/>   
        </div>
      </div>
    );
  }
}

export default App;