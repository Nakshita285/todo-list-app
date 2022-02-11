import React, { Component } from 'react'
import InputBox from './components/InputBox/InputBox.jsx'
import TodosList from './components/TodosList/TodosList.jsx'

class App extends Component {
  state = { 
    todos: [
      {id: "1", todo: "Learn JSX"},
      {id: "2", todo: "Learn Python"},
      {id: "3", todo: "Learn Something new from lIfe"},
      {id: "4", todo: "Learn JavaScript"},
      {id:"5", todo: "Learn Node js"}
    ]
   } 

   deleteTodo =(id)=>{
     let updatedTodos = this.state.todos.filter( function(todo){
       if(todo.id != id){
        return true;
       }
       else{
        return false;
       }
     })
    this.setState({
      todos: updatedTodos
    })
     console.log(updatedTodos);
   }

   addTodo = (todo) =>{
    let updatedTodos = [ ...this.state.todos , 
      {id:this.state.todos.length+1, todo: todo}]
    this.setState({todos:updatedTodos});
   }

  render() { 
    let todos = this.state.todos;
    let deleteTodo = this.deleteTodo;
    let addTodo = this.addTodo;
    return (
      <div className ="App">
      <InputBox addTodo={addTodo}></InputBox>
      <TodosList todos={todos} deleteTodo={deleteTodo}></TodosList>
      </div>
    );
  }
}
 
export default App;
