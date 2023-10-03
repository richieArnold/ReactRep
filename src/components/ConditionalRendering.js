import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      name1: "Batman",
      name2: "Superman",
      toggle: true,
    };
  }

  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    if (this.state.toggle) {
      return (
        <div>
          <h1>My name is {this.state.name1}</h1>
          <button onClick={this.handleClick}>Change Name</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>My name is {this.state.name2}</h1>
          <button onClick={this.handleClick}>Change Name</button>
        </div>
      );
    }
  }
}

export default ConditionalRendering;
