import React, { Component } from "react";

class ClassComponent extends Component {
  // stateful component
  constructor() {
    super();
    this.state = {
      name: "Harry Potter",
      age: 25,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      name: "Raju",
      age: 30,
    }); // this is referring to current object
  }
  render() {
    return (
      <div>
        <h1>
          Hi my name is {this.state.name} and I am {this.state.age} years old
        </h1>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    );
  }
}

export default ClassComponent;
