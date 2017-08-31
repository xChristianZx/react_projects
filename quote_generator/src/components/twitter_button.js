import React from 'react';

const Twitter = (props) => {
    const quote = props.quotes[props.number].quote;
    const author = props.quotes[props.number].author;
    const currentQuote = `${quote} ~ ${author}`;

    function createTweet (quotes, author) {
        window.open("https://twitter.com/intent/tweet?&text=" + encodeURIComponent(currentQuote));
    }

    return (
        <div>
            <button className="twitter-button" onClick={createTweet}>Tweet it!</button>
        </div>
    )
}

export default Twitter;