import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
            super(props);
            this.state ={
                isEditing:false,
                todolist: [this.props.task]
            }
            this.handleChange = this.handleChange.bind(this);
            this.toggleEdit = this.toggleEdit.bind(this);
            this.handleDelete = this.handleDelete.bind(this);
            this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleDelete(){
        this.props.delete(this.props.id);
    }
    toggleEdit(){
        this.setState({isEditing: !this.state.isEditing});
    }
    handleUpdate(e){
        e.preventDefault();
        this.props.edits(this.props.id , this.state.todolist);
        this.setState({isEditing: false});
    }
    render(){
      //conditional to toggle the edit form 
        let results;
        if(this.state.isEditing){
            results = (
            <form  onSubmit={this.handleUpdate}>
                <div className="row m-2">
                    <div className="col-10">
                        <input type="text" 
                        id="inline-form-email" 
                        className="form-control"  
                        name='todolist' 
                        value={this.state.todolist} 
                        onChange={this.handleChange}
                        />
                    </div>
                        <button className='col-2 btn btn-outline-secondary'>Save</button>
                </div>
            </form>
            )
        }else{
            results =(
            <div className='container-fluid '>
                <div className="col input-group m-2 ">
                    <li className='overflow-auto  form-control list-group-item'>
                        {this.props.task}
                    </li>
                    <div className="input-group-append">
                        <button onClick={this.toggleEdit} className="btn btn-outline-secondary" type="button">Edit</button>
                        <button onClick={this.handleDelete} className="btn btn-outline-secondary" type="button">Delete</button>
                    </div>
                </div>
            </div>
            )
        }
        return results;
    }
}

export default Todo;
