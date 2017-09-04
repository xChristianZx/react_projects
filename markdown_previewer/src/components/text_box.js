import React, {Component} from 'react';

class TextBox extends Component {
    constructor(props) {
        super(props);
        
        this.state = {text: ''};
    }

    render() {
        return (
            <div className="text-box-input">
                <textarea className="text-area-input" placeholder="Enter text here"
                value={this.state.text}
                onChange= {event => this.onInputChange(event.target.value)}
                />
            </div>
        )
    }

    onInputChange(text) {
        this.setState({text});
        this.props.onTextBoxChange(text);
    }

}

export default TextBox;