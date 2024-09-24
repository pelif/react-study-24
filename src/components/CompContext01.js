import React, { Component } from "react";
import UserContext from "../context/UserContext";
import Component2 from "./CompContext02";

export default class Component1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: "Jonhy Cash"
        };
      }

      render() {
        return (
          <UserContext.Provider value={this.state.user}>
            <h1>{`Hello ${this.state.user}!`}</h1>
            <Component2 />
          </UserContext.Provider>
        );
      }
}