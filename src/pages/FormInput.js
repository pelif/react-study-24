import { Component } from "react";
import styles from "./FormInput.module.css";

export default class FormInput extends Component {

    constructor(props) {
      super(props);
      this.state = {
        inputs: {}
      };
    }
  
    handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState(prevState => ({
        inputs: { ...prevState.inputs, [name]: value }
      }));
    }
  
    handleSubmit = (e) => {
      e.preventDefault();

      let Elem = document.querySelector('#result');     
      
      Elem.innerHTML = JSON.stringify(
              this.state.inputs, 
              null, 
              2);               
      
    }
  
    render() {
      return (
        <>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your name:
            <input 
              type="text" 
              name="username" 
              value={this.state.inputs.username || ""} 
              onChange={this.handleChange}
            />
          </label>
          <br></br><br></br>
          <label>Enter your age:
            <input 
              type="number" 
              name="age" 
              value={this.state.inputs.age || ""} 
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" />
        </form>
        <p id="result" className={styles.result}></p>
        </>
      );
    }

  }