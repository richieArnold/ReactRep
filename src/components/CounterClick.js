import React, { Component } from "react";

class CounterClick extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = (event) => {
    let count = this.state.count;
    this.setState({
      count: count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>I have clicked {this.state.count} times</h1>
        <button onClick={this.handleClick}>Count</button>
      </div>
    );
  }
}

export default CounterClick;
