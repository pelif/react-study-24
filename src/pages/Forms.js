import { Component } from "react"

export default class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            document: ''
        };
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleDocumentChange = (e) => {
        this.setState({
            document: e.target.value
        });
    }


    render() {
        return (
            <>
                <h1>Forms Studies 01</h1>
                <form>
                    <label>Enter your name: 
                        <input 
                            type="text" 
                            value={this.state.name} 
                            onChange={this.handleNameChange} 
                        />
                    </label>

                    <label>Enter your document: 
                        <input 
                            type="text" 
                            value={this.state.document} 
                            onChange={this.handleDocumentChange} 
                        />
                    </label>
                </form>
                <p>
                    Hello, <strong>{this.state.name}</strong>. Your document is <strong>{this.state.document}</strong>
                </p>
                
            </>
        );
    }
}