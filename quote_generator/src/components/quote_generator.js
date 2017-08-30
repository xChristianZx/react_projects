import React, {Component} from 'react';

const quotes = ["WEEEEEE", "Foo", "BAR", "BAZINGA"];
const author = ["Me", "Myself", "Irene", "Sheldon"];

class Generator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: 1
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
            <div>
                <div className="display">
                    <p>{quotes[this.state.number]}</p>
                    <p>{author[this.state.number]}</p>
                </div>
                <button type="submit" className="button" onClick={this.handleClick}>Next!</button>
            </div>
        )
    }
}

export default Generator;