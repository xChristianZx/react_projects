import React from "react";

const BoardListItem = ({ person, rank }) => {
  return (
    <tr className="board-item">
      <td className="board-item-rank">{rank + 1}</td>
      <td>
        <img
          className="board-item-img"
          src={person.img}
          alt={person.username}
          width="75px"
          height="100px"
        />
      </td>
      <td className="board-item-name">{person.username}</td>
      <td className="board-item-alltime">{person.alltime}</td>
      <td className="board-item-recent">{person.recent}</td>
    </tr>
  );
};

export default BoardListItem;
