import React, { Component } from 'react';

class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            title:"",
            responsable:"",
            description:"",
            priority:"baja",
        }
        this.mike = this.mike.bind(this)
        this.handelsubmit = this.handelsubmit.bind(this)
    }
    mike(e)
    {
        const { value, name } = e.target
        this.setState(
            {
                [name]: value
            }
        )
        console.log(this.state)
    }
    handelsubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state)
    }
    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handelsubmit}>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="title"
                            onChange={this.mike}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="responsable"
                            className="form-control"
                            placeholder="responsable"
                            onChange={this.mike}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="description"
                            onChange={this.mike}
                        />
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control" onChange={this.mike}>
                            <option value="Baja" className="form-control">Baja</option>
                            <option value="Mediana" className="form-control">Mediana</option>
                            <option value="Alta" className="form-control">Alta</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit"
                            name="description"
                            className="form-control btn btn-success"
                            vaule="Enviar"
                        />
                    </div>
                </form> 
            </div>
        )
    }
}

export default TodoForm;