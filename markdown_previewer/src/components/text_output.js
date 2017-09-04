import React from 'react';

const TextOutput = ({text}) => {
    const setInnerHTML = () => {
        return {__html: text};
    }
    
    return (
        <div className="text-box-output">
            <div className="text-area-output">
                <span dangerouslySetInnerHTML={setInnerHTML()} />
            </div>
        </div>
    )
}

export default TextOutput;