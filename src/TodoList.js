import React, { Component } from 'react';
import TodolistForm from './TodolistForm';
import Todo from './Todo';

//This is the main/parent component
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state ={
        todolist: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  } 

  addTodo(add){
    this.setState(st =>({
        todolist :[...st.todolist, add]
    }))
  } 

  deleteTodo(id){
    this.setState(st => ({
        todolist: st.todolist.filter(todo => todo.id !== id)
    }))
  } 
  
  editTodo(id,updatedTodo){  
    const updateTodo = this.state.todolist.map(todo => {
      if(todo.id === id){
        return {...todo, todolist : updatedTodo};
      }
      return todo;  
    });
    this.setState({todolist: updateTodo});
  }

  render() {
    const todos = this.state.todolist.map(todo =>{
        return <Todo 
        key={todo.id} 
        id={todo.id} 
        task={todo.todolist} 
        delete={this.deleteTodo} 
        edits={this.editTodo}/>;
    })
    return (
        <div className='container-lg text-center '>
            <h1 className='display-4 m-4'>Todo List</h1>
            <div className='bg-light rounded p-4'>
            <ul className='list-group'>{todos}</ul>
            <TodolistForm  addTodo={this.addTodo}/>
            </div>
           
        </div>
    )
  }
}
export default Todolist;



