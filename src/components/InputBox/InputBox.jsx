import React, { Component } from 'react';

class InputBox extends Component {
    state = { 
        value:""
    } 

    handleInputChange=(e)=>{
        let keyData = e.target.value;
        this.setState({ value:keyData });
    }

    handleAddTodo =(e)=>{
        let todo = this.state.value;
        this.props.addTodo(todo);
        this.setState({ value: ""})
    }

    render() { 
        let todoValue = this.state.value;
        let handleInputChange = this.handleInputChange;
        let handleAddTodo = this.handleAddTodo;
        return (
            <div className ="container input-box d-flex mt-5">
                <input 
                type="text" 
                onChange={handleInputChange}
                className="form-control m-1" 
                value={todoValue} 
                placeholder="Add your Todo ..."/>
                <button className="btn btn-primary " onClick ={handleAddTodo}>ADD</button>
            </div>
        );
    }
}
 
export default InputBox;