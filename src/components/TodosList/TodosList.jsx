import React, { Component } from 'react';

class TodosList extends Component {
    state = {  } 


    render() { 
        let todos= this.props.todos;
        let deleteTodo = this.props.deleteTodo;
        return (
            <div className="todos-list container mt-5 p-2">
                {
                    todos.map(function(todoObject){
                       return (
                        <div key={todoObject.id} className="todo d-flex mb-4">
                            <div className="form-control">{todoObject.todo}</div>
                            <button className="btn btn-danger" 
                            onClick={()=>deleteTodo(todoObject.id)}>Delete</button>
                        </div>
                       )
                    })
                }               
            </div>
        );
    }
}
 
export default TodosList;