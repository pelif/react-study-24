import React from "react";
import UserContext from "../context/UserContext";


export default class Component4 extends React.Component {

    static contextType = UserContext;

    render() {
      const user = this.context;
  
      return (
        <>
          <h1>Component 4</h1>
          <h2>{`Hello ${user} again!`}</h2>
        </>
      );
    }
}
  
