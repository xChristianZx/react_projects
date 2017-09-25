import React, { Component } from "react";
import BoardListItem from "./board_list_item.js";
import Axios from "axios";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thirtyDay: [],
      allTime: []
    };
  }

  componentDidMount() {
    this.get30Day();
    this.getAllTime();
  }

  get30Day = () => {
    const thirtyDayURL =
      "https://fcctop100.herokuapp.com/api/fccusers/top/recent";

    Axios.get(thirtyDayURL)
      .then(resp => {
        console.log("30 Day:", resp.data);
        this.setState({
          thirtyDay: resp.data
        });
      })
      .catch(err => console.log("ERROR:", err));
  };

  getAllTime = () => {
    const allTimeURL =
      "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

    Axios.get(allTimeURL)
      .then(resp => {
        console.log("AllTime:", resp.data);
        this.setState({
          allTime: resp.data
        });
      })
      .catch(err => console.log("ERROR:", err));
  };

  renderList = props => {
    const boardItems = props.map((person, i) => {
      return <BoardListItem person={person} key={person.username} rank={i} />;
    });
    return (
      <table className="leaderboard-list">
        <thead>
          <tr className="board-item-header">
            <th className="board-item-rank">Rank</th>
            <th className="board-item-name">Name</th>
            <th className="board-item-alltime">Alltime</th>
            <th className="board-item-recent">Recent</th>
          </tr>
        </thead>
        <tbody>{boardItems}</tbody>
      </table>
    );
  };

  render() {
    return (
      <div className="leaderboard-container">
        {this.renderList(this.state.allTime)}
        {this.renderList(this.state.thirtyDay)}
      </div>
    );
  }
}

export default Leaderboard;
