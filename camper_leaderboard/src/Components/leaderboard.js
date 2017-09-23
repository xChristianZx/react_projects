import React, { Component } from "react";
import BoardListItem from "./board_item.js";
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
    const boardItems = props.map(person => {
      return <BoardListItem person={person} key={person.username} />;
    });
    return <ul>{boardItems}</ul>;
  };

  render() {
    return <div>{this.renderList(this.state.allTime)}</div>;
  }
}

export default Leaderboard;
