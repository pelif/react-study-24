import { Component } from "react";

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0
        }; 
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleAgeChange = (e) => {
        this.setState({
            age: this.state.age + 1
        });
    }


    render() {
        return (
            <>
                <input 
                    type="text" 
                    value={this.state.name} 
                    onChange={this.handleNameChange} 
                />

                <button 
                    onClick={this.handleAgeChange}>
                    Increment Age
                </button>

                <p>Hello, {this.state.name}. You are {this.state.age}</p>                
            </>
        );
    }
}