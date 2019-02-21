import React, { Component } from 'react';
import logo from './global/images/logo.svg';
import './global/css/App.css';
import { todos } from './todos.json'
import NewCard from './TodoForm.js'

console.log(todos)

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    this.handelAddTodo = this.handelAddTodo.bind(this)
  }
  handelAddTodo(todo){
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }
  removeTodo(index){
    if(window.confirm('Seguro de Elimiar?'))
    {
      this.setState({
        todos: this.state.todos.filter((e,i)=>{
          return i !== index
        })
      })
    }
  }
  render() {
    const todos = this.state.todos.map((todo, i)=>{
      return(
        <div key={i} className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsable}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger"
                      onClick={this.removeTodo.bind(this,i)}  
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <a className="text-white" href="./">task
            <span className="badge bagde-bill badge-light ml-2">
              {this.state.todos.length}
            </span></a>
          </nav>
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-3">
                <img src={logo} className="App-logo" alt="logo" />
                <NewCard onAddTodo={this.handelAddTodo}/>
              </div>
              <div className="col-md-9">
                <div className="row">
                  {todos}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
