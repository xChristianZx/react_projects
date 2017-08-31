import React, {Component} from 'react';

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

class Generator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: 0
        };

        this.handleClick = this
            .handleClick
            .bind(this);
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
                    <p className="quote">{quotes[this.state.number].quote}</p>
                    <p className="author">~ {quotes[this.state.number].author}</p>
                </div>
                <button type="submit" className="button" onClick={this.handleClick}>Next!</button>
            </div>
        )
    }
}

export default Generator;