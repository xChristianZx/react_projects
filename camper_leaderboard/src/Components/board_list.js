import React from "react";
import BoardListItem from "./board_list_item.js";

const BoardList = ({ props, handleAllTimeClick, handleRecentClick }) => {
  const boardItems = props.map((person, i) => {
    return <BoardListItem person={person} key={person.username} rank={i} />;
  });
  return (
    <table className="leaderboard-table">
      <thead>
        <tr className="board-item-header">
          <th className="board-item-rank">Rank</th>
          <th className="board-item-image-spacer"></th>
          <th className="board-item-name-container">Name</th>
          <th
            className="board-item-alltime"
            onClick={() => handleAllTimeClick()}
          >
            Alltime
          </th>
          <th className="board-item-recent" onClick={() => handleRecentClick()}>
            Recent
          </th>
        </tr>
      </thead>
      <tbody>{boardItems}</tbody>
    </table>
  );
};

export default BoardList;
