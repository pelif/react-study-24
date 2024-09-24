import React, { Component } from "react";


export default class Comp04 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "User of Comp 04"
    };
  }

  render() {
    return (
      <>
        <h1>{`Hello ${this.state.user}!`}</h1>        
      </>
    );
  }
}


