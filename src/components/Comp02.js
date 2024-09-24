import React, { Component } from "react";
import Comp03 from "./Comp03";


export default class Comp02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "User of Comp 02"
    };
  }

  render() {
    return (
      <>
        <h1>{`Hello ${this.state.user}!`}</h1>
        <Comp03 user={this.state.user} />
      </>
    );
  }
}


