import { Component } from "react";
import Component1 from "./CompContext01";

export default class FirsComp extends Component {

    render() {
        return (
            <>
                <h1>Hello {this.props.name}</h1>
                <Component1 />
            </>
        );
    }
}
