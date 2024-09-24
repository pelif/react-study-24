import { Component } from "react";
import styles from "./Textarea.module.css";

export default class Textarea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '', 
            car: ''            
        };
        this.choosedElem = null; 
    } 
    
    componentDidMount() {
        this.choosedElem = document.querySelector('.car_content');                     
    }

    showChoosedElem = () => {
        if (this.choosedElem) {
            this.choosedElem.setAttribute('class', styles.carchoosed);
            this.choosedElem.innerHTML = this.state.car;
          }
    }

    handleChange = async (e) => {
        await this.setState({value: e.target.value});
    }

    handleChooseCar = async (e) => {
        await this.setState({car: e.target.value});
        console.log(this.state.car);
        this.showChoosedElem();
    }  


    render() {
        return (
            <div className={styles.textarea_content}>
                <h1>Textarea</h1>
                <label>Enter your Text</label> 
                <textarea
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <label>Choose your Car</label>
                <select                     
                    onChange={this.handleChooseCar}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                   
                <p>{this.state.value}</p>          

                <p className="car_content">{this.state.car}</p>      
            </div>
        );
    }
}    