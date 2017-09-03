import React from 'react';

const TextOutput = ({text}) => {

    return (
        <div className="text-box">
            <div className="text-area-output">{text}</div>
        </div>
    )
}

export default TextOutput;