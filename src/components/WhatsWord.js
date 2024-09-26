import { Component } from "react";
import JSConfetti from "js-confetti";

import styles from "./WhatsWord.module.css";

export default class WhatsWord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameStarted: false,             
            points: 0, 
            chances: 5, 
            gameEnded: false, 
            errors: 0, 
            word: '',
            category: '',            
            arrayWord: [], 
            letter: '', 
            letterHits: [], 
            positionHits: [], 
            win: false 
        };
                
    }

    startGame = async () => {

        let arrayResult = await this.getWords();        
     
        const randomRow = arrayResult[Math.floor(Math.random() * arrayResult.length)];
        const categoryRow = randomRow.categoryId;
        const randomWord = randomRow.name;

        const category = await this.getCategory(categoryRow);
               
        this.setState({ 
            gameStarted: true, 
            word: randomWord, 
            category: category.name,
            arrayWord: Array.from(randomWord)
        }, () => {
            console.log(this.state.word, this.state.category, this.state.arrayWord);
        });        
        
    }

    getWords = async () => {
        let data = await fetch('http://localhost:3001/words')
            .then(res => res.json())            
            .catch(error => console.log(error)); 

        return data;  
    }

    getCategory = async (catagoryId) => {
        let data = await fetch(`http://localhost:3001/categories/${catagoryId}`)
            .then(res => res.json())            
            .catch(error => console.log(error));

        return data;
    }

    handleLetter = (e) => {
       this.setState({
           letter: e.target.value
       }); 
    }

    checkLetter = () => {
        let { letter, word } = this.state;
        let position = -1; 
        const positions = []; 
        if(letter.length > 0) {
            letter = letter.toLowerCase();
            word = word.toLowerCase();

            if(word.includes(letter)) {    

                while((position = word.indexOf(letter, position + 1)) !== -1) {
                    positions.push(position);
                }               

                this.setState({
                    points: this.state.points + 10,
                    letter: '',
                    letterHits: [...this.state.letterHits, ...letter], 
                    positionHits: [...this.state.positionHits, ...positions]
                }, () => {
                    console.log(this.state.chances, this.state.errors);    
                });

                
            } else {
                this.setState({
                    errors: this.state.errors + 1,
                    chances: this.state.chances - 1,
                    letter: ''                    
                }, () => {
                    this.checkWin();
                });
            }
        }

        this.checkGame();        
    }

    checkGame = () => {        
        if(this.state.positionHits.length === (this.state.arrayWord.length-1)) { 
            this.setState({
                gameEnded: true, 
                win: true
            }, () => {
                console.log(this.state.positionHits);
            });

            this.confettiEffect();                    
        }
    }

    checkWin = () => {
        if(this.state.chances === 0 && this.state.errors === 5) {
            this.setState({
                gameEnded: true, 
                win: false
            }, () => {
                console.log(this.state.chances, this.state.errors);
            });           
        }        
    }

    async showConffeti() {
        const jsConfetti = new JSConfetti();
        await jsConfetti.addConfetti();
        for(let i = 0; i < 5; i++) {            
            await setTimeout(this.showConffeti, 700);
        }
    }

    confettiEffect = async () => {
        await this.showConffeti();                    
    }

    render() {
        return (
            <div className="container text-center mt-3 d-flex justify-content-center">
                <div className="row align-items-start">                    
                    <h1>WhatsWord</h1>
                    { this.state.gameStarted === false && ( 
                        <div className="col-12">                        
                            <div className="alert alert-dark bg-dark text-light mx-3 my-3" role="alert">
                                <p>O jogo consistem em acertar a palavra da dica</p>
                                <p>Será indicada uma categoria como pista ...</p>
                                <p>Voce tem 5 chances</p>
                                <p>Se acertar a palavra, ganha 10 pontos</p>
                                <p>Se errar, perde 5 pontos</p>
                                <p>Se errar 5 vezes, perde o jogo</p>                        
                            </div>
                            <button 
                                className="btn btn-success py-3 px-2 fs-4 fw-bold w-100"
                                onClick={this.startGame}>
                                Jogar {'>>'}
                            </button>
                        </div>
                    )}

                    { this.state.gameStarted && !this.state.gameEnded && ( 
                        <div className="col-12">
                            <div className="alert alert-dark bg-dark text-light mx-3 my-3" role="alert">                                
                                <p><strong>Categoria / Dica:</strong> {this.state.category}</p>                                
                                <p><strong>Tentativas: </strong> {this.state.chances}</p>
                                <p><strong>Pontos: </strong> {this.state.points}</p>
                                <p><strong>Erros: </strong> {this.state.errors}</p>
                            </div>
                            <div className="d-flex my-3 justify-content-center">
                            {this.state.chances > 0 && this.state.arrayWord.map((word, index) => (
                                <div 
                                    id="letter"
                                    key={index}
                                    className={`border px-5 py-5 me-1 fs-2 ${this.state.positionHits.includes(index) ? 'border-success border-3' : 'bg-light border-secondary-subtle border-1'} `}>
                                    {this.state.positionHits.includes(index) ? this.state.arrayWord[index] : ''}                                        
                                </div>
                            ))}
                            </div>
                            <div className="d-flex my-3 justify-content-center">
                                <div className="form-group d-flex">
                                    <input 
                                        type="text" 
                                        id="guess"
                                        className="form-control px-5 py-3" 
                                        value={this.state.letter}
                                        onChange={this.handleLetter} 
                                        maxLength={1}
                                        placeholder="Digite uma letra" />

                                    <button 
                                        className="btn btn-primary ms-3 fw-bold"
                                        onClick={this.checkLetter}>
                                            Tentar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )} 

                    { this.state.gameEnded && (
                        <div className="col-12">
                            {this.state.win && <h3 className="text-success">Parabens! voce acertou a palavra!</h3>}
                            {!this.state.win && <h3 className="text-danger">Voce perdeu!</h3>}
                            <h4>A palavra era: {this.state.word}</h4>
                            <p>Tentativas: {this.state.chances}</p>
                            <p>Pontos: {this.state.points}</p>
                            <p>Erros: {this.state.errors}</p>                            
                        </div>    
                    )}   
                </div>
            </div>
        );
    }
} 