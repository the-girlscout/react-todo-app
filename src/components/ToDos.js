import React, { Component } from 'react';
import ToDo from './ToDo';

class ToDos extends Component {
    state = {
        todos: [
            {id:0, text:"go shopping"},
            {id:1, text:"make laundry"},
            {id:2, text:"clean room"},
        ],
        nexdId:3
    };

    render() {
    return (
            <div>
                {
                    this.state.todos.map(todos => {
                        return <ToDo key={todos.id} id={todos.id}>{todos.text}</ToDo>
                    })
                }
            </div>
        );
    }
}

export default ToDos;
