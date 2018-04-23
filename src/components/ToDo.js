import React from 'react';
import './todoItem.css';

function showId(props) {
    console.log("in ToDo.js function showId: ", props.id );
}

const ToDo = (props) => {
    console.log("in ToDo.js const ToDo", props);
    return (
        <div>
            <button className="removeTodo" onClick={(event) => showId(props)}>Remove</button>{/* ohne (event) => klappt es nicht */}
            Text: {props.children} | ID: {props.id}
        </div>
    )
}

export default ToDo;