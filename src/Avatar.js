import React, { Component } from "react";
import "./Avatar.css";
import "tachyons";
// avatar details
import displayList from "./AvatarDetails";

class Avatar extends Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome to Avatar World!",
    };
  }
  cngName() {
    this.setState({
      name: "Welcome to Imran First React Webpage!",
    });
  }
  render() {
    return (
      <div className="tc mainpage">
        <h1 className="welcomeText">{this.state.name}</h1>
        {displayList}
        <button
          className="db center mt4 bg-light-purple btn"
          onClick={() => this.cngName()}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default Avatar;
