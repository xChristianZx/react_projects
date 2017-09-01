import React, {Component} from 'react';

class TextBox extends Component {
    constructor(props) {
        super(props);
        
        this.state = {text: 'Enter text here'};
    }

    render() {
        return (
            <div className="text-box">
                <textarea 
                value={this.state.text}
                onChange= {event => this.onInputChange(event.target.value)}
                />
            </div>
        )
    }

    onInputChange(text) {
        this.setState({text});
        
    }

}

export default TextBox;