import React, {Component} from 'react';
import './App.css';
import Generator from './components/quote_generator.js';
import Twitter from './components/twitter_button.js';

const quotes = [
  {
      quote: `“If you cannot do great things, do small things in a great way.”`,
      author: "Napoleon Hill"
  }, {
      quote: `“Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don't belong.”`,
      author: "Mandy Hale"
  },
  {
      quote: `"The best way to predict the future is to create it.”`,
      author:'Peter Drucker'
  },
  {
      quote: `“Ask how something can be done rather than say it can't be done."`,
      author: 'Bo Bennett'
  }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        number: 0
    };

    this.handleClick = this.handleClick.bind(this);
}
  
handleClick() {
  const max = quotes.length;
  const random = () => {
      return Math.floor(Math.random() * (max - 0)) + 0;
  }
  console.log(random());

  this.setState({number: random()})
}
  
  render() {
    return (
      <div className="App">
        <div>
          <Generator 
            quotes={quotes} 
            number={this.state.number} 
            handleClick={this.handleClick}
          />
          <Twitter 
            quotes={quotes} 
            number={this.state.number}
          />
        </div>
      </div>
    );
  }
}

export default App;
