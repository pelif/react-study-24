import React, { Component } from "react";
import Component3 from "./CompContext03";
import UserContext from "../context/UserContext";

export default class Component2 extends Component {

    static contextType = UserContext;    


    render() {      

        const user = this.context;     
       
        return (
            <>
                <h1>Component 2</h1>                                
                <h2>{`Hello ${user}!`}</h2>
                <Component3 />
            </>
        );
    }
}
