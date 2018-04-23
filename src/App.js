import React, { Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import ToDo from './components/ToDo';
import './App.css';

class App extends Component {

  state = {
    todos: [
        {id:0, text:"go shopping"},
        {id:1, text:"make laundry"},
        {id:2, text:"clean room"},
    ],
    nexdId:3
};

  addTodoLocalApp = (task) => {
    console.log("App.js - task: ", task);
   // console.log("App.js - states[0]: ", this.state.todos[0])
    let newState = this.state.todos;
    const newId = this.state.todos[this.state.todos.length-1].id+1;
    //console.log("App.js - newId: ", newId);
    newState.push({id:newId, text:task});
    this.setState(newState);    
  }


  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <Input title="my title" addTodoAppInput={this.addTodoLocalApp} />
          <ul>
                {
                    this.state.todos.map(todos => {
                        return <ToDo key={todos.id} id={todos.id}>{todos.text}</ToDo>
                    })
                }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
