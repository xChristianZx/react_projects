import React from 'react';

const BoardListItem = ({person}) => {
    return (
        <div>        
             <li>
                 {person.username}
            </li>
        </div>
    );
};

export default BoardListItem;