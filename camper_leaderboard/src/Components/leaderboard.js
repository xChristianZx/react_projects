import React, { Component } from "react";
import BoardList from "./board_list.js";
import Axios from "axios";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thirtyDay: [],
      allTime: [],
      currentList: []
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
          thirtyDay: resp.data,
          currentList: resp.data
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

  handleAllTimeClick = () => {
    this.setState({ currentList: this.state.allTime });
  };

  handleRecentClick = () => {
    this.setState({ currentList: this.state.thirtyDay });
  };

  renderList = props => {
    return (
      <BoardList
        props={props}
        handleAllTimeClick={this.handleAllTimeClick}
        handleRecentClick={this.handleRecentClick}
      />
    );
  };

  render() {
    return (
      <div className="leaderboard-container">
        {this.renderList(this.state.currentList)}
      </div>
    );
  }
}

export default Leaderboard;
