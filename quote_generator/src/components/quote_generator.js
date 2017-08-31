import React from 'react';

const Generator = (props) => {

    return (
        <div>
            <div className="display">
                <p className="quote">{props.quotes[props.number].quote}</p>
                <p className="author">~ {props.quotes[props.number].author}</p>
            </div>
            <button className="button" onClick={props.handleClick}>Next!</button>
        </div>
    )
}

export default Generator;