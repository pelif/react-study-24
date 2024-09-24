import React, { Component } from "react";
import Comp04 from "./Comp04";


export default class Comp03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "User of comp 03"
    };
  }

  render() {
    return (
      <>
        <h1>{`Hello ${this.state.user}!`}</h1>
        <Comp04 user={this.state.user} />
      </>
    );
  }
}


