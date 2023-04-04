import React, { Component } from 'react';
import uuid from 'react-uuid';

class TodolistForm extends Component {
    constructor(props) {
        super(props);
        this.state = {todolist : ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        //to import uuid in state 
        const listid = {...this.state, id: uuid()};
        this.props.addTodo(listid)
        this.setState({todolist : ""});
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

  render() {
    return (
        <div className='col justify-content-center mt-4'>
            <form  onSubmit={this.handleSubmit}>
              <input 
              className='form-control mt-2' 
              name='todolist' 
              value={this.state.todolist} 
              onChange={this.handleChange} 
              placeholder='Enter something' 
              />
              <button className='btn btn-danger pr-4 pl-4 pt-2 pb-2 m-4'>Add to the list</button>
            </form>
        </div>
    )
  }
}
export default TodolistForm;





