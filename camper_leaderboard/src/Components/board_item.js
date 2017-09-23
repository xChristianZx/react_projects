import React from "react";

const BoardListItem = ({ person }) => {
  return (
    <div>
      <li>
        <h4>{person.username}</h4>
        <img src={person.img} width="75px" height="100px" />
        <p>{person.alltime}</p>
        <p>{person.recent}</p>
      </li>
    </div>
  );
};

export default BoardListItem;
