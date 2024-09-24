import { Component } from "react";

export default class TodoList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            todos: [], 
            done: [], 
            task: ''
        };
    }

    addTaskTodo = (e) => {
        e.preventDefault();       

        this.setState(prevState => ({
            todos: [...prevState.todos, this.state.task]
        }));

        this.setState({task: ''});
    }

    removeTaskTodo = (e) => {
        const task = e.target.getAttribute('item');

        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo !== task)
        }));
    }

    addTaskToDone = (e) => {
        const task = e.target.getAttribute('item');

        this.setState(prevState => ({
            done: [...prevState.done, task]
        }));

        this.removeTaskTodo(e);
    }

    removeTaskDone = (e) => {
        const task = e.target.getAttribute('item');

        this.setState(prevState => ({
            done: prevState.done.filter(done => done !== task)
        }));
    }

    backTaskToTodo = (e) => {

        const task = e.target.getAttribute('item');

        this.setState(prevState => ({
            todos: [...prevState.todos, task]
        }));

        this.removeTaskDone(e);
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        });        
    }

    render() {
       return (
           <div className="container text-center mt-3">
                <h1>Todo List</h1>
                <div className="form-group p-5 me-3 d-flex">
                    <input 
                        type="text" 
                        id="task"
                        className="form-control form-control-lg w-75 px-5 py-3" 
                        value={this.state.task}
                        onChange={this.handleChange}
                        placeholder="Enter your task" />

                    <button 
                        className="btn btn-primary ms-3 fw-bold"
                        onClick={this.addTaskTodo}>
                            Add
                    </button>    
                </div>
                <div className="row align-items-start">
                    <div className="col-5 ms-5 p-3 bg-light border border-secondary-subtle">
                        <h4 className="fw-bold">Todo</h4>
                        <ul className="list-group">
                            {this.state.todos.length > 0 && this.state.todos.map((todo, index) => (
                                <li className="list-group-item mt-2 text-xs" key={index}>
                                    <span>{todo}</span>
                                    <div className="btn-group d-flex float-end">
                                        <button 
                                            item={todo} 
                                            onClick={this.removeTaskTodo}
                                            className="btn btn-xs btn-sm btn-outline-danger float-end small">
                                                X
                                        </button>
                                        <button
                                            item={todo} 
                                            onClick={this.addTaskToDone}
                                            className="btn btn-xs btn-sm btn-outline-primary float-end me-2">
                                                {'>>'} 
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-5 ms-5 p-3 bg-light border border-secondary-subtle">
                        <h4 className="fw-bold">Done</h4>
                        <ul className="list-group">
                            {this.state.done.length > 0 && this.state.done.map((done, index) => (
                                <li className="list-group-item mt-2 text-xs" key={index}>
                                    <span>{done}</span>      
                                    <div className="btn-group d-flex float-end">
                                        <button 
                                            item={done} 
                                            onClick={this.removeTaskDone}
                                            className="btn btn-xs btn-sm btn-outline-danger float-end small">
                                                X
                                        </button>     
                                        <button
                                            item={done}
                                            value={done} 
                                            className="btn btn-xs btn-sm btn-outline-primary float-end me-2" 
                                            onClick={this.backTaskToTodo} >
                                                {'<<'} 
                                        </button>                                
                                    </div>                             
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
           </div>
       ); 
    }

}