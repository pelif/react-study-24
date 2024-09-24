import { Component } from "react";
import FirstComp from "../components/FirstComp";
import DivComponents from "../components/DivComponents";

export default class Components extends Component {
    render() {
        return (
            <>
                <h1>Components Study</h1>
                <FirstComp />
                <DivComponents />
            </>
        );
    }
}
