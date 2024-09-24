import React, { Component } from "react";
import Comp02 from "./Comp02";


export default class Comp01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "User of Comp 01"
    };
  }

  render() {
    return (
      <>
        <h1>{`Hello ${this.state.user}!`}</h1>
        <Comp02 user={this.state.user} />
      </>
    );
  }
}


